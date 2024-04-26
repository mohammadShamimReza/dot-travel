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
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import EditProfile from "./EditProfile";

function ProfileContant() {
  const { user } = useUser();
  const { id, role, email } = user as any;
  const { data: userDatas, isLoading } = useUsersByIdQuery(id);
  const { data: BookTourdata } = useBookPackageTourByIdQuery(id);
  const [deleteBookPackageTour] = useDeleteBookPackageTourMutation();
  const [updateUser] = useUpdateUserMutation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [editProfileUrl, setEditProfileUrl] = useState(true);

  const userData = userDatas?.data;
  const fileInputRef: RefObject<HTMLInputElement> = useRef(null);

  const handleDeleteFavorites = ({ id }: { id: string }) => {
    message.loading("Removing package from favorites");
    deleteBookPackageTour(id);
    message.success("Package deleted successfully");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    } else {
      setSelectedImage(null);
    }
  };
  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleProfileChenge = async (e: any) => {
    message.loading("Updating profile picture ...");
    e.preventDefault();
    setEditProfileUrl(false);
    const formData = new FormData();
    if (selectedImage) {
      formData.append("file", selectedImage);
      formData.append("upload_preset", "mwo5ydzk");
    }

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqwnzs85c/image/upload",
        formData
      );

      try {
        const result = await updateUser({
          id: id,
          body: {
            profileImage: response.data.secure_url,
          },
        });
        if (result) {
          message.success("Profile imgage update successfully");
        }
      } catch (error) {
        message.error("server error");
      }
      handleRemoveImage();
    } catch (error) {
      message.error("server error");
    }
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex justify-center align-middle">
          {userData?.profileImage !== "" && !selectedImage ? (
            <div className="h-40 w-40">
              <Image
                src={
                  userData?.profileImage ||
                  "https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                }
                width={200}
                height={100}
                layout="responsive"
                objectFit="cover"
                alt="profile image"
                className=""
              ></Image>
            </div>
          ) : (
            ""
          )}
          {selectedImage !== null && (
            <div className="rounded-lg border flex justify-center align-middle">
              <div className="p-4  w-40">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  width={200}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                  alt="profile image"
                />
              </div>
            </div>
          )}
        </div>
        <br />
        <div className=" mt-2">
          <div className="mb-4">
            {id ? (
              !editProfileUrl ? (
                <div className="">
                  <label
                    htmlFor="profileImage"
                    className="py-3 block  font-bold"
                  >
                    Choose Image
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    accept=".jpg, .jpeg, .png"
                    name="profileImage"
                    ref={fileInputRef}
                    className="border border-gray-300 p-2 rounded-lg "
                    onChange={handleImageChange}
                  />
                  <button
                    onClick={() => {
                      setEditProfileUrl(true), setSelectedImage(null);
                    }}
                    className="ml-2  hover:underline py-2 px-3 rounded-lg focus:outline-none focus:ring border"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <>
              {selectedImage !== null && (
                <button
                  onClick={handleProfileChenge}
                  className="ml-2  hover:underline py-2 px-3 rounded-lg focus:outline-none focus:ring border"
                >
                  Save Image
                </button>
              )}
              {selectedImage !== null && (
                <button
                  onClick={handleRemoveImage}
                  className="ml-2 text-red-600 hover:underline py-2 px-3 rounded-lg focus:outline-none focus:ring border"
                >
                  Remove Image
                </button>
              )}

              {editProfileUrl === true && id && (
                <button
                  onClick={() => setEditProfileUrl(false)}
                  className="ml-2 text-blue-600 hover:underline py-2 px-3 rounded-lg focus:outline-none focus:ring border"
                >
                  Add profile image
                </button>
              )}
            </>
          </div>
        </div>

        <p className="text-lg font-semibold my-2 text-blue-600">
          name: {userData?.firstName} {userData?.lastName}
        </p>

        <p className="text-gray-500 my-1">Email: {userData?.email}</p>
        <p className="text-gray-500 my-1">Address: {userData?.address}</p>
        <p className="text-gray-500 my-1">Phone: {userData?.phone}</p>
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
        <p className="text-center text-9xl, text-blue-600 text-2xl">
          My Tour Packages
        </p>
      )}
      <br />
      <br />
      <br />
      <>
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                    <Image
                      src={packaged.package.packageImage}
                      width={200}
                      height={100}
                      layout="responsive"
                      objectFit="cover"
                      alt="package image"
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
      <br />
      <br />
      <br />
    </div>
  );
}

export default ProfileContant;
