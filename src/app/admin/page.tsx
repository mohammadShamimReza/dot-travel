"use client";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Manage_client from "./Manage_client";
import Manage_host from "./Manage_host";
import Manage_package from "./Manage_package";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Manage_packages",
    children: <Manage_package />,
  },
  {
    key: "2",
    label: "Manage_host",
    children: <Manage_host />,
  },
  {
    key: "3",
    label: "Mangae_client",
    children: <Manage_client />,
  },
];

function page() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="min-h-screen">
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
}

export default page;
