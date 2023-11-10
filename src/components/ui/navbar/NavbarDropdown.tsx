"use client";
import { authKey } from "@/constants/storageKey";
import { useUser } from "@/lib/UserProvider";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { RxAvatar } from "react-icons/rx";

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

const loginItemsForUser: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link rel="noopener noreferrer" href="/profile">
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
        }}
        rel="noopener noreferrer"
        href="/"
      >
        log out
      </Link>
    ),
  },
];

function NavbarDropdown() {
  const { user, setUser } = useUser();

  const { role, id } = getUserInfo() as any;
  console.log(role, id);

  useEffect(() => {
    setUser({ role: role, id: id });
  }, [role, id]);

  const loginItemsForAdmins: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href="/profile">
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

  let items =
    user.role === "user"
      ? loginItemsForUser
      : user.role === "admin" || user.role === "super_admin"
      ? loginItemsForAdmins
      : withoutLoginItems;

  const avatarRef = useRef(null);

  console.log(user.role);

  return (
    <div>
      {" "}
      <Dropdown menu={{ items }} placement="bottom" className="cursor-pointer">
        {/* <Button className=""> */}
        {/* <button className="border-none"> */}
        <div ref={avatarRef} className="">
          <RxAvatar className="w-8 h-8 hover:text-pink-600 text-pink-500" />
        </div>
        {/* </button> */}
        {/* </Button> */}
      </Dropdown>
    </div>
  );
}

export default NavbarDropdown;
