"use client";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import ProfileContant from "./ProfileContant";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const { id, role } = getUserInfo() as any;
  if (!role && !id) {
    router.push("/profile");
  }
  return (
    <div className="min-h-screen">
      <ProfileContant />
    </div>
  );
}

export default page;
