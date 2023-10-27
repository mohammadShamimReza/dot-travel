"use client";
import {
  useAddToCartPackageToursQuery,
  useDeleteAddToCartPackageTourMutation,
} from "@/redux/api/addToCartPackageApi";
import { getUserInfo } from "@/services/auth.service";
import { IAddToCartPackage } from "@/types";
import { Card } from "antd";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { MdTour } from "react-icons/md";

function FavoritePackage() {
  const { data: favouriteItems } = useAddToCartPackageToursQuery({});
  const [deleteAddToCartPackageTour] = useDeleteAddToCartPackageTourMutation();
  const { email, id } = getUserInfo() as any;

  const userFavouriteItems = favouriteItems?.filter((favouriteItem: any) => {
    const res = favouriteItem.userId === id;
    return res;
  });

  if (!favouriteItems) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className=" w-64 hover:text-pink-600 text-pink-500 transition duration-300 transform hover:scale-125 text-center">
          Favorite Items not found
        </p>{" "}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center">
        <p className=" w-64 hover:text-pink-600 text-pink-500 transition duration-300 transform hover:scale-125 text-center">
          Favorite packages
        </p>{" "}
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {userFavouriteItems?.map((packaged: IAddToCartPackage) => (
          <Card
            key={packaged.package.id}
            title={packaged.package.title}
            extra={<a href="#"></a>}
            style={{ width: 250 }}
            className="hover:shadow-lg "
          >
            <div className="">
              <Link
                href={`/TourPackages/${packaged.id}`}
                className="text-black hover:text-purple-600"
              >
                <div className="flex justify-center align-middle">
                  <MdTour className="w-8 h-8 hover:text-pink-600 text-pink-500" />
                </div>
                <p>Price: {packaged.package.price}</p>
                <p>from: {packaged.package.from}</p>
                <p>to: {packaged.package.to}</p>
              </Link>
            </div>

            <br />
            <p className="flex justify-evenly">
              <button onClick={() => deleteAddToCartPackageTour(packaged.id)}>
                {" "}
                <AiFillDelete className="h-5 w-5 hover:text-pink-600 text-pink-500 hover:cursor-pointer transition duration-300 transform hover:scale-125" />
              </button>
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FavoritePackage;
