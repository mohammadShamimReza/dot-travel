"use client";
import { authKey } from "@/constants/storageKey";
import { useUser } from "@/lib/UserProvider";
import { useUsersByIdQuery } from "@/redux/api/userApi";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import { useEffect, useRef } from "react";

const withoutLoginItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/login">
        Log In
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link rel="noopener noreferrer" href="/signup">
        Sign Up
      </Link>
    ),
  },
];

function NavbarDropdown() {
  const { user, setUser } = useUser();

  const userInfo = (getUserInfo() as any) || {}; // Use an empty object as a fallback

  const { role, id } = userInfo;

  useEffect(() => {
    setUser({ role, id });
  }, [role, id, setUser]);

  const loginItemsForAdmins: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href={`/profile/${id}`}>
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" href="/management">
          Management
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          onClick={() => {
            removeUserInfo(authKey);
            setUser({ role: "", id: "" });
          }}
          rel="noopener noreferrer"
          href="/"
        >
          log out
        </Link>
      ),
    },
  ];

  const loginItemsForUser: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href={`/profile/${id}`}>
          Profile
        </Link>
      ),
    },

    {
      key: "2",
      label: (
        <Link
          onClick={() => {
            removeUserInfo(authKey);
            setUser({ role: "", id: "" });
          }}
          rel="noopener noreferrer"
          href="/"
        >
          log out
        </Link>
      ),
    },
  ];

  let items =
    user.role === "user"
      ? loginItemsForUser
      : user.role === "admin" || user.role === "super_admin"
      ? loginItemsForAdmins
      : withoutLoginItems;

  const avatarRef = useRef(null);

  const { data } = useUsersByIdQuery(id);
  const userData = data?.data;

  return (
    <div>
      <div className="">
        {" "}
        <Dropdown
          menu={{ items }}
          placement="bottom"
          className="cursor-pointer"
        >
          {/* <Button className=""> */}
          {/* <button className="border-none"> */}
          <div ref={avatarRef} className=" ">
            {user.role ? (
              <div className="flex justify-center align-middle rounded-full bg-white p-3 hover:bg-slate-300 ">
                <UserOutlined style={{ color: "black" }} />
              </div>
            ) : (
              <UserOutlined style={{ color: "black" }} />

            )}
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavbarDropdown;
