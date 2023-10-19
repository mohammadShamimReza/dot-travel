"use client";
import Manage_admin from "@/components/ui/manage_work/Manage_admin";
import Manage_blog from "@/components/ui/manage_work/Manage_blog";
import Manage_faq from "@/components/ui/manage_work/Manage_faq";
import Manage_package from "@/components/ui/manage_work/Manage_package";
import Manage_client from "@/components/ui/manage_work/Manage_user";
import { getUserInfo } from "@/services/auth.service";
// import { getUserInfo } from "@/services/auth.service";
import { Collapse } from "antd";
import { useRouter } from "next/router";

const { Panel } = Collapse;

function ManageMentPage() {
  const { role, id } = getUserInfo() as any;

  const router = useRouter();

  if (!role && !id) {
    router.push("/login");
  }

  return (
    <div className="min-h-screen mb-20">
      <Collapse defaultActiveKey={["1"]}>
        <Panel
          header={<p className="text-lg text-pink-600">Manage Admin</p>}
          key="1"
          className="bg-pink-50 text-center"
        >
          <Manage_admin />
        </Panel>

        <Panel
          header={<p className="text-lg text-pink-600">Manage Package</p>}
          key="2"
          className="bg-pink-50 text-center"
        >
          <Manage_package />
        </Panel>

        <Panel
          header={<p className="text-lg text-pink-600">Manage User</p>}
          key="3"
          className="bg-pink-50 text-center"
        >
          <Manage_client />
        </Panel>

        <Panel
          header={<p className="text-lg text-pink-600">Manage Faq</p>}
          key="4"
          className="bg-pink-50 text-center"
        >
          <Manage_faq />
        </Panel>
        <Panel
          header={<p className="text-lg text-pink-600">Manage Blog</p>}
          key="5"
          className="bg-pink-50 text-center"
        >
          <Manage_blog />
        </Panel>
      </Collapse>
    </div>
  );
}

export default ManageMentPage;
