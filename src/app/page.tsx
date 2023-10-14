import Partners from "@/components/ui/Partners/Partners";
import ReviewContantCart from "@/components/ui/Reviews/ReviewContantCart";
import HeroSlider from "@/components/ui/heroSlider/HeroSlider";
import SoloPackageCart from "@/components/ui/soloPackage/SoloPackageCart";
import TourPackageCart from "@/components/ui/tourPackage/TourPackageCart";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  return (
    <div>
      <div className="">
        <HeroSlider />
      </div>
      <div className="mt-12">
        <div className="text-4xl font-semibold text-center transition-transform transform hover:scale-105 text-pink-500">
          Our Special Tour
        </div>

        <div className="m-11">
          <TourPackageCart />
        </div>
        <div className="text-right">
          <button>
            <Link href="/package-tour"> See more Tours</Link>{" "}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="">Our Special Tour</div>
        <div className="m-11">
          {" "}
          <SoloPackageCart />
        </div>

        <div className="text-right">
          <button>
            <Link href="/package-tour"> See more Tours</Link>{" "}
          </button>
        </div>
      </div>

      <div className="">
        <h1 className="text-center">Trusted By</h1>
        <Partners />
      </div>
      <div className="">
        <p className="text-center">Happy Users</p>
        <div className="m-10">
          {" "}
          <ReviewContantCart />
        </div>
      </div>
      {/* <AboutUs /> */}
    </div>
  );
}
