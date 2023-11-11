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
      <div className="flex flex-col items-center justify-center mt-6">
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
      style={{ height: "350px" }}
      bodyStyle={{ padding: 0 }}
      bordered={false}
    >
      <Link
        className="text-black hover:text-blue-600"
        href={`/TourPackages/${id}`}
      >
        {" "}
        <div className="">
          <div
            ref={avatarRef}
            className="flex justify-center align-middle h-40 "
          >
            {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
            <Image
              src={packageImage}
              width={200}
              height={100}
              layout="responsive"
              objectFit="cover"
              alt="package image"
              // className="w-full h-32"
            ></Image>
          </div>
        </div>
        <div className="p-3 ">
          <p className="text-lg text-blue-600">{title}</p>
          <p>Price: {price}</p>
          <p>Destination: {destination}</p>

          <div>
            <p>
              From: {from}
              To: {to}
            </p>
            <p>Max User: {maxUser}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default DynamicTourCartContant;
