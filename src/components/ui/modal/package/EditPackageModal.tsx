"use client";
import { useUpdatePackageTourMutation } from "@/redux/api/packageApi";
import { IPackage } from "@/types";
import { Modal, message } from "antd";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

function EditPackageModal({ packaged }: { packaged: IPackage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const packageTourData = packaged;

  const [updatePackageTour] = useUpdatePackageTourMutation();

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
      message.loading("Updating package");
      const res = await updatePackageTour({
        id: packageTourData.id,
        body: {
          title: e.currentTarget.title.value,
          description: e.currentTarget.description.value,
          from: e.currentTarget.from.value,
          to: e.currentTarget.to.value,
          price: parseInt(e.currentTarget.price.value),
          packageImage: e.currentTarget.packageImage.value,
          maxUser: parseInt(e.currentTarget.maxUser.value),
          destination: e.currentTarget.destination.value,
        },
      });

      message.success("package Update successfully");
    } catch (error) {
      message.success("package Update is not successfully");
      console.log(error);
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
              Category Title
            </label>
            <input
              required
              id="title"
              type="text"
              name="title"
              defaultValue={packageTourData.title}
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
            <textarea
              required
              id="description"
              name="description"
              defaultValue={packageTourData.description}
              placeholder="Category description"
              className="w-full border p-2 rounded-md"
            ></textarea>
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
              defaultValue={packageTourData.price}
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
              defaultValue={packageTourData.from}
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
              defaultValue={packageTourData.to}
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
              defaultValue={packageTourData.packageImage}
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
              defaultValue={packageTourData.maxUser}
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
              defaultValue={packageTourData.destination}
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

export default EditPackageModal;
