"use client";
import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Link from "next/link";
import { useRef } from "react";
import { RxAvatar } from "react-icons/rx";

const { role, id } = getUserInfo() as any;

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
  {
    key: "3",
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

let items = role ? loginItems : withoutLoginItems;

function NavbarDropdown() {
  const avatarRef = useRef(null);

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
