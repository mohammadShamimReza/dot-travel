"use client";
import PackageReviewModal from "@/components/ui/modal/package/PackageReviewModal";
import { useUser } from "@/lib/UserProvider";
import {
  useBookPackageTourByIdQuery,
  useDeleteBookPackageTourMutation,
} from "@/redux/api/bookPackageApi";
import { useUpdateUserMutation, useUsersByIdQuery } from "@/redux/api/userApi";
import { IBookPackage } from "@/types";
import { Card, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import EditProfile from "./EditProfile";

function ProfileContant() {
  const { user } = useUser();
  const { id, role, email } = user as any;
  const { data: userDatas, isLoading } = useUsersByIdQuery(id);
  const { data: BookTourdata } = useBookPackageTourByIdQuery(id);
  const [deleteBookPackageTour] = useDeleteBookPackageTourMutation();
  const [updateUser] = useUpdateUserMutation();

  const userData = userDatas?.data;
  console.log(userData);

  const handleDeleteFavorites = ({ id }: { id: string }) => {
    message.loading("Removing package from favorites");
    deleteBookPackageTour(id);
    message.success("Package deleted successfully");
  };

  // if (!BookTourdata) {
  //   return (
  //     <div className="flex flex-col items-center justify-center mt-6">
  //       <Avatar size={200} src={userData?.profileImg} />
  //       <br />
  //       <br />
  //       <Card style={{ width: 400, marginTop: 16 }} loading={true}>
  //         <Meta
  //           avatar={
  //             <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
  //           }
  //           title="Card title"
  //           description="This is the description"
  //         />
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex justify-center align-middle">
          {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
          <Image
            src={
              "https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            }
            width={200}
            height={100}
            layout="responsive"
            objectFit="cover"
            alt="package image"
            className=""
          ></Image>
        </div>
        <br />
        <br />
        <p className="text-lg font-semibold my-2 text-blue-600">
          {userData?.firstName} {userData?.lastName}
        </p>
        {role}
        <p className="text-gray-500 my-1">{userData?.email}</p>
        <p className="text-gray-500 my-1">{userData?.address}</p>
        <p className="text-gray-500 my-1">{userData?.phone}</p>
      </div>
      <br />
      <br />
      <div className="flex items-center justify-center">
        {role ? (
          role === "super_admin" ? (
            ""
          ) : (
            <EditProfile userData={userData} />
          )
        ) : (
          ""
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      {!BookTourdata ? (
        <p className="text-blue-500  text-center text-2xl">
          {" "}
          You do not go any where yet
        </p>
      ) : (
        <p className="text-center text-9xl, text-blue-600">My Tour Packages</p>
      )}
      <br />
      <br />
      <br />
      <>
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {BookTourdata?.data?.map((packaged: IBookPackage) => (
            <Card
              key={packaged.package.id}
              title={packaged.package.title}
              extra={<a href="#"></a>}
              style={{ width: 250 }}
              className="hover:shadow-lg "
            >
              <div className="">
                <Link
                  href={`/TourPackages/${packaged.packageId}`}
                  className="text-black hover:text-purple-600"
                >
                  <div className="flex justify-center align-middle h-40 ">
                    {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
                    <Image
                      src={packaged.package.packageImage}
                      width={200}
                      height={100}
                      layout="responsive"
                      objectFit="cover"
                      alt="package image"
                      // className="w-full h-32"
                    ></Image>
                  </div>
                  <p>Price: {packaged.package.price}</p>
                  <p>from: {packaged.package.from}</p>
                  <p>to: {packaged.package.to}</p>
                </Link>
              </div>

              <br />
              <div className="flex justify-evenly">
                <div className="">
                  <PackageReviewModal userId={id} packaged={packaged} />
                </div>

                <button
                  onClick={() => handleDeleteFavorites({ id: packaged.id })}
                >
                  {" "}
                  <AiFillDelete className="h-5 w-5 hover:text-blue-600 text-blue-500 hover:cursor-pointer transition duration-300 transform hover:scale-125" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ProfileContant;
