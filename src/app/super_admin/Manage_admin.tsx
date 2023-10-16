"use client";
import EditModal from "@/components/ui/editModal/EditModal";
import AddAdminModal from "@/components/ui/modal/AddAdminModal";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/userApi";
import { IUser } from "@/types";
import { Avatar, Card, message } from "antd";
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function Manage_admin() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = useUsersQuery({
    role: "admin",
  });
  console.log(data);
  const [deleteUser] = useDeleteUserMutation();

  const admins = data?.data;
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
  const handleDeleteAdmin = async (id: string) => {
    try {
      message.loading("Deleteting Admin");
      const result = await deleteUser(id);
      console.log(result);
      if (result) {
        message.success("Admin deleted successfully");
      }
    } catch (error) {}
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
      <AddAdminModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {admins?.map((admin: IUser) => (
          <Card
            key={admin.id}
            title={admin.firstName + " " + admin.lastName}
            extra={<a href="#"></a>}
            style={{ width: 250 }}
          >
            <p>{admin.email}</p>
            <p>{admin.phone}</p>
            <br />
            <p className="flex justify-evenly">
              <div className="">
                <AiFillEdit
                  onClick={showModal}
                  className="h-5 w-5 hover:cursor-pointer transition duration-300 transform hover:scale-125"
                />
                <EditModal
                  isModalOpen={isModalOpen}
                  handleCancel={handleCancel}
                  handleOk={handleOk}
                  admins={admins}
                />
              </div>

              <button onClick={() => handleDeleteAdmin(admin.id)}>
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

export default Manage_admin;
