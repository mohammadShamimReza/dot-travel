"use client";
import { useUpdatePackageTourMutation } from "@/redux/api/packageApi";
import { usePackageCategoryQuery } from "@/redux/api/packageCategoryApi";
import { IPackage, IPackageCategory } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, Select, message } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillEdit } from "react-icons/ai";
import * as yup from "yup";

function EditPackageModal({ packaged }: { packaged: IPackage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const packageTourData = packaged;
  const [packageData, setPackageData] = useState({
    title: packageTourData.title,
    description: packageTourData.description,
    price: packageTourData.price,
    from: packageTourData.from,
    to: packageTourData.to,
    packageImage: packageTourData.packageImage,
    maxUser: packageTourData.maxUser,
    packageCategoryId: packageTourData.packageCategoryId,
    destination: packageTourData.destination,
  });
  const { data, isLoading } = usePackageCategoryQuery({});
  const packageCategorys = data;

  const [updatePackageTour] = useUpdatePackageTourMutation();

  const validationSchema = yup.object().shape({
    title: yup.string().optional(),
    description: yup.string().optional(),
    price: yup.number().optional(),
    from: yup.string().optional(),
    to: yup.string().optional(),
    packageImage: yup.string().optional(),
    maxUser: yup.number().optional(),
    packageCategoryId: yup.string().optional(),
    destination: yup.string().optional(),
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
      title: data.title || packageTourData.title,
      description: data.description || packageTourData.description,
      packageCategoryId:
        data.packageCategoryId || packageTourData.packageCategoryId,
      from: data.from || packageTourData.from,
      to: data.to || packageTourData.to,
      price: data.price || packageTourData.price,
      packageImage: data.packageImage || packageTourData.packageImage,
      maxUser: data.maxUser || packageTourData.maxUser,
      destination: data.destination || packageTourData.destination,
    };
    setPackageData(updatedData);

    handleingCreatePackage();

    setIsModalOpen(false);
  };

  const handleingCreatePackage = async () => {
    try {
      message.loading("Updating package");
      const res = await updatePackageTour({
        id: packageTourData.id,
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
                  defaultValue={packageTourData.title}
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
                  defaultValue={packageTourData.description}
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
          <div>
            <label className="block text-sm text-gray-600">price</label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  defaultValue={packageTourData.price}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600">packageImage</label>
            <Controller
              name="packageImage"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="string"
                  defaultValue={packageTourData.packageImage}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.packageImage && (
              <p className="text-red-500 text-xs">
                {errors.packageImage.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">from</label>
            <Controller
              name="from"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  defaultValue={packageTourData.from}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.from && (
              <p className="text-red-500 text-xs">{errors.from.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">to</label>
            <Controller
              name="to"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  defaultValue={packageTourData.to}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.to && (
              <p className="text-red-500 text-xs">{errors.to.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">maxUser</label>
            <Controller
              name="maxUser"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  defaultValue={packageTourData.maxUser}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.maxUser && (
              <p className="text-red-500 text-xs">{errors.maxUser.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600">destination</label>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  defaultValue={packageTourData.destination}
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.destination && (
              <p className="text-red-500 text-xs">
                {errors.destination.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              packageCategory
            </label>
            <Controller
              name="packageCategoryId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select package category"
                  optionFilterProp="children"
                >
                  {/* Render package categories */}
                  {packageCategorys?.map((category: IPackageCategory) => (
                    <Select.Option key={category.id} value={category.id}>
                      {category.title}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />

            {errors.packageCategoryId && (
              <p className="text-red-500 text-xs">
                {errors.packageCategoryId.message}
              </p>
            )}
          </div>

          {/* <div>
            <button
              type="button"
              onClick={handleSubmit(handleOnSubmit)}
              className="bg-pink-500 font-semibold py-2 rounded-md w-full"
            >
              Submit
            </button>
          </div> */}
        </form>
      </Modal>
    </div>
  );
}

export default EditPackageModal;
