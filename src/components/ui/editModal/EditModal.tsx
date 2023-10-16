import { IUser } from "@/types";
import { Button, Modal } from "antd";

function EditModal({
  isModalOpen,
  handleCancel,
  handleOk,
  admins,
}: {
  isModalOpen: any;
  handleCancel: any;
  handleOk: any;
  admins: IUser[];
}) {
  return (
    <div>
      <Modal
        title="Basic Modal"
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default EditModal;
