"use client";
import { useAddToCartPackageToursQuery } from "@/redux/api/addToCartPackageApi";
import { getUserInfo } from "@/services/auth.service";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { GiEternalLove } from "react-icons/gi";
import companyLogo from "../../../assets/company_log.jpg";
import NavbarDropdown from "./NavbarDropdown";

function NavBar() {
  const { id } = getUserInfo() as any;
  const { data } = useAddToCartPackageToursQuery({ userId: id });
  const result = data?.data?.filter(
    (addTOcartData: { id: string; userId: string; packageId: string }) => {
      const res = addTOcartData.userId === id;
      return res;
    }
  );

  return (
    <nav className="p-2 pb-9 ">
      <div className="flex items-center justify-between ">
        <Link href="/">
          <Image
            className="rounded-full"
            src={companyLogo}
            width={70}
            height={50}
            alt="company logo"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/TourPackages">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                Tour package
              </button>
            </Link>
            <Link href="/favouritePages">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                <Badge count={result ? result?.length : 0}>
                  <GiEternalLove className="w-8 h-8 hover:text-blue-600 text-blue-500" />
                </Badge>
              </button>
            </Link>
            <Link href="/about">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                Contact
              </button>
            </Link>

            <NavbarDropdown />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </nav>
  );
}

export default NavBar;
