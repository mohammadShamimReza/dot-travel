"use client";
import { IPackage } from "@/types";
import { Button, Modal, Steps, message, theme } from "antd";
import { useState } from "react";

function BookingModal({ tourPackageData }: { tourPackageData: IPackage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      title: "First",
      content: (
        <div className="">
          <p>This tour start from Bangladesh</p>
          <p>Destination of this tour is {tourPackageData.destination}</p>
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <div className="">
          <p>This tour is Premium for Nangladesh</p>

          <p>Price of this tour is {tourPackageData.price}</p>
        </div>
      ),
    },
    {
      title: "Last",
      content: (
        <div className="">
          <p>Lets ready for new experiance</p>

          <p>are you ready</p>
        </div>
      ),
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div>
      {" "}
      <Button onClick={showModal} size="large" className="w-full mt-4 bg-pink">
        Book Now
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button className="bg-pink-600" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                message.success("Tour booked Successfull!"),
                  setIsModalOpen(false);
              }}
              className="bg-pink-600"
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
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
            className="bg-pink-500 text-white rounded-lg py-2 px-4 hover:bg-pink-600 hover:cursor-pointer transition duration-300 transform hover:scale-105"
            onClick={() => setIsModalOpen(false)}
          >
            OK
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default BookingModal;
