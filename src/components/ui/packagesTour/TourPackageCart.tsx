import heroImage1 from "../../../assets/heroImage1.jpg";
import heroImage2 from "../../../assets/heroImage2.jpg";
import heroImage3 from "../../../assets/heroImage3.jpg";
import TourCartContant from "./TourCartContant";
import { TourPackageData } from "./tourCommon";

const TourPackageCart = () => {
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
        {tourPackagesdata.map((tourPackage, index) => (
          <TourCartContant key={index} tourPackage={tourPackage} />
        ))}
      </div>
    </div>
  );
};

export default TourPackageCart;
