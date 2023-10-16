"use client";
import { Button, Card, DatePicker, Input, Space } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const PropertyDescriptionPage = () => {
  const propertyDetails = {
    title: "Beautiful Beach House",
    location: "Malibu, California",
    price: 250,
    description:
      "Experience luxury in this stunning beachfront property. Relax and unwind in a private paradise. This spacious house features breathtaking ocean views, a private pool, and direct beach access.",
    image: "beach-house-image-url",
  };

  const [checkInDate, setCheckInDate] = useState<dayjs.Dayjs | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<dayjs.Dayjs | null>(null);
  const [guests, setGuests] = useState<number>(1);

  const calculateTotalAmount = () => {
    if (checkInDate && checkOutDate) {
      const nights = checkOutDate.diff(checkInDate, "day");
      const totalAmount = propertyDetails.price * nights;
      return totalAmount;
    }
    return 0;
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {" "}
      {/* Add min-h-screen */}
      <div className="flex space-x-4">
        <div className="w-3/4">
          {/* Left content */}
          <img
            src={propertyDetails.image}
            alt={propertyDetails.title}
            className="w-full h-96 object-cover object-center rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/4">
          {/* Sticky card */}
          <div className="sticky top-0">
            <Card className="rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold mb-4">
                {propertyDetails.title}
              </h1>
              <div className="mb-4">
                <Space direction="vertical">
                  <DatePicker
                    placeholder="Check-In"
                    value={checkInDate}
                    onChange={(date) => setCheckInDate(date || null)}
                  />
                  <DatePicker
                    placeholder="Check-Out"
                    value={checkOutDate}
                    onChange={(date) => setCheckOutDate(date || null)}
                  />
                </Space>
              </div>
              <Input
                placeholder="Guests"
                type="number"
                min={1}
                value={guests.toString()}
                onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                className="mb-2"
              />
              <p className="text-gray-600 text-sm mb-4">
                {propertyDetails.description}
              </p>
              <p className="text-blue-600 font-semibold">
                Total: ${calculateTotalAmount()}
              </p>
              <Button type="primary" size="large" className="w-full mt-4">
                Book Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescriptionPage;
