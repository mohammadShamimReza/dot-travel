import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { Modal, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddBlogModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createBlog, { error }] = useCreateBlogMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    try {
      const res = await createBlog({
        title: data.title,
        description: data.description,
      });

      // Reset the form
      reset();

      message.loading("Creating blog");
      message.success("Blog created successfully");
    } catch (error) {
      message.error("Blog is not created");
      console.error(error);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="pb-5">
        <button
          onClick={showModal}
          className="border rounded w-32 hover:text-blue-600 text-blue-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
        >
          Add blog
        </button>
      </div>

      <Modal
        title="Add Admin"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          id="myForm"
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Blog Title"
              {...register("title", { required: "This field is required" })}
              className="w-full border p-2 rounded-md"
            />
            {/* {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )} */}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Blog Answer
            </label>
            <textarea
              placeholder="Blog Answer"
              {...register("description", {
                required: "This field is required",
              })}
              rows={4}
              className="w-full border p-2 rounded-md h-32"
            />
            {/* {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )} */}
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
              className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 hover:cursor-pointer transition duration-300 transform hover:scale-105"
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
