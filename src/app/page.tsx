"use client";
import Partners from "@/components/ui/Partners/Partners";
import ReviewContantCart from "@/components/ui/Reviews/ReviewContantCart";
import TourPackageCart from "@/components/ui/packagesTour/TourPackageCart";
import { DoubleRightOutlined, LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  return (
    <div className="pt-96">
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
