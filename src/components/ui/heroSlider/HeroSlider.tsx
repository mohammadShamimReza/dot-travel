import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import heroImage1 from "../../../assets/heroImage1.jpg";
import heroImage2 from "../../../assets/heroImage2.jpg";
import heroImage3 from "../../../assets/heroImage3.jpg";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HeroSlider: React.FC = () => (
  <div className=" ">
    <Carousel autoplay>
      <div className="w-full">
        <Image src={heroImage1} height={100} width={1246} alt="hrro bannar 1" />
      </div>
      <div className="w-full">
        <Image src={heroImage2} height={100} width={1246} alt="hrro bannar 1" />
      </div>
      <div className="w-full">
        <Image src={heroImage3} height={100} width={1246} alt="hrro bannar 1" />
      </div>
    </Carousel>
  </div>
);

export default HeroSlider;
