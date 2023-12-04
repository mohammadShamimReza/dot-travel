"use client";
import Partners from "@/components/ui/Partners/Partners";
import ReviewContantCart from "@/components/ui/Reviews/ReviewContantCart";
import TourPackageCart from "@/components/ui/packagesTour/TourPackageCart";
import { DoubleRightOutlined, LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaFlagCheckered, FaRegCheckSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  return (
    <div className="pt-96">
      <div className=" mx-auto my-auto w-auto pt-10">
        <div className="  border-2 mx-auto my-auto rounded-2xl lg:rounded-full flex lg:flex-row  flex-col align-middle justify-between">
          <div className="hover:border rounded-2xl lg:rounded-full  p-3">
            <div className="flex justify-evenly align-middle gap-2">
              <IoLocation className="w-8 h-8" />
              <div className="flex flex-col">
                Location{" "}
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Where are you going?"
                />
              </div>
            </div>
          </div>
          <div className="hover:border rounded-full  p-3">
            <div className="flex justify-evenly align-middle gap-2">
              <FaFlagCheckered className="w-8 h-8" />
              <div className="flex flex-col">
                Check In{" "}
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder={new Date().toLocaleDateString()}
                />
              </div>
            </div>
          </div>
          <div className="hover:border rounded-full  p-3">
            <div className="flex justify-evenly align-middle gap-2">
              <FaRegCheckSquare className="w-8 h-8" />
              <div className="flex flex-col">
                Check Out{" "}
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder={new Date().toLocaleDateString()}
                />
              </div>
            </div>
          </div>
          <div className="hover:border rounded-full  p-3">
            <div className="flex justify-center align-middle gap-2 h-full">
              <div>
                <Link href={"/become-host"}>
                  <div className="bg-blue-600  p-3 border rounded-full text-slate-200 hover:bg-blue-500 hover:text-white hover:transition-all duration-300 text-lg text-center mx-auto cursor-pointer flex">
                    <CiSearch className="w-7 h-7" />
                    Search
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-28">
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-blue-500">
          Our Special Tour
        </div>

        <div className="">
          <TourPackageCart />
        </div>
        <div className="text-right">
          <button className="transition-transform transform hover:scale-105 text-blue-500 ">
            <Link href="/TourPackages">
              {" "}
              See more Packages <DoubleRightOutlined />
            </Link>{" "}
          </button>
        </div>
      </div>

      <div className="">
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-blue-500">
          Trusted By
        </div>

        <div className="">
          <Partners />
        </div>
      </div>
      <div className="">
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-blue-500">
          Happy Users
        </div>

        <div className="">
          <ReviewContantCart />
        </div>
      </div>

      {/* <AboutUs /> */}
    </div>
  );
}
