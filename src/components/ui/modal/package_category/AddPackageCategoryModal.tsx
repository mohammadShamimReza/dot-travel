"use client";

import { useCreatePackageCategoryMutation } from "@/redux/api/packageCategoryApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, Select, message } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const { Option } = Select;

function AddPackageCategoryModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [addPacakageCategoryData, setAddPacakageCategoryData] = useState(null);
  const [createPackageCategory] = useCreatePackageCategoryMutation();
  console.log(selectedUserId);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const validationSchema = yup.object().shape({
    title: yup.string().required("title is required"),
  });

  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOk = async () => {
    try {
      message.loading("creating category title");

      const res = await createPackageCategory(addPacakageCategoryData).unwrap();
      setValue("title", "");

      if (res?.id) {
        message.success("creating category Successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGetTitle = async (data: any) => {
    setAddPacakageCategoryData(data);
    console.log(addPacakageCategoryData);
  };

  return (
    <div className="">
      <div className="pb-5">
        <button
          onClick={showModal}
          className="  border rounded w-32 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
        >
          Add Package category
        </button>
      </div>

      <Modal
        title="Add Admin"
        open={isModalOpen}
        onOk={handleOk}
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
        <form onChange={handleSubmit(handleGetTitle)} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Category Title
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
      </Modal>
    </div>
  );
}

export default AddPackageCategoryModal;
