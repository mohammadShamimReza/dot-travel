import { Card, Rate } from "antd";
import Image from "next/image";
import { FC } from "react";
import heroImage1 from "../../../assets/companyLogo1.jpeg";

interface ReviewProps {
  author: string;
  date: string;
  rating: number;
  content: string;
}

const ReviewContant: FC<ReviewProps> = ({ author, date, rating, content }) => {
  return (
    <div className="sm:w-60 w-full">
      <Card className=" p-4 ">
        <div className="flex justify-between">
          <Image
            src={heroImage1}
            height={50}
            width={50}
            alt="host image"
            className="w-12 h-12 rounded-full border-2 "
          />

          <p className="text-gray-600 text-sm mb-2">
            {author} <br /> {date}
          </p>
        </div>
        <div className="mb-2">
          <Rate allowHalf defaultValue={rating} />
        </div>
        <p className="text-lg">{content}</p>
      </Card>
    </div>
  );
};

export default ReviewContant;
