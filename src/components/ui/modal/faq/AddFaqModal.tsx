"use client";
import { useCreateFAQMutation } from "@/redux/api/faqApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, message } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

function AddFaqModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faqData, setFaqData] = useState({
    title: "",
    description: "",
  });

  const [createFaq, { error }] = useCreateFAQMutation();

  const validationSchema = yup.object().shape({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
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

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        description: "",
        title: "",
      });
    }
  }, [formState, faqData.title, reset]);

  const handleOnSubmit = (data: any) => {
    setFaqData({
      title: data.title,
      description: data.description,
    });
    handleingCreatePackage();
    reset({
      description: "",

      title: "",
    });

    setIsModalOpen(false);
  };

  const handleingCreatePackage = async () => {
    try {
      const res = await createFaq(faqData);

      message.loading("creating package");

      if (error) {
        message.error("package is not created");
      } else {
        // if (res?.id) {
        message.success("package created successfully");
      }
      // }
    } catch (error) {
      message.success("package is not created");
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="pb-5">
        <button
          onClick={showModal}
          className=" border rounded w-32 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
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
                <textarea {...field} className="w-full border p-2 rounded-md" />
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

export default AddFaqModal;
