import { Avatar, Card, Collapse } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react"; // Import React from 'react' if not already imported
import { DynamicTourPackageData } from "./tourCommon";

const { Panel } = Collapse;

interface TourPackageProps {
  tourPackage: DynamicTourPackageData;
  isLoading: any;
}

const DynamicTourCartContant = ({
  tourPackage,
  isLoading,
}: {
  tourPackage: DynamicTourPackageData;
  isLoading: any;
}) => {
  const {
    description,
    destination,
    from,
    id,
    maxUser,
    packageImage,
    price,
    title,
    to,
  } = tourPackage;


  const avatarRef = useRef(null);

  if (isLoading === true) {
    return (
      <div className="flex flex-col items-center justify-center mt-6 border ">
        <br />
        <br />
        <Card style={{ width: 400, marginTop: 16 }} loading={true}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    );
  }

  return (
    <Card
      // title={title}
      hoverable
      // style={{ height: "350px" }}
      bodyStyle={{
        padding: 5,
        border: "0.5px solid gray",
        height: "100%",
        borderRadius: "10px",
      }}
      bordered={false}
    >
      <Link
        className="text-black hover:text-blue-600 "
        href={`/TourPackages/${id}`}
      >
        <div className="flex justify-between flex-col ">
          <div className=" ">
            <div
              ref={avatarRef}
              className="flex justify-center align-middle  h-40 p-3 "
            >
              <Image
                src={packageImage || "https://i.ibb.co/F5NtMw0/images.jpg"}
                width={200}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt="package image"
              ></Image>
            </div>
          </div>
          <div className="p-3 ">
            <div className="p-3">
              <p className="text-xl font-bold ">{title}</p>

              <p className="text-gray-500 text-base"> {destination}</p>
              <hr />
              <br />
              <p className="text-gray-500">
                From:{" "}
                <span className="text-lg font-bold text-black">${price} </span>{" "}
                /night
              </p>
              <br />
              <div>
                <p>Max User: {maxUser}</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </Link>
    </Card>
  );
};

export default DynamicTourCartContant;
