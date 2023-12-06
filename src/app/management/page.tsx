"use client";
import Manage_admin from "@/components/ui/manage_work/Manage_admin";
import Manage_blog from "@/components/ui/manage_work/Manage_blog";
import Manage_faq from "@/components/ui/manage_work/Manage_faq";
import Manage_package from "@/components/ui/manage_work/Manage_package";
import Manage_client from "@/components/ui/manage_work/Manage_user";
import { useUser } from "@/lib/UserProvider";
// import { getUserInfo } from "@/services/auth.service";
import { Card, Collapse } from "antd";
import Link from "next/link";

const { Panel } = Collapse;



function ManageMentPage() {

  const { user } = useUser();
  const { role, id } = user as any;

  let activeKey;

  {
    role === "super_admin" ? (activeKey = "1") : (activeKey = "2");
  }

  if (!role && !id && role === "user") {
    return (
      <Card
        className="min-h-screen text-center m-4"
        style={{ width: "100%", marginTop: 16 }}
      >
        You are Not authorized
        <Link href={"/login"} className="text-lg text-blue-600">
          Please login
        </Link>{" "}
      </Card>
    );
  }

  return (
    <div className="min-h-screen mb-20 ">
      <Collapse defaultActiveKey={[activeKey]} size="large">
        {role === "super_admin" ? (
          <Panel
            header={<p className="text-lg text-blue-600">Manage Admin</p>}
            key="1"
            className="bg-blue-50 text-center "
          >
            <Manage_admin />
          </Panel>
        ) : (
          ""
        )}
        {role === "super_admin" || role === "admin" ? (
          <Panel
            header={<p className="text-lg text-blue-600 ">Manage Package</p>}
            key="2"
            className="bg-blue-50 text-center "
          >
            <Manage_package />
          </Panel>
        ) : (
          ""
        )}

        {role === "admin" ? (
          <>
            <Panel
              header={<p className="text-lg text-blue-600">Manage User</p>}
              key="3"
              className="bg-blue-50 text-center"
            >
              <Manage_client />
            </Panel>

            <Panel
              header={<p className="text-lg text-blue-600">Manage Faq</p>}
              key="4"
              className="bg-blue-50 text-center"
            >
              <Manage_faq />
            </Panel>
            <Panel
              header={<p className="text-lg text-blue-600">Manage Blog</p>}
              key="5"
              className="bg-blue-50 text-center"
            >
              <Manage_blog />
            </Panel>
          </>
        ) : (
          ""
        )}
      </Collapse>
    </div>
  );
}

export default ManageMentPage;
