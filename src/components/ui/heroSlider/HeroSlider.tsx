import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import heroImage1 from "../../../assets/heroSlider1.jpg";
import heroImage2 from "../../../assets/heroSlider2.jpeg";
import heroImage3 from "../../../assets/heroSlider3.jpeg";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HeroSlider: React.FC = () => (
  <div className=" bg-black">
    <Carousel autoplay>
      <div className="w-full">
        <Image
          src={heroImage1}
          height={500}
          width={500}
          //   fill
          //   height={100}
          //   sizes="(min-width: 808px) 50vw, 100vw"
          //   style={{
          //     objectFit: "cover",
          //     height: "80%",
          //     width: "100%",
          //   }}
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full">
        <Image
          src={heroImage2}
          height={500}
          //   width={500}
          //   fill
          //   height={100}
          //   sizes="(min-width: 808px) 50vw, 100vw"
          style={
            {
              // objectFit: "cover",
              //   height: "100%",
              // width: "100%",
            }
          }
          alt="hrro bannar 1"
        />
      </div>
      <div className="w-full">
        <Image
          src={heroImage3}
          height={500}
          width={500}
          //   fill
          //   height={100}
          //   sizes="(min-width: 808px) 50vw, 100vw"
          //   style={{
          //     objectFit: "cover",
          //     height: "100%",
          //     width: "100%",
          //   }}
          alt="hrro bannar 1"
        />
      </div>
    </Carousel>
  </div>
);

export default HeroSlider;
