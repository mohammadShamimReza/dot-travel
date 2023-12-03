"use client";
import { useUser } from "@/lib/UserProvider";
import { useAddToCartPackageToursQuery } from "@/redux/api/addToCartPackageApi";

import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useRef } from "react";
import NavTop from "./NavTop";
import NavbarDropdown from "./NavbarDropdown";

function NavBar() {
  const { user } = useUser();
  const { id, role } = user;
  const { data } = useAddToCartPackageToursQuery({ userId: id });
  const resultRef = useRef<any>(null); // Use 'any' for flexibility
  useEffect(() => {
    const addToCartResult = data?.data?.filter(
      (addTOcartData: { id: string; userId: string; packageId: string }) => {
        const res = addTOcartData.userId === id;
        return res;
      }
    );
    resultRef.current = addToCartResult;
  }, [data?.data, id, user]);

  const result = resultRef.current;

  return (
    <nav className="w-full">
      <NavTop />
      <div className="flex items-center justify-between px-8 h-24 bg-gray-500 text-white">
        <Link href="/" className="text-3xl font-bold font-serif">
          Dot-Travel
        </Link>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/TourPackages">Tour package</Link>

            <Link href="/about">
              <button className=" flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className=" flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                Contact
              </button>
            </Link>
            <Link href="/favouritePages">
              <button className=" flex justify-center align-middle rounded-full bg-white p-3 cursor-pointer hover:bg-slate-300 ">
                {/* <Badge count={result ? result?.length : 0}> */}
                <ShoppingCartOutlined className="" style={{ color: "black" }} />
                {/* </Badge> */}
              </button>
            </Link>

            <NavbarDropdown />
          </div>
          <div>
            <Link href={"/become-host"}>
              <div className="bg-blue-600 w-40 p-3 border rounded-full text-slate-200 hover:bg-blue-500 hover:text-white hover:transition-all duration-300 text-lg text-center mx-auto cursor-pointer">
                Become a host
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
