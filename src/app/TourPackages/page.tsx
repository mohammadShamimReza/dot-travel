"use client";
import DynamicTourCartContant from "@/components/ui/packagesTour/DynamicTourCartContant";
import { DynamicTourPackageData } from "@/components/ui/packagesTour/tourCommon";
import { usePackageTourQuery } from "@/redux/api/packageApi";
import { Avatar, Card } from "antd";
import { Key, useState } from "react";

function TourPage() {
  const loadingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto">
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
  if (tourPackages.data.meta.total === 0) {
    return (
      <div className="min-h-screen">
        <h1 className="text-center text-3xl text-blue-600">Data not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="flex items-center justify-center pb-12 ">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              className="w-96 block  rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-blue-300  placeholder:text-gray-400    sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="search destination"
              value={searchTerm}
              onChange={handleOnSubmit}
            />
          </form>
        </div>
      </div>
      <h1 className="text-center text-2xl text-blue-600">Our Tour Packages</h1>

      <div className="flex justify-center align-middle pb-20 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {tourPackages.data.meta.total === 0 ? (
            <h1 className="text-center text-3xl text-blue-600">
              Data not found
            </h1>
          ) : (
            tourPackages?.data?.data
              ?.slice(0, 8)
              .map(
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
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default TourPage;
