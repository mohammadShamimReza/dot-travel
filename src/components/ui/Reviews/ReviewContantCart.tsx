import { useRaviewTourQuery } from "@/redux/api/ratingAndReviewTourApi";
import { ICustomer } from "@/types";
import ReviewContant from "./ReviewContant";

const ReviewContantCart = () => {
  const { data } = useRaviewTourQuery({});
  const reviewDatas = data?.data;

  type reviewType = {
    id: string;
    review: string;
    rating: string;
    userId: string;
    packageId: string;
    Customer: ICustomer;
  };

  console.log(reviewDatas);

  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-between">
        {reviewDatas?.slice(0, 4).map((reviewData: reviewType) => (
          <ReviewContant
            key={reviewData.id}
            author={reviewData.Customer.firstName}
            image={reviewData.Customer.profileImage}
            rating={parseInt(reviewData?.rating)}
            content={reviewData.review}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewContantCart;
