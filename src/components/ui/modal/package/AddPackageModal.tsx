import { useCreatePackageTourMutation } from "@/redux/api/packageApi";
import { Modal, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddPackageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createPackage, { error }] = useCreatePackageTourMutation();

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
      const res = await createPackage({
        title: data.title,
        description: data.description,
        price: parseInt(data.price),
        from: data.from,
        to: data.to,
        maxUser: parseInt(data.maxUser),
        destination: data.destination,
        packageImage: data.packageImage,
      });

      reset(); // This will clear all form fields
      message.success("Package created successfully");
    } catch (error) {
      message.error("Package is not created");
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
          Add Package
        </button>
      </div>

      <Modal
        title="Add Package"
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
              Package Title
            </label>
            <input
              required
              id="title"
              type="text"
              // name="title"
              placeholder="Package Title"
              {...register("title", { required: "This field is required" })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Package Description
            </label>
            <input
              required
              id="description"
              type="text"
              // name="description"
              placeholder="Package Description"
              {...register("description", {
                required: "This field is required",
              })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Package Price
            </label>
            <input
              required
              id="price"
              type="number"
              // name="price"
              placeholder="Package Price"
              {...register("price", { required: "This field is required" })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">From</label>
            <input
              required
              id="from"
              type="date"
              // name="from"
              placeholder="From"
              {...register("from", { required: "This field is required" })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">To</label>
            <input
              required
              id="to"
              type="date"
              // name="to"
              placeholder="To"
              {...register("to", { required: "This field is required" })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Package Image</label>
            <input
              required
              id="packageImage"
              type="text"
              // name="packageImage"
              placeholder="Package Image"
              {...register("packageImage", {
                required: "This field is required",
              })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Max Users</label>
            <input
              required
              id="maxUser"
              type="number"
              // name="maxUser"
              placeholder="Max Users"
              {...register("maxUser", { required: "This field is required" })}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Destination</label>
            <input
              required
              id="destination"
              type="text"
              // name="destination"
              placeholder="Destination"
              {...register("destination", {
                required: "This field is required",
              })}
              className="w-full border p-2 rounded-md"
            />
            {errors.destination && (
              <p className="text-red-500 text-sm">
                {/* {errors.destination.message} */}
              </p>
            )}
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
