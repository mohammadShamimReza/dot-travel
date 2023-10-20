"use client";
import { useUpdateFAQMutation } from "@/redux/api/faqApi";
import { IFaq } from "@/types";
import { Modal, message } from "antd";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

function EditFaqModal({ faqs }: { faqs: IFaq }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqsData = faqs;

  const [updateFAQ] = useUpdateFAQMutation();

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
    try {
      message.loading("Updating faq");
      const res = await updateFAQ({
        id: faqsData.id,
        body: {
          title: e.currentTarget.title.value || faqsData.title,
          description:
            e.currentTarget.description.value || faqsData.description,
        },
      });

      message.success("faq Update successfully");
    } catch (error) {
      message.success("faq Update is not successfully");
      console.error(error);
    }

    setIsModalOpen(false);
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
        footer={null}
      >
        <form onSubmit={handleOnSubmit} className="space-y-4">
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
              name="title"
              placeholder="Faq Title"
              defaultValue={faqsData.title}
              className="w-full border p-2 rounded-md"
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
              name="description"
              defaultValue={faqsData.description}
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

export default EditFaqModal;
