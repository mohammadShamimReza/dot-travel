"use client";
import {
  useDeletePackageTourMutation,
  usePackageTourQuery,
} from "@/redux/api/packageApi";
import { IPackage } from "@/types";
import { Avatar, Card, message } from "antd";
import Image from "next/image";
import { useState } from "react";
import AddPackageModal from "../modal/package/AddPackageModal";
import EditPackageModal from "../modal/package/EditPackageModal";

function Manage_package() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = usePackageTourQuery({});
  const [deletePackageTour] = useDeletePackageTourMutation();

  const packages = data?.data?.data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeletePackage = async (id: string) => {
    try {
      message.loading("Deleteting package category");
      const result = await deletePackageTour(id);

      if (result !== undefined) {
        message.success("package category deleted successfully");
      }
    } catch (error) {
      message.success("package category not deleted successfully");
    }
  };

  if (!data) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loadingData.map((item) => (
          <Card key={item} style={{ width: 250, marginTop: 16 }} loading={true}>
            <Card.Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        ))}
      </div>
    );
  }


  return (
    <>
      <AddPackageModal />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {packages?.map((packaged: IPackage) => (
          <div
            key={packaged.id}
            className="border flex flex-col justify-between"
          >
            <div className="">
              <div className="flex justify-center align-middle h-40">
                {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
                <Image
                  src={
                    packaged?.packageImage ||
                    "https://i.ibb.co/F5NtMw0/images.jpg"
                  }
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  alt="package image"
                  // className="w-full h-32"
                ></Image>
              </div>
            </div>
            <br />
            <div className="">
              <p className="font-bold text-lg">{packaged.title}</p>
              <p>Price: {packaged.price}</p>
              <p>from: {packaged.from}</p>
              <p>to: {packaged.to}</p>

              <br />
              <div className="flex justify-evenly">
                <div className="">
                  <EditPackageModal packaged={packaged} />
                </div>

                <button
                  onClick={() => handleDeletePackage(packaged.id)}
                  className="p-2 border rounded-lg transition duration-300 transform hover:scale-125"
                >
                  {" "}
                  Delete
                </button>
              </div>
            </div>
            <br />
            <br />

            {/* </Card> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Manage_package;
