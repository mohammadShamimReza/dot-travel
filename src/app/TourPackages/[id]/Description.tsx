"use client";
import { useUser } from "@/lib/UserProvider";
import { usePackageTourByIdQuery } from "@/redux/api/packageApi";
import { IPackageReviewAndRating } from "@/types";
import { Avatar, Card, Rate } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BookingModal from "./BookingModal";
  const images = [1, 2, 3, 4];

  const PropertyDescriptionPage = () => {
    const { user } = useUser();
    const { id } = user;
    const pathName = usePathname();
    const parts = pathName.split("/");
    const desiredPart = parts[parts.length - 1];

    const { data: tourPackageDatas } = usePackageTourByIdQuery(desiredPart);

    const tourPackageData = tourPackageDatas?.data;

    const desc = ["terrible", "bad", "normal", "good", "wonderful"];


    return (
      <div className="container mx-auto p-4 min-h-screen">
        {" "}
        <div className="flex space-x-4">
          <div className="w-3/4">
            {!tourPackageData?.packageImage ? (
              <div className="flex flex-wrap justify-center">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                  >
                    <Card style={{ width: 250, marginTop: 16 }} loading={true}>
                      <Card.Meta
                        avatar={
                          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                        }
                        title="Card title"
                        description="This is the description"
                      />
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                  >
                    <Image
                      src={tourPackageData?.packageImage}
                      width={300}
                      height={300}
                      alt={"this is tour package image " + index}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                ))}
              </div>
            )}

            <br />
            <br />
            <br />
            <p className="text-lg mb-4">
              <span className="font-bold text-blue-500">Description: </span>{" "}
              <span className="text-gray-600 italic">
                {tourPackageData?.description}
              </span>
              <br />
              <br />
              <span className="font-bold text-gray-800">From: </span>
              <span className="text-gray-700">{tourPackageData?.from}</span>
              <br />
              <br />
              <span className="font-bold text-gray-800">To: </span>
              <span className="text-gray-700">{tourPackageData?.to}</span>
              <br />
              <br />
              <span className="font-bold text-gray-800">Capability: </span>
              <span className="text-green-600">{tourPackageData?.maxUser}</span>
            </p>
            <br />
            <br />

            <div className="">
              <div className="flex justify-center  text-blue-600 text-2xl">
                Reviews & Ratings
              </div>
              {tourPackageData?.packageReviewAndRating?.map(
                (packaged: IPackageReviewAndRating) => (
                  <div key={packaged.id} className="">
                    <br />
                    <br />
                    <div className="flex justify-left align-middle gap-5 border p-5 rounded-lg">
                      {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
                      <Image
                        src={
                          packaged.user.profileImage ||
                          "https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                        }
                        width={40}
                        height={40}
                        // layout="responsive"
                        // objectFit="cover"
                        alt="package image"
                        className=""
                      ></Image>
                      <div className="">
                        <span>
                          <Rate
                            disabled
                            defaultValue={parseInt(packaged.rating)}
                          />
                        </span>
                        <p className="text-blue-600 ">{packaged.review}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <br />
            <br />
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
