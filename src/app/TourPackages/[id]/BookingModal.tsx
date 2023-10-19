"use client";
import { useCreateBookPackageTourMutation } from "@/redux/api/bookPackageApi";
import { getUserInfo } from "@/services/auth.service";
import { IPackage } from "@/types";
import { Button, Modal, Steps, message, theme } from "antd";
import { useState } from "react";

function BookingModal({ tourPackageData }: { tourPackageData: IPackage }) {
  console.log(tourPackageData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBookPackageTour] = useCreateBookPackageTourMutation();
  const { id } = getUserInfo() as any;

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
        <div className="font-bold">
          This tour start from Bangladesh, Destination of this tour is{" "}
          {tourPackageData?.destination}
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <div className="font-bold">
          This tour is Premium for Nangladesh, Price of this tour is{" "}
          {tourPackageData?.price}
        </div>
      ),
    },
    {
      title: "Last",
      content: (
        <div className="font-bold">
          Lets ready for new experiance. Are you ready
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
  const handleBookingPackageTour = async () => {
    try {
      message.loading("Tour booked creating!");

      const res = await createBookPackageTour({
        userId: id,
        packageId: tourPackageData?.id,
      });
      message.success("Tour booked Successfull!");
    } catch (error) {
      message.success("Tour booked not Successfull!"), console.log(error);
    }
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
                setIsModalOpen(false);
                handleBookingPackageTour();
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
