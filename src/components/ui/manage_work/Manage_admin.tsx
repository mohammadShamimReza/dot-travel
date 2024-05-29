"use client";
import { useUpdateUserMutation, useUsersQuery } from "@/redux/api/userApi";
import { ICustomer } from "@/types";
import { Avatar, Card, message } from "antd";
import { useRef } from "react";
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
        body: { role: "user" },
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
        {admins?.data?.map((admin: ICustomer) => (
          <Card
            key={admin.id}
            title={admin.firstName + " " + admin.lastName}
            extra={<a href="#"></a>}
            style={{ width: 250 }}
          >
            <div ref={avatarRef} className="flex justify-center align-middle">
              <RxAvatar className="w-8 h-8 hover:text-blue-600 text-blue-500" />
            </div>
            <p>{admin.email}</p>
            <p>{admin.phone}</p>
            <br />
            <div className="flex justify-evenly">
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

              <button
                onClick={() => handleDeleteAdmin(admin.id)}
                className="p-2 border rounded-lg transition duration-300 transform hover:scale-125"
              >
                {" "}
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Manage_admin;
