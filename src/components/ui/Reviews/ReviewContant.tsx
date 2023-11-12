import { Card, Rate } from "antd";
import Image from "next/image";
import { FC } from "react";

interface ReviewProps {
  author: string;
  image: string;
  rating: number;
  content: string;
}

const ReviewContant: FC<ReviewProps> = ({ author, image, rating, content }) => {
  return (
    <div className="sm:w-60 w-full">
      <Card className=" p-4 ">
        <div className="flex justify-between flex-col h-60">
          {" "}
          <div className="flex justify-center align-middle">
            <Image
              src={
                "https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }
              height={50}
              width={50}
              alt="host image"
              className="w-12 h-12 rounded-full border-2 "
            />
            <br />
          </div>
          <p className="mb-2 text-blue-500 text-xl">{author}</p>
          <div className="mb-2">
            <Rate allowHalf defaultValue={rating} />
            <p className="text-lg">{content}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReviewContant;
