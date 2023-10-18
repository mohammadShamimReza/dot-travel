"use client";
import { useUpdateFAQMutation } from "@/redux/api/faqApi";
import { IFaq } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import * as yup from "yup";

function EditFaqModal({ faqs }: { faqs: IFaq }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqsData = faqs;
  const [packageData, setPackageData] = useState({
    title: faqsData.title,
    description: faqsData.description,
  });

  const [updateFAQ] = useUpdateFAQMutation();

  const validationSchema = yup.object().shape({
    title: yup.string().optional(),
    description: yup.string().optional(),
  });
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnSubmit = (data: any) => {
    const updatedData = {
      title: data.title || faqsData.title,
      description: data.description || faqsData.description,
    };
    setPackageData(updatedData);

    handleingCreatePackage();

    setIsModalOpen(false);
  };

  const handleingCreatePackage = async () => {
    try {
      message.loading("Updating package");
      const res = await updateFAQ({
        id: faqsData.id,
        body: packageData,
      });
      console.log(packageData);
      // if (res?.id) {
      // message.success("package created successfully");
      // }
      message.success("package Update successfully");
    } catch (error) {
      message.success("package Update is not successfully");
      console.log(error);
    }
  };

  return (
    <div className="">
      <AiFillEdit
        onClick={showModal}
        className="h-5 w-5 hover:cursor-pointer transition duration-300 transform hover:scale-125"
      />
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
            onClick={handleSubmit(handleOnSubmit)}
            className="bg-pink-500 text-white w-20"
          >
            OK
          </Button>,
        ]}
      >
        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
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
                  defaultValue={faqsData.title}
                  placeholder="Category Title"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  defaultValue={faqsData.description}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-xs">
                {errors.description.message}
              </p>
            )}
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditFaqModal;
