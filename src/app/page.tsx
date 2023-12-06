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
      <div className="">
        <div className="text-4xl max-w-7xl font-semibold text-center   mb-10">
          Top destinations
        </div>

        <div className="">
          <TourPackageCart />
        </div>
        <div className="text-right">
          <button className="mb-10 underline  ">
            <Link href="/TourPackages">
              {" "}
              See more <DoubleRightOutlined />
            </Link>{" "}
          </button>
        </div>
      </div>

      <div className="">
        <div className="text-4xl font-semibold text-center mb-10 ">
          Trusted By
        </div>

        <div className="">
          <Partners />
        </div>
      </div>
      <div className="">
        <div className="text-4xl font-semibold text-center my-20">
          Happy Users
        </div>

        <div className="mb-28 mt-9">
          <ReviewContantCart />
        </div>
      </div>

      {/* <AboutUs /> */}
    </div>
  );
}
