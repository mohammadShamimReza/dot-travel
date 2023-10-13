import Partners from "@/components/ui/Partners/Partners";
import ReviewCarousel from "@/components/ui/Reviews/ReviewCarousel";
import HeroSlider from "@/components/ui/heroSlider/HeroSlider";
import SoloPackage from "@/components/ui/soloPackage/SoloPackage";
import TourPackage from "@/components/ui/tourPackage/TourPackage";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <TourPackage />
      <SoloPackage />
      <Partners />
      <ReviewCarousel />
      {/* <AboutUs /> */}
    </div>
  );
}
