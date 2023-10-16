"use client";
import { getUserInfo } from "@/services/auth.service";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import { useRef } from "react";
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

const loginItems: MenuProps["items"] = [
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
];

function NavbarDropdown() {
  const { role, id } = getUserInfo() as any;

  const items = role ? loginItems : withoutLoginItems;
  const avatarRef = useRef(null);

  console.log(role);
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
