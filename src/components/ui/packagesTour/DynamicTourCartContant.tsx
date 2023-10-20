import { Avatar, Card, Collapse } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import React from "react"; // Import React from 'react' if not already imported
import { SiYourtraveldottv } from "react-icons/si";
import { DynamicTourPackageData } from "./tourCommon";

const { Panel } = Collapse;

interface TourPackageProps {
  tourPackage: DynamicTourPackageData;
  isLoading: any;
}

const DynamicTourCartContant: React.FC<TourPackageProps> = ({
  tourPackage,
  isLoading,
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

  console.log(tourPackage);

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
        className="text-black hover:text-pink-600"
        href={`/TourPackages/${id}`}
      >
        {" "}
        <div className="tour-images ">
          {/* {images.map(
          (
            image: string | StaticImport,
            index: React.Key | null | undefined
          ) => (
            <div className="w-full " key={index}>
              <Image
                src={image}
                key={index}
                // width={100}
                height={100}
                style={{ width: "100%" }}
                alt="hrro bannar 1"
                className="rounded-xl rounded-b-none "
              />
            </div>
          )
        )} */}
          <SiYourtraveldottv className="w-60 h-36 pt-3" />
        </div>
        <div className="p-3">
          <p>{title}</p>
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
