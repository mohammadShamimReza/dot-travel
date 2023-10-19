"use client";
import DynamicTourCartContant from "@/components/ui/packagesTour/DynamicTourCartContant";
import { DynamicTourPackageData } from "@/components/ui/packagesTour/tourCommon";
import { usePackageToursQuery } from "@/redux/api/packageApi";
import { Key } from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: tourPackages, isLoading } = usePackageToursQuery({});

  return (
    <div className="">
      <div>
        <div className="flex items-center justify-center pb-12 ">
          <input
            type="text"
            name="name"
            className="w-72 block  rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-pink-300  placeholder:text-gray-400    sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="search"
          />
        </div>
      </div>
      <h1 className="text-center text-2xl text-pink-600">Our Tour Packages</h1>

      <div className="flex justify-center align-middle pb-20 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {tourPackages?.map(
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

export default page;
