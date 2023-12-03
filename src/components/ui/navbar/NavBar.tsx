"use client";
import { useUser } from "@/lib/UserProvider";
import { useAddToCartPackageToursQuery } from "@/redux/api/addToCartPackageApi";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { GiEternalLove } from "react-icons/gi";
import companyLogo from "../../../assets/company_log.jpg";
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
      <div className="h-10 bg-gray-800 flex items-center justify-between text-gray-300 px-10">
        <div className="flex gap-5">
          <span>
            <PhoneOutlined /> +01719317307
          </span>{" "}
          |
          <span>
            {" "}
            <MailOutlined /> mohammadshamimreza23393@gmail.com
          </span>
        </div>
        <div className="flex gap-5 ">
          <FacebookOutlined className="hover:cursor-pointer hover:text-blue-500" />
          <TwitterOutlined className="hover:cursor-pointer hover:text-blue-400" />
          <YoutubeOutlined className="hover:cursor-pointer hover:text-red-600" />
          <InstagramOutlined className="hover:cursor-pointer hover:text-red-400" />
        </div>
      </div>
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
