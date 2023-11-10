import Partners from "@/components/ui/Partners/Partners";
import ReviewContantCart from "@/components/ui/Reviews/ReviewContantCart";
import HeroSlider from "@/components/ui/heroSlider/HeroSlider";
import TourPackageCart from "@/components/ui/packagesTour/TourPackageCart";
import { DoubleRightOutlined, LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  return (
    <div>
      <div className="">
        <HeroSlider />
      </div>
      <div className="mt-12">
        <hr />
        <br />

        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-pink-500">
          Our Special Tour
        </div>
        <br />
        <hr />
        <div className="m-11">
          <TourPackageCart />
        </div>
        <div className="text-right">
          <button className="transition-transform transform hover:scale-105 text-pink-500 ">
            <Link href="/TourPackages">
              {" "}
              See more Packages <DoubleRightOutlined />
            </Link>{" "}
          </button>
        </div>
      </div>
      {/* 
      <div className="pt-28">
        <hr />
        <br />
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-pink-500">
          Solo Rooms
        </div>
        <br />
        <hr />
        <div className="pt-20">
          {" "}
          <SoloPackageCart />
        </div>

        <div className="text-right pt-10">
          <button className="transition-transform transform hover:scale-105 text-pink-500 ">
            <Link href="/solo" className="">
              {" "}
              See more Rooms <DoubleRightOutlined />
            </Link>{" "}
          </button>
        </div>
      </div> */}

      <div className="mt-28">
        <hr />
        <br />
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-pink-500">
          Trusted By
        </div>
        <br />
        <hr />
        <div className="p-28">
          <Partners />
        </div>
      </div>
      <div className="mt-20">
        <hr />
        <br />
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-pink-500">
          Happy Users
        </div>
        <br />
        <hr />
        <div className="m-10 mb-40">
          <ReviewContantCart />
        </div>
      </div>
      <hr />
      <br />

      <br />

      {/* <AboutUs /> */}
    </div>
  );
}
