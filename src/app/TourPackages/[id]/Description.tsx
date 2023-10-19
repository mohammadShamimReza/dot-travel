"use client";
import { usePackageTourByIdQuery } from "@/redux/api/packageApi";
import { Card } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import travelImage from "../../../assets/heroImage1.jpg";
import BookingModal from "./BookingModal";

const PropertyDescriptionPage = () => {
  const pathName = usePathname();
  const parts = pathName.split("/");
  const desiredPart = parts[parts.length - 1];
  console.log(desiredPart);

  const { data: tourPackageData } = usePackageTourByIdQuery(desiredPart);

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
              <BookingModal tourPackageData={tourPackageData} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescriptionPage;
