"use client";
import { useCreatePackageTourMutation } from "@/redux/api/packageApi";
import { usePackageCategoryQuery } from "@/redux/api/packageCategoryApi";
import { IPackageCategory } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DatePicker, Modal, Select, message } from "antd";
import dayjs from "dayjs";
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
    status: "",
  });
  const { data, isLoading } = usePackageCategoryQuery({});
  const packageCategorys = data;

  const [createPackage] = useCreatePackageTourMutation();

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
  const { control, handleSubmit, setValue, formState } = useForm({
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
    if (packageData.title !== "") {
      // Check if the title (or any required field) is not empty
      handleingCreatePackage();
    }
  }, [packageData]);

  const handleOnSubmit = (data: any) => {
    setPackageData({
      ...packageData,
      title: data.title,
      description: data.description,
      packageCategoryId: data.packageCategoryId,
      price: data.price,
      packageImage: data.packageImage,
      maxUser: data.maxUser,
      destination: data.destination,
      status: "inprogress",
    });
    handleingCreatePackage();

    setIsModalOpen(false);
  };

  const handleingCreatePackage = async () => {
    try {
      message.loading("creating package");
      const res = await createPackage(packageData);
      console.log(packageData);
      // if (res?.id) {
      // message.success("package created successfully");
      // }
      message.success("package created successfully");
    } catch (error) {
      message.success("package created successfully");
      console.log(error);
    }

    setValue("title", "");
    setValue("description", "");
    setValue("price", 0);
    setValue("from", new Date().toDateString());

    setValue("to", new Date().toDateString());
    setValue("packageImage", "");
    setValue("maxUser", 0);
    setValue("packageCategoryId", "");

    setValue("destination", "");

    setPackageData({
      title: "",
      description: "",
      price: 0,
      from: "",
      to: "",
      packageImage: "",
      maxUser: 0,
      packageCategoryId: "",
      destination: "",
      status: "",
    });
  };

  const handleFromDate = (date: any, dateString: any) => {
    const newData = `${dateString.slice(0, 7)}-15T00:00:00.000Z`;

    setPackageData({ ...packageData, from: newData });
  };
  const handleToDate = (date: any, dateString: any) => {
    const newData = `${dateString.slice(0, 7)}-15T00:00:00.000Z`;

    setPackageData({ ...packageData, to: newData });
  };
  const handlePackageCategoryId = (date: any) => {
    setPackageData({ ...packageData, packageCategoryId: date });
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
                <DatePicker
                  defaultValue={dayjs(field.value) || Date.now()}
                  size="middle"
                  onChange={handleFromDate}
                  style={{ width: "100%" }}
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
              name="from"
              control={control}
              render={({ field }) => (
                <DatePicker
                  defaultValue={dayjs(field.value) || Date.now()}
                  size="middle"
                  onChange={handleToDate}
                  style={{ width: "100%" }}
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
