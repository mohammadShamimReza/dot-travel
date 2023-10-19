"use client";
import {
  useDeletePackageTourMutation,
  usePackageTourQuery,
} from "@/redux/api/packageApi";
import { IPackage } from "@/types";
import { Avatar, Card, message } from "antd";
import { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdTour } from "react-icons/md";
import AddPackageModal from "../modal/package/AddPackageModal";
import EditPackageModal from "../modal/package/EditPackageModal";

function Manage_package() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = usePackageTourQuery({});
  const [deletePackageTour] = useDeletePackageTourMutation();

  const packages = data;
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
  const avatarRef = useRef(null);

  const handleDeletePackage = async (id: string) => {
    try {
      message.loading("Deleteting package category");
      const result = await deletePackageTour(id);
      console.log(result);

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
          <Card
            key={packaged.id}
            title={packaged.title}
            extra={<a href="#"></a>}
            style={{ width: 250 }}
          >
            <div ref={avatarRef} className="flex justify-center align-middle">
              <MdTour className="w-8 h-8 hover:text-pink-600 text-pink-500" />
            </div>
            <p>Price: {packaged.price}</p>
            <p>from: {packaged.from}</p>
            <p>to: {packaged.to}</p>

            <br />
            <p className="flex justify-evenly">
              <div className="">
                <EditPackageModal packaged={packaged} />
              </div>

              <button onClick={() => handleDeletePackage(packaged.id)}>
                {" "}
                <AiFillDelete className="h-5 w-5 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125" />
              </button>
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Manage_package;
