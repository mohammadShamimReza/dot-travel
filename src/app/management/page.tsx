"use client";
import Manage_admin from "@/components/ui/manage_work/Manage_admin";
import Manage_client from "@/components/ui/manage_work/Manage_client";
import Manage_host from "@/components/ui/manage_work/Manage_host";
import Manage_package from "@/components/ui/manage_work/Manage_package";
import { Collapse } from "antd";

const { Panel } = Collapse;

function page() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="min-h-screen">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Mange_admin" key="1" className="bg-pink-50 text-center">
          <Manage_admin />
        </Panel>
        <Panel
          header="Manage_packages?"
          key="2"
          className="bg-pink-50 text-center"
        >
          <Manage_package />
        </Panel>
        <Panel header="Manage_host?" key="3" className="bg-pink-50 text-center">
          <Manage_host />
        </Panel>
        <Panel
          header="Mangae_client?"
          key="4"
          className="bg-pink-50 text-center"
        >
          <Manage_client />
        </Panel>
      </Collapse>
    </div>
  );
}

export default page;
