import { Card, Collapse } from "antd";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
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
    <div className="" style={{}}>
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
                  className="rounded-xl border-2"
                />
              </div>
            )
          )}
        </div>
        <div className="p-3">
          <p>
            <strong>Pricing:</strong> {pricing}
          </p>
          <p>
            <strong>Availability:</strong> {availability}
          </p>

          <div>
            <p>
              <strong>From:</strong> {locationFrom}
              <div className=""></div>
              <strong>To:</strong> {locationTo}
            </p>
            <p>
              <strong>Contact Information:</strong> {contactInfo}
            </p>
            <p>
              <strong>User Reviews and Ratings:</strong> {userReviews}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TourCartContant;
