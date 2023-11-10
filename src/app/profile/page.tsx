"use client";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProfileContant from "./ProfileContant";

function Page() {
  const router = useRouter();

  const { id, role } = getUserInfo() as any;

  useEffect(() => {
    if (!role && !id) {
      router.push("/login");
    }
  }, [id, role, router]);

  return (
    <div className="min-h-screen">
      <ProfileContant />
    </div>
  );
}

export default Page;
