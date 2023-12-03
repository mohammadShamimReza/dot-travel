"use client";
import { useUser } from "@/lib/UserProvider";
import { useAddToCartPackageToursQuery } from "@/redux/api/addToCartPackageApi";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import banner from "../../../assets/bannerBg.png";
import NavTop from "./NavTop";
import NavbarDropdown from "./NavbarDropdown";

function NavBar() {
  const { user } = useUser();
  const { id, role } = user;
  const { data } = useAddToCartPackageToursQuery({ userId: id });
  const resultRef = useRef<any>(null);
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
      <div className="relative">
        <div className="absolute  z-0 w-full" style={{ height: "500px" }}>
          <div className="">
            <Image src={banner} alt="banner IMage" fill objectFit="cover" />
          </div>
          <div className="absolute top-1/2 bottom-1/5 text-center w-full">
            <p className="text-7xl text-white font-serif font-semibold">
              Let the journey begin
            </p>
            <p className="text-xl text-white font-serif font-semibold ">
              Get the best prices on 2,000,000+ properties, worldwide
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-8 h-24 bg-gray-700 text-white z-10 opacity-80">
          <Link href="/" className="text-3xl font-bold font-serif">
            <button className=" flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
              Dot Travel
            </button>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Link href="/about">
                <button className=" flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                  Tours
                </button>
              </Link>
              <Link href="/about">
                <button className=" flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                  Activity
                </button>
              </Link>
              <Link href="/about">
                <button className=" flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                  Hotels
                </button>
              </Link>
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
                  <Badge count={result ? result?.length : 0}>
                    <ShoppingCartOutlined
                      className=""
                      style={{ color: "black" }}
                    />
                  </Badge>
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
      </div>
    </nav>
  );
}

export default NavBar;
