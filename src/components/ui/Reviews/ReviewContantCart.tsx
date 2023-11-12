import { useRaviewTourQuery } from "@/redux/api/ratingAndReviewTourApi";
import { IUser } from "@/types";
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
    user: IUser;
  };

  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-between">
        {reviewDatas?.map((reviewData: reviewType) => (
          <ReviewContant
            key={reviewData.id}
            author={reviewData.user.firstName}
            image={""}
            rating={parseInt(reviewData?.rating)}
            content={reviewData.review}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewContantCart;
