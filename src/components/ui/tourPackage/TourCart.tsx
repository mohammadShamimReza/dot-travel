import { Card, Collapse } from "antd";
import React from "react"; // Import React from 'react' if not already imported
import { TourPackageData } from "./tourCommon";

const { Panel } = Collapse;

interface TourPackageProps {
  tourPackage: TourPackageData;
}

const TourCart: React.FC<TourPackageProps> = ({ tourPackage }) => {
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
    <div className="">
      <Card title={title} hoverable style={{}}>
        <p>{description}</p>
        <div className="tour-images">
          {/* {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))} */}
        </div>
        <p>
          <strong>Pricing:</strong> {pricing}
        </p>
        <p>
          <strong>Availability:</strong> {availability}
        </p>
        {/* <Collapse ghost>
        <Panel header="This is panel header 1" key="1"> */}
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
          <p>
            <strong>Related Content/Services:</strong> {relatedContent}
          </p>
        </div>
        {/* </Panel>
      </Collapse> */}
      </Card>
    </div>
  );
};

export default TourCart;
