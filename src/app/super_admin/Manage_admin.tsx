import { useAdminQuery } from "@/redux/api/adminApi";
import { IAdmin } from "@/types";
import { Card } from "antd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function Manage_admin() {
  const { data, isLoading } = useAdminQuery({
    role: "admin",
  });
  const admins = data?.data;
  console.log(admins, data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {admins?.map((admin: IAdmin) => (
        <Card
          key={admin.id}
          title={admin.firstName + " " + admin.lastName}
          extra={<a href="#">manage</a>}
          style={{ width: 250 }}
        >
          <p>{admin.email}</p>
          <p>{admin.phone}</p>
          <br />
          <p className="flex justify-evenly">
            <AiFillEdit className="h-5 w-5" />
            <AiFillDelete className="h-5 w-5 hover:text-pink-600 text-pink-500" />
          </p>
        </Card>
      ))}
    </div>
  );
}


export default Manage_admin;
