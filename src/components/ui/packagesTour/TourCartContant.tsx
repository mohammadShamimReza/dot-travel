import { Card, Collapse } from "antd";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react"; // Import React from 'react' if not already imported
import { TourPackageData } from "./tourCommon";

const { Panel } = Collapse;

interface TourPackageProps {
  tourPackage: TourPackageData;
}

const TourCartContant: React.FC<TourPackageProps> = ({ tourPackage }) => {
  const {
    title = "Tour Package",
    description = "Tour Package Description and Features",
    images,
    pricing = "455",
    availability = "INSTOCK",
    locationFrom = "Dhaka",
    locationTo = "Chittagong",
    contactInfo = "0140141111",
    userReviews = "Great",
    relatedContent = "Nothing",
  } = tourPackage;
  return (
    <Link href={"TourPackages"} className=" ">
      {" "}
      <Card
        // title={title}
        hoverable
        style={{ height: "350px" }}
        bodyStyle={{ padding: 0 }}
        bordered={false}
      >
        <div className="tour-images ">
          {images.map(
            (
              image: string | StaticImport,
              index: React.Key | null | undefined
            ) => (
              <div className="w-full " key={index}>
                <Image
                  src={image}
                  key={index}
                  // width={100}
                  height={100}
                  style={{ width: "100%" }}
                  alt="hrro bannar 1"
                  className="rounded-xl rounded-b-none "
                />
              </div>
            )
          )}
        </div>
        <div className="p-3">
          <p>Pricing: {pricing}</p>
          <p>Availability: {availability}</p>

          <div>
            <p>
              From: {locationFrom}
              <div className=""></div>
              To: {locationTo}
            </p>
            <p>Contact Information: {contactInfo}</p>
            <p>User Reviews and Ratings: {userReviews}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TourCartContant;
