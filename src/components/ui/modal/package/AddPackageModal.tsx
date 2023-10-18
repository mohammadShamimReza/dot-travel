"use client";
import { useCreatePackageTourMutation } from "@/redux/api/packageApi";
import { usePackageCategoryQuery } from "@/redux/api/packageCategoryApi";
import { IPackageCategory } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Modal, Select, message } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

function AddPackageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageData, setPackageData] = useState({
    title: "",
    description: "",
    price: 0,
    from: "",
    to: "",
    packageImage: "",
    maxUser: 0,
    packageCategoryId: "",
    destination: "",
  });
  console.log(packageData, "packageData");
  const { data, isLoading } = usePackageCategoryQuery({});
  const packageCategorys = data;

  console.log(packageCategorys);

  const [createPackage, { error }] = useCreatePackageTourMutation();

  const validationSchema = yup.object().shape({
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
    price: yup.number().required("price is required"),
    from: yup.string().optional(),
    to: yup.string().optional(),
    packageImage: yup.string().optional(),
    maxUser: yup.number().required("maxUser is required"),
    packageCategoryId: yup.string().required("packageCategoryId is required"),
    destination: yup.string().required("destination is required"),
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
        destination: "",
        from: "",
        to: "",
        maxUser: 0,
        packageImage: "",
        price: 0,
        title: "",
      });
    }
    // if (packageData.title !== "") {
    //   // handleingCreatePackage();
    // }
  }, [formState, packageData.title, reset]);

  const handleOnSubmit = (data: any) => {
    setPackageData({
      title: data.title,
      description: data.description,
      packageCategoryId: data.packageCategoryId,
      from: data.from,
      to: data.to,
      price: data.price,
      packageImage: data.packageImage,
      maxUser: data.maxUser,
      destination: data.destination,
    });
    handleingCreatePackage();
    reset({
      description: "",
      destination: "",
      from: "",
      to: "",
      maxUser: 0,
      packageImage: "",
      price: 0,
      title: "",
    });

    setIsModalOpen(false);
  };

  const handleingCreatePackage = async () => {
    try {
      const res = await createPackage(packageData);

      message.loading("creating package");

      if (error) {
        message.error("package is not created");
      } else {
        console.log(packageData);
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
          <div>
            <label className="block text-sm text-gray-600">price</label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
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
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.to && (
              <p className="text-red-500 text-xs">{errors.to.message}</p>
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
            <label className="block text-sm text-gray-600">maxUser</label>
            <Controller
              name="maxUser"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
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

export default AddPackageModal;
