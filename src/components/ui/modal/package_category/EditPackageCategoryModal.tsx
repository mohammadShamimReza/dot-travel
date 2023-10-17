"use client";
import { useUpdatePackageCategoryMutation } from "@/redux/api/packageCategoryApi";
import { IPackageCategory } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import * as yup from "yup";

function EditPackageCategoryModal({
  packageCategory,
}: {
  packageCategory: IPackageCategory;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    try {
      message.loading("updating pacakage category");
      const res = updatePackageCategory({
        id: packageCategory.id,
        body: addPacakageCategoryData,
      });
      message.success("update pacakage category successfully ");

      setValue("title", "");
    } catch (error) {
      message.error(" pacakage category not updated");
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [addPacakageCategoryData, setAddPacakageCategoryData] = useState(null);

  const [updatePackageCategory] = useUpdatePackageCategoryMutation();
  const validationSchema = yup.object().shape({
    title: yup.string().required("title is required"),
  });

  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleGetTitle = async (data: any) => {
    setAddPacakageCategoryData(data);
    console.log(addPacakageCategoryData);
  };
  const handleOkClick = async () => {};
  console.log(packageCategory.title);
  return (
    <div>
      <AiFillEdit
        onClick={showModal}
        className="h-5 w-5 hover:cursor-pointer transition duration-300 transform hover:scale-125"
      />
      <Modal
        title="Chenge Category Title"
        open={isModalOpen}
        onOk={() => handleOkClick()}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" className="bg-gray-100" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="ok"
            onClick={handleOk}
            className="bg-pink-500 text-white w-20"
          >
            OK
          </Button>,
        ]}
      >
        <div className="">
          <form onChange={handleSubmit(handleGetTitle)} className="space-y-4">
            <div>
              <label
                className="block text-pink-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                <span className="text-black text-lg">Previous title: </span>{" "}
                {packageCategory.title}
              </label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="Title"
                    type="text"
                    placeholder="Category Title"
                    className="w-full border p-2 rounded-md"
                  />
                )}
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditPackageCategoryModal;
