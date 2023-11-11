import { usePackageTourQuery } from "@/redux/api/packageApi";
import { Avatar, Card } from "antd";
import { Key } from "react";
import heroImage1 from "../../../assets/heroImage1.jpg";
import heroImage2 from "../../../assets/heroImage2.jpg";
import heroImage3 from "../../../assets/heroImage3.jpg";
import DynamicTourCartContant from "./DynamicTourCartContant";
import { DynamicTourPackageData, TourPackageData } from "./tourCommon";

const TourPackageCart = () => {
  const loadingData = [1, 2, 3, 4, 5, 6, 7, 8];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: tourPackages, isLoading } = usePackageTourQuery({});

  if (!tourPackages) {
    return (
      <div className="min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {loadingData.map((item) => (
            <Card
              key={item}
              style={{ width: 250, marginTop: 16 }}
              loading={true}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!tourPackages.data) {
    return (
      <div className="min-h-screen">
        <h1 className="text-center text-9xl text-blue-600">Data not found</h1>
      </div>
    );
  }
  const tourPackagesdata: TourPackageData[] = [
    {
      title: "Tour Package 1",
      description: "Tour Package Description and Features",
      images: [heroImage1], // You can add image URLs here
      pricing: "455",
      availability: "INSTOCK",
      locationFrom: "Dhaka",
      locationTo: "Chittagong",
      contactInfo: "0140141111",
      userReviews: "Great",
      relatedContent: "Nothing",
    },
    {
      title: "Tour Package 2",
      description: "Another Tour Package Description",
      images: [heroImage2],
      pricing: "550",
      availability: "OUTOFSTOCK",
      locationFrom: "Dhaka",
      locationTo: "Sylhet",
      contactInfo: "0140142222",
      userReviews: "Amazing",
      relatedContent: "Something",
    },
    {
      title: "Tour Package 2",
      description: "Another Tour Package Description",
      images: [heroImage1], // You can add image URLs here
      pricing: "550",
      availability: "OUTOFSTOCK",
      locationFrom: "Dhaka",
      locationTo: "Sylhet",
      contactInfo: "0140142222",
      userReviews: "Amazing",
      relatedContent: "Something",
    },
    {
      title: "Tour Package 2",
      description: "Another Tour Package Description",
      images: [heroImage2], // You can add image URLs here
      pricing: "550",
      availability: "OUTOFSTOCK",
      locationFrom: "Dhaka",
      locationTo: "Sylhet",
      contactInfo: "0140142222",
      userReviews: "Amazing",
      relatedContent: "Something",
    },
    {
      title: "Tour Package 2",
      description: "Another Tour Package Description",
      images: [heroImage3], // You can add image URLs here
      pricing: "550",
      availability: "OUTOFSTOCK",
      locationFrom: "Dhaka",
      locationTo: "Sylhet",
      contactInfo: "0140142222",
      userReviews: "Amazing",
      relatedContent: "Something",
    },
    {
      title: "Tour Package 2",
      description: "Another Tour Package Description",
      images: [heroImage1], // You can add image URLs here
      pricing: "550",
      availability: "OUTOFSTOCK",
      locationFrom: "Dhaka",
      locationTo: "Sylhet",
      contactInfo: "0140142222",
      userReviews: "Amazing",
      relatedContent: "Something",
    },
  ];

  return (
    <div className="flex justify-center align-middle">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {tourPackages?.data?.data?.map(
          (
            tourPackage: DynamicTourPackageData,
            index: Key | null | undefined
          ) => (
            <DynamicTourCartContant
              key={index}
              tourPackage={tourPackage}
              isLoading={isLoading}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TourPackageCart;
