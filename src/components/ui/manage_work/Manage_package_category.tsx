"use client";

import {
  useDeletePackageCategoryMutation,
  usePackageCategoryQuery,
} from "@/redux/api/packageCategoryApi";
import { IPackageCategory } from "@/types";
import { Avatar, Card, message } from "antd";
import { useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdTravelExplore } from "react-icons/md";
import AddPackageCategoryModal from "../modal/package_category/AddPackageCategoryModal";
import EditPackageCategoryModal from "../modal/package_category/EditPackageCategoryModal";

function Manage_package_category() {
  const loadingData = [1, 2, 3, 4];
  const { data, isLoading } = usePackageCategoryQuery({});
  console.log(data);
  const [deletePackageCategory] = useDeletePackageCategoryMutation();

  const packageCategorys = data;

  const avatarRef = useRef(null);

  const handleDeletePackageCategory = async (id: string) => {
    try {
      message.loading("Deleteting package category");
      const result = await deletePackageCategory(id);
      console.log(result);
      if (result) {
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
      <AddPackageCategoryModal />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {packageCategorys?.map((packageCategory: IPackageCategory) => (
          <Card
            key={packageCategory.id}
            title="package-category"
            extra={<a href="#"></a>}
            style={{ width: 250 }}
          >
            <div ref={avatarRef} className="flex justify-center align-middle">
              <MdTravelExplore className="w-8 h-8 hover:text-pink-600 text-pink-500" />
            </div>
            <p>{packageCategory.title}</p>
            <br />
            <p className="flex justify-evenly">
              <div className="">
                <EditPackageCategoryModal packageCategory={packageCategory} />
              </div>
              <button
                onClick={() => handleDeletePackageCategory(packageCategory.id)}
              >
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

export default Manage_package_category;
