"use client";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { IUser } from "@/types";
import { Modal, message } from "antd";
import { useState } from "react";

function EditProfile({ userData }: { userData: IUser }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [updateUser, { error }] = useUpdateUserMutation();

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
      form.address.value !== "" &&
      form.email.value !== "" &&
      form.firstName.value !== "" &&
      form.lastName.value !== "" &&
      form.password.value !== "" &&
      form.phone.value !== ""
    ) {
      try {
        const res = await updateUser({
          id: userData.id,
          body: {
            address: form.address.value,
            email: form.email.value,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            password: form.password.value,
            phone: form.phone.value,
          },
        });
        e.currentTarget.reset(); // This will clear all form fields
        form.reset(); // This will clear all form fields

        message.success("user created successfully");
      } catch (error) {
        message.success("user is not created");
        console.error(error);
      }
    }

    setIsModalOpen(false);
  };
  return (
    <div>
      {" "}
      <button
        onClick={showModal}
        className=" border rounded w-32 hover:text-blue-600 text-blue-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
      >
        Edit Profile
      </button>
      <Modal
        title="Edit Profile"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              User firstName
            </label>
            <input
              required
              id="firstName"
              type="text"
              name="firstName"
              placeholder="User firstName"
              defaultValue={userData?.firstName}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              User lastName
            </label>
            <input
              required
              id="lastName"
              type="text"
              name="lastName"
              placeholder="User lastName"
              defaultValue={userData?.lastName}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">phone</label>
            <input
              required
              id="phone"
              type="text"
              name="phone"
              placeholder="phone"
              defaultValue={userData?.phone}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">email</label>
            <input
              required
              id="email"
              type="email"
              name="email"
              placeholder="email"
              defaultValue={userData?.email}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              User password
            </label>
            <input
              required
              id="password"
              type="text"
              name="password"
              placeholder="User password"
              defaultValue={userData?.password}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              User address
            </label>
            <input
              required
              id="address"
              type="text"
              name="address"
              placeholder="User password"
              defaultValue={userData?.address}
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

export default EditProfile;
