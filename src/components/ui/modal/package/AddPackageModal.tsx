"use client";
import { useCreatePackageTourMutation } from "@/redux/api/packageApi";
import { Modal, message } from "antd";
import { useState } from "react";

function AddPackageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createPackage, { error }] = useCreatePackageTourMutation();

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
    const form = e.currentTarget; // Get the form element

    if (
      form.title.value !== "" &&
      form.description.value !== "" &&
      form.price.value !== "" &&
      form.from.value !== "" &&
      form.to.value !== "" &&
      form.maxUser.value !== "" &&
      form.destination.value !== ""
    ) {
      try {
        const res = await createPackage({
          title: form.title.value,
          description: form.description.value,
          price: parseInt(form.price.value),
          from: form.from.value,
          to: form.to.value,
          maxUser: parseInt(form.maxUser.value),
          destination: form.destination.value,
        });
        e.currentTarget.reset(); // This will clear all form fields
        form.reset(); // This will clear all form fields

        message.success("Package created successfully");
      } catch (error) {
        message.success("Package is not created");
        console.error(error);
      }
    }

    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className="pb-5">
        <button
          onClick={showModal}
          className=" border rounded w-32 hover:text-blue-600 text-blue-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
        >
          Add Package
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
              Category Title
            </label>
            <input
              required
              id="title"
              type="text"
              name="title"
              placeholder="Category Title"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Category description
            </label>
            <input
              required
              id="description"
              type="text"
              name="description"
              placeholder="Category description"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Category price
            </label>
            <input
              required
              id="price"
              type="number"
              name="price"
              placeholder="Category Price"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">from</label>
            <input
              required
              id="from"
              type="date"
              name="from"
              placeholder="From"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">to</label>
            <input
              required
              id="to"
              type="date"
              name="to"
              placeholder="to"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">packageImage</label>
            <input
              required
              id="packageImage"
              type="text"
              name="packageImage"
              placeholder="packageImage"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">maxUser</label>
            <input
              required
              id="maxUser"
              type="number"
              name="maxUser"
              placeholder="maxUser"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">destination</label>
            <input
              required
              id="destination"
              type="text"
              name="destination"
              placeholder="destination"
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

export default AddPackageModal;
