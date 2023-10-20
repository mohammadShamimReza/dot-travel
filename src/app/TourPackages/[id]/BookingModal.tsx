"use client";
import { useCreateAddToMutation } from "@/redux/api/addToCartPackageApi";
import { useCreateBookPackageTourMutation } from "@/redux/api/bookPackageApi";
import { getUserInfo } from "@/services/auth.service";
import { IPackage } from "@/types";
import { Button, Modal, Steps, message, theme } from "antd";
import React, { useState } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

function BookingModal({
  tourPackageData,
  userId,
}: {
  tourPackageData: IPackage;
  userId: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resForBookNow = tourPackageData?.bookedPackage.filter((bookUser) => {
    const res = bookUser.userId === userId;
    return res;
  });

  const resForAddToFavorites = tourPackageData?.addToCartPackage.filter(
    (bookUser) => {
      const res = bookUser.userId === userId;
      return res;
    }
  );

  const [createAddTo] = useCreateAddToMutation();

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
      message.success("Tour booked not Successfull!");
    }
  };

  const handleAddToCart = async () => {
    try {
      message.loading("Adding Package favorite!");

      const res = await createAddTo({
        userId: id,
        packageId: tourPackageData?.id,
      });
      message.success("Adding Package favorite Successfull!");
    } catch (error) {
      message.success("Adding Package favorite not Successfull!"),
        console.error(error);
    }
  };

  const handleAddToCartLogin = () => {
    message.error("Please Login first");
  };
  const handleAddToCartUser = () => {
    message.error("This pacake is already  in you Favorites");
  };

    return (
      <div>
        {" "}
        <Button
          onClick={showModal}
          size="large"
          className="w-full mt-4 bg-pink"
        >
          Book Now
        </Button>
        {!id ? (
          <Button
            onClick={() => handleAddToCartLogin()}
            size="large"
            className="w-full mt-4 bg-pink"
          >
            Add to favourite
          </Button>
        ) : id && resForAddToFavorites?.length !== 0 ? (
          <Button
            onClick={() => handleAddToCartUser()}
            size="large"
            className="w-full mt-4 bg-pink"
          >
            Add to favourite
          </Button>
        ) : (
          <Button
            onClick={() => handleAddToCart()}
            size="large"
            className="w-full mt-4 bg-pink"
          >
            Add to favourite
          </Button>
        )}
        {resForBookNow?.length !== 0 ? (
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div style={contentStyle}>
              <p className="text-pink-600">Your already book the Package</p>
            </div>

            <div className="flex justify-end pt-5">
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
        ) : (
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
        )}
      </div>
    );
}

export default BookingModal;
