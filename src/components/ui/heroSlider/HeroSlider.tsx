import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import heroImage1 from "../../../assets/heroImage1.jpg";
import heroImage2 from "../../../assets/heroImage2.jpg";
import heroImage3 from "../../../assets/heroImage3.jpg";
import heroImage4 from "../../../assets/heroImage4.png";
import heroImage5 from "../../../assets/heroImage5.jpg";
import heroImage6 from "../../../assets/heroImage6.jpg";

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
      <div className="w-full h-96">
        <Image
          src={heroImage4}
          style={{ height: "100%" }}
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full h-96">
        <Image
          src={heroImage5}
          style={{ height: "100%" }}
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full h-96">
        <Image
          src={heroImage6}
          style={{ height: "100%" }}
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full h-96">
        <Image
          src={heroImage1}
          style={{ height: "100%" }}
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full h-96">
        <Image
          src={heroImage2}
          style={{ height: "100%" }}
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full h-96">
        <Image
          src={heroImage3}
          style={{ height: "100%" }}
          alt="hrro bannar 1"
        />
      </div>
    </Carousel>
  </div>
);

export default HeroSlider;
