"use client";
import { useUsersByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Avatar } from "antd";

function ProfileContant() {
  const { id, role, email } = getUserInfo() as any;
  const { data, isLoading } = useUsersByIdQuery(id);
  console.log(id, data);

  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center mt-6">
        <Avatar size={200} src={data?.profileImg} />
        <br />
        <br />
        <p className="text-lg font-semibold my-2 text-pink-600">
          {data?.firstName} {data?.lastName}
        </p>
        <p className="text-gray-500 my-1">{data?.email}</p>
        <p className="text-gray-500 my-1">{data?.address}</p>
        <p className="text-gray-500 my-1">{data?.phone}</p>
        <p className="text-gray-500 my-1">Role: {data?.role}</p>
      </div>
    </div>
  );
}

export default ProfileContant;
