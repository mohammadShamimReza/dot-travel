"use client";
import { useUser } from "@/lib/UserProvider";
import {
  useAddToCartPackageToursQuery,
  useDeleteAddToCartPackageTourMutation,
} from "@/redux/api/addToCartPackageApi";
import { IAddToCartPackage } from "@/types";
import { Avatar, Card, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import noProduct from "../../assets/No data-pana.png";

function FavoritePackage() {
  const loadingData = [1, 2, 3, 4];

  const { data: favouriteItems } = useAddToCartPackageToursQuery({});
  const [deleteAddToCartPackageTour] = useDeleteAddToCartPackageTourMutation();

  const { user } = useUser();
  const { id, role, email } = user as any;

  const userFavouriteItems = favouriteItems?.data?.filter(
    (favouriteItem: any) => {
      const res = favouriteItem.userId === id;
      return res;
    }
  );

  if (userFavouriteItems?.length === 0 || userFavouriteItems === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <Image
          src={noProduct}
          width={500}
          height={500}
          alt="favourit not found"
          className="hover:text-blue-600 text-blue-500"
        ></Image>
        <div className=" ">
          <p className="  text-blue-500  text-center text-2xl">
            You do not have any favourite package <br />
          </p>{" "}
          {!id || !role ? (
            <div className="hover:text-blue-600 text-blue-500 underline transition duration-300 transform hover:scale-125 mt-10 text-right">
              <Link href={"/login"} className="">
                Please Login
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  if (userFavouriteItems?.length > 0) {
    return (
      <div className="min-h-screen">
        <div className="flex items-center justify-center">
          <p className=" w-64 hover:text-blue-600 text-blue-500 transition duration-300  text-center text-2xl">
            Favorite packages
          </p>{" "}
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                    {!packaged.package.packageImage ? (
                      <Card
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
                    ) : (
                      <div className="flex justify-center align-middle ">
                        {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
                        <Image
                          src={packaged.package.packageImage}
                          width={200}
                          height={100}
                          layout="responsive"
                          objectFit="cover"
                          alt="package image"
                          // className="w-full h-32"
                        ></Image>
                      </div>
                    )}
                  </div>
                  <p>Price: {packaged.package.price}</p>
                  <p>from: {packaged.package.from}</p>
                  <p>to: {packaged.package.to}</p>
                </Link>
              </div>

              <br />
              <p className="flex justify-evenly">
                <button
                  onClick={() => {
                    deleteAddToCartPackageTour(packaged.id);
                    message.loading("Deleteing packages from favorites...");
                  }}
                  className="p-2 border rounded-lg transition duration-300 transform hover:scale-125"
                >
                  {" "}
                  Delete
                </button>
              </p>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default FavoritePackage;
