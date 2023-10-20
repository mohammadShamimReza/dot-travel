"use client";
import { useUpdateUserMutation, useUsersQuery } from "@/redux/api/userApi";
import { IUser } from "@/types";
import { Avatar, Card, message } from "antd";
import { useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import AddAdminModal from "../modal/admin/AddAdminModal";

function Manage_admin() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = useUsersQuery({
    role: "admin",
  });
  const [updateUser] = useUpdateUserMutation();

  const admins = data?.data;

  const avatarRef = useRef(null);

  const handleDeleteAdmin = async (id: string) => {
    try {
      message.loading("Deleteting Admin");
      const result = await updateUser({
        id: id,
        body: { role: "admin" },
      });
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
            <div ref={avatarRef} className="flex justify-center align-middle">
              <RxAvatar className="w-8 h-8 hover:text-pink-600 text-pink-500" />
            </div>
            <p>{admin.email}</p>
            <p>{admin.phone}</p>
            <br />
            <p className="flex justify-evenly">
              {/* <div className="">
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
              </div> */}

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
