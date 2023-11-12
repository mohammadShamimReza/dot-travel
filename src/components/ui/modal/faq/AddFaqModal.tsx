import { useCreateFAQMutation } from "@/redux/api/faqApi";
import { Modal, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ErrorType {
  response: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}

function AddFaqModal() {
  const { handleSubmit, register, reset } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createFaq, { error }] = useCreateFAQMutation();

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
      message.loading("Creating FAQ");
      await createFaq(data);
      message.success("FAQ created successfully");
      reset(); // This will clear all form fields
    } catch (error) {
      const specificError = error as ErrorType;

      const logError = specificError?.response;

      message.error(logError?.errorMessages);
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
          Add FAQ
        </button>
      </div>

      <Modal
        title="Add Faq"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Faq Title
            </label>
            <input
              id="title"
              type="text"
              // name="title"
              placeholder="Faq Title"
              className="w-full border p-2 rounded-md"
              {...register("title", { required: true })}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Faq Answer
            </label>
            <textarea
              id="description"
              // name="description"
              rows={4}
              className="w-full border p-2 rounded-md"
              {...register("description", { required: true })}
            />
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

export default AddFaqModal;
