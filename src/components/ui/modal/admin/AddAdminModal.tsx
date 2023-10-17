"use client";
import { useUpdateUserMutation, useUsersQuery } from "@/redux/api/userApi";
import { IUser } from "@/types";
import { Button, Modal, Select, message } from "antd";
import { useState } from "react";

const { Option } = Select;

function AddAdminModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updateUser] = useUpdateUserMutation();
  console.log(selectedUserId);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      message.loading("creating Admin");

      const res = await updateUser({
        id: selectedUserId,
        body: { role: "admin" },
      }).unwrap();
      if (res?.id) {
        message.success("Admin added Successfully Updated!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { data, isLoading } = useUsersQuery({
    role: "user",
  });
  const user = data?.data;
  return (
    <div className="">
      <div className="pb-5">
        <button
          onClick={showModal}
          className="  border rounded w-32 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125 text-center"
        >
          Add Package
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
            onClick={handleOk}
            className="bg-pink-500 text-white w-20"
          >
            OK
          </Button>,
        ]}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select an email"
          optionFilterProp="children"
          onChange={(value) => setSelectedUserId(value)}
          value={selectedUserId}
        >
          {user?.map((user: IUser) => (
            <Option key={user.id} value={user.id}>
              {user.email}
            </Option>
          ))}
        </Select>
      </Modal>
    </div>
  );
}

export default AddAdminModal;
