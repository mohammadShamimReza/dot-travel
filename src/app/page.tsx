import Partners from "@/components/ui/Partners/Partners";
import ReviewCarousel from "@/components/ui/Reviews/ReviewCarousel";
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
        <div className="">Our Special Tour</div>
        <div className="m-11">
          <TourPackageCart />
        </div>
        <div className="text-right">
          <button>
            <Link href="/package-tour"> See more Tours</Link>{" "}
          </button>
        </div>
      </div>

      <div className="">
        <div className="">Our Special Tour</div>
        <div className="">
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
        <Partners />
      </div>
      <div className="">
        <ReviewCarousel />
      </div>
      {/* <AboutUs /> */}
    </div>
  );
}
