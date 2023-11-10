"use client";
import DynamicTourCartContant from "@/components/ui/packagesTour/DynamicTourCartContant";
import { DynamicTourPackageData } from "@/components/ui/packagesTour/tourCommon";
import { usePackageTourQuery } from "@/redux/api/packageApi";
import { Avatar, Card } from "antd";
import { Key, useState } from "react";

function TourPage() {
  const loadingData = [1, 2, 3, 4];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: tourPackages, isLoading } = usePackageTourQuery({
    searchTerm: searchTerm,
  });


  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  if (!tourPackages) {
    return (
      <div className="min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {loadingData.map((item) => (
            <Card
              key={item}
              style={{ width: 250, marginTop: 16 }}
              loading={true}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!tourPackages.data) {
    return (
      <div className="min-h-screen">
        <h1 className="text-center text-9xl text-pink-600">Data not found</h1>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <div className="flex items-center justify-center pb-12 ">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              className="w-72 block  rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-pink-300  placeholder:text-gray-400    sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="search"
              value={searchTerm}
              onChange={handleOnSubmit}
            />
          </form>
        </div>
      </div>
      <h1 className="text-center text-2xl text-pink-600">Our Tour Packages</h1>

      <div className="flex justify-center align-middle pb-20 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {tourPackages?.data?.data?.map(
            (
              tourPackage: DynamicTourPackageData,
              index: Key | null | undefined
            ) => (
              <DynamicTourCartContant
                key={index}
                tourPackage={tourPackage}
                isLoading={isLoading}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TourPage;
