"use client";
import { usePackageTourByIdQuery } from "@/redux/api/packageApi";
import { getUserInfo } from "@/services/auth.service";
import { IpackageReviewAndRating } from "@/types";
import { Card } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineRateReview } from "react-icons/md";
import travelImage from "../../../assets/heroImage1.jpg";
import BookingModal from "./BookingModal";

const PropertyDescriptionPage = () => {
  const { id } = getUserInfo() as any;
  const pathName = usePathname();
  const parts = pathName.split("/");
  const desiredPart = parts[parts.length - 1];
  console.log(desiredPart);

  const { data: tourPackageData } = usePackageTourByIdQuery(desiredPart);

  console.log(tourPackageData);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {" "}
      <div className="flex space-x-4">
        <div className="w-3/4">
          <Image
            src={travelImage}
            width={300}
            height={300}
            alt={"this is tour package image  "}
            className="rounded-full"
          />
          <br />
          <br />
          <br />
          <p className="text-gray-600 text-sm mb-4">
            Desctiption: {tourPackageData?.description}
            <br />
            From: {tourPackageData?.from}
            <br />
            TO: {tourPackageData?.to}
            <br />
            Capability {tourPackageData?.maxUser}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tourPackageData?.packageReviewAndRating?.map(
              (packaged: IpackageReviewAndRating) => (
                <div key={packaged.id} className="">
                  <div className="flex justify-center align-middle">
                    <MdOutlineRateReview className="w-8 h-8 hover:text-pink-600 text-pink-500" />
                  </div>
                  rating: <p className="text-pink-600">{packaged.rating}</p>{" "}
                  <br />
                  review: <p className="text-pink-600">
                    {packaged.review}
                  </p>{" "}
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-1/4">
          {/* Sticky card */}
          <div className="sticky top-0">
            <Card className="rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold mb-4">
                {tourPackageData?.title}
              </h1>
              <div className="mb-4">
                <br />
                From: {tourPackageData?.from}
                <br />
                TO: {tourPackageData?.to}
                <br />
                Deatination: {tourPackageData?.destination}
                <br />
              </div>

              <p className="text-blue-600 font-semibold">
                Total: ${tourPackageData?.price}
              </p>
              <BookingModal tourPackageData={tourPackageData} userId={id} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescriptionPage;
