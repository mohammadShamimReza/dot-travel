"use client";
import { useCreateRaviewTourMutation } from "@/redux/api/ratingAndReviewTourApi";
import { IBookPackage } from "@/types";
import { Modal, message } from "antd";
import { useState } from "react";
import { MdOutlineRateReview } from "react-icons/md";

function PackageReviewModal({
  userId,
  packaged,
}: {
  userId: string;
  packaged: IBookPackage;
}) {
  const [createRaviewTour] = useCreateRaviewTourMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      e.currentTarget.review.value !== "" &&
      e.currentTarget.rating.value !== ""
    ) {
      try {
        message.loading("Creating FAQ");

        message.success("FAQ created successfully");
        const res = await createRaviewTour({
          userId: userId,
          packageId: packaged.packageId,
          review: e.currentTarget.review.value,
          rating: e.currentTarget.rating.value.toString(),
        });
        e.currentTarget.reset(); // This will clear all form fields
      } catch (error) {
        //  message.error("FAQ is not created");
        console.error(error);
      }
      setIsModalOpen(false);
    } else {
      message.error("Provide all needed data");
    }
  };

  return (
    <div>
      <MdOutlineRateReview
        onClick={showModal}
        className="h-5 w-5 hover:cursor-pointer transition duration-300 transform hover:scale-125"
      />
      <Modal
        title="Updata Package"
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
              Tour review
            </label>
            <textarea
              required
              id="review"
              name="review"
              //   defaultValue={}
              placeholder="Tour review"
              className="w-full border p-2 rounded-md"
            ></textarea>
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Tour rating
            </label>
            <input
              required
              id="rating"
              type="number"
              name="rating"
              //   defaultValue={}
              placeholder="Tour rating"
              className="w-full border p-2 rounded-md"
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

export default PackageReviewModal;
