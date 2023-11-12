"use client";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/userApi";
import { IUser } from "@/types";
import { Avatar, Card, message } from "antd";
import Image from "next/image";
import { useRef } from "react";
import { AiFillDelete } from "react-icons/ai";

function Manage_user() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = useUsersQuery({
    role: "user",
  });
  const [deleteUser] = useDeleteUserMutation();

  const users = data?.data?.data;
  const avatarRef = useRef(null);

  const handleDeleteAdmin = async (id: string) => {
    try {
      message.loading("Deleteting Admin");
      const result = await deleteUser(id);
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

  if (data.data.length === 0) {
    return (
      <div className="text-lg text-center text-blue-700">User Not found</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {users?.map((admin: IUser) => (
        <Card
          key={admin.id}
          title={admin.firstName + " " + admin.lastName}
          extra={<a href="#"></a>}
          style={{ width: 250 }}
        >
          <div ref={avatarRef} className="flex justify-center align-middle">
            <div className="flex justify-center align-middle">
              {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
              <Image
                src={
                  admin.profileImage ||
                  "https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                }
                width={40}
                height={40}
                // layout="responsive"
                // objectFit="cover"
                alt="package image"
                className=""
              ></Image>
            </div>
          </div>
          <p className="w-[200px] truncate">{admin.email}</p>
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

            <button onClick={() => handleDeleteAdmin(admin.id)}>
              {" "}
              <AiFillDelete className="h-5 w-5 hover:text-blue-600 text-blue-500 hover:cursor-pointer transition duration-300 transform hover:scale-125" />
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Manage_user;
