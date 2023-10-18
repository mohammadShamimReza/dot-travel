"use client";
import Manage_blog from "@/components/ui/manage_work/Manage_blog";
import Manage_faq from "@/components/ui/manage_work/Manage_faq";
import Manage_host from "@/components/ui/manage_work/Manage_host";
import Manage_package from "@/components/ui/manage_work/Manage_package";
import Manage_package_category from "@/components/ui/manage_work/Manage_package_category";
import Manage_client from "@/components/ui/manage_work/Manage_user";
// import { getUserInfo } from "@/services/auth.service";
import { Collapse } from "antd";

const { Panel } = Collapse;

function page() {
  // const { id, role, email } = getUserInfo();
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="min-h-screen mb-20">
      <Collapse defaultActiveKey={["1"]}>
        <Panel
          header={<p className="text-lg text-pink-600">Manage Admin</p>}
          key="1"
          className="bg-pink-50 text-center"
        >
          {/* <Manage_admin /> */}
        </Panel>
        <Panel
          header={
            <p className="text-lg text-pink-600">Manage Package Category</p>
          }
          key="2"
          className="bg-pink-50 text-center"
        >
          <Manage_package_category />
        </Panel>
        <Panel
          header={<p className="text-lg text-pink-600">Manage Package</p>}
          key="3"
          className="bg-pink-50 text-center"
        >
          <Manage_package />
        </Panel>
        <Panel
          header={<p className="text-lg text-pink-600">Manage Host</p>}
          key="4"
          className="bg-pink-50 text-center"
        >
          <Manage_host />
        </Panel>
        <Panel
          header={<p className="text-lg text-pink-600">Manage User</p>}
          key="5"
          className="bg-pink-50 text-center"
        >
          <Manage_client />
        </Panel>

        <Panel
          header={<p className="text-lg text-pink-600">Manage Faq</p>}
          key="6"
          className="bg-pink-50 text-center"
        >
          <Manage_faq />
        </Panel>
        <Panel
          header={<p className="text-lg text-pink-600">Manage Blog</p>}
          key="7"
          className="bg-pink-50 text-center"
        >
          <Manage_blog />
        </Panel>
      </Collapse>
    </div>
  );
}

export default page;
