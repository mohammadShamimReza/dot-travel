"use client";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { Modal, message } from "antd";
import { useState } from "react";

function AddBlogModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBlog, { error }] = useCreateBlogMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    if (
      e.currentTarget.title.value !== "" &&
      e.currentTarget.description.value !== ""
    ) {
      try {
        const res = await createBlog({
          title: e.currentTarget.title.value,
          description: e.currentTarget.description.value,
        });
        e.currentTarget.reset(); // This will clear all form fields

        message.loading("creating blog");

        message.success("blog created successfully");

        // }
      } catch (error) {
        message.success("blog is not created");
        console.error(error);
      }
      setIsModalOpen(false);
    } else {
      message.error("give all needed data");
    }
  };

  return (
    <div className="">
      <div className="pb-5">
        <button
          onClick={showModal}
          className=" border rounded w-32 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
        >
          Add blog
        </button>
      </div>

      <Modal
        title="Add Admin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              blog Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="blog Title"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              blog Answer
            </label>
            <textarea
              name="description"
              className="w-full border p-2 rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleCancel}
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg py-2 px-4 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg py-2 px-4 hover:bg-pink-600 hover:cursor-pointer transition duration-300 transform hover:scale-105"
            >
              OK
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddBlogModal;
