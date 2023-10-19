import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TourPackageData } from "./tourCommon";

// Define the TourPackageProps type/interface
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
    <Link href="/TourPackages">
      <Card
        hoverable
        style={{ height: "350px" }}
        bodyStyle={{ padding: 0 }}
        bordered={false}
      >
        <div className="tour-images">
          {images.map((image: string, index: number) => (
            <div className="w-full" key={index}>
              <Image
                src={image}
                height={100}
                style={{ width: "100%" }}
                alt="Tour Banner"
                className="rounded-xl rounded-b-none"
              />
            </div>
          ))}
        </div>
        <div className="p-3">
          <p>Pricing: {pricing}</p>
          <p>Availability: {availability}</p>

          <div>
            <p>
              From: {locationFrom}
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
