import ReviewContant from "./ReviewContant";

const ReviewContantCart = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-between">
        <ReviewContant
          author="John Doe"
          date="2023-10-14"
          rating={4.5}
          content="Great product. I loved it!"
        />
        <ReviewContant
          author="Jane Smith"
          date="2023-10-15"
          rating={5}
          content="This is the best product I've ever used."
        />
        <ReviewContant
          author="Jane Smith"
          date="2023-10-15"
          rating={5}
          content="This is the best product I've ever used."
        />
        <ReviewContant
          author="Jane Smith"
          date="2023-10-15"
          rating={5}
          content="This is the best product I've ever used."
        />

        {/* Add more reviews as needed */}
      </div>
    </div>
  );
};

export default ReviewContantCart;
