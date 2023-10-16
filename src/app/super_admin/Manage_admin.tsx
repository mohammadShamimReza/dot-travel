import { useAdminQuery } from "@/redux/api/adminApi";
import { Card } from "antd";

function Manage_admin() {
  const { data, isLoading } = useAdminQuery({
    role: "admin",
  });

  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <Card
        title="Default size card"
        extra={<a href="#">manage</a>}
        style={{ width: 250 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default Manage_admin;
