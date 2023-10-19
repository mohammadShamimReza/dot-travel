// components/AboutUs.js

import Image from "next/image";
import companyLogo from "../../../assets/company_log.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800">
              About Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec velit id turpis mattis cursus. Vivamus in erat eu elit luctus
              vestibulum. Integer ac dui sed dui efficitur tristique.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={companyLogo}
                alt="About Us"
                className="object-cover w-full h-64 md:h-96 lg:h-full transition-transform transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
