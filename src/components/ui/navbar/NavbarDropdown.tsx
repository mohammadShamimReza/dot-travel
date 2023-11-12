"use client";
import { authKey } from "@/constants/storageKey";
import { useUser } from "@/lib/UserProvider";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Image from "next/image";
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

  console.log(role, id);

  useEffect(() => {
    setUser({ role, id });
  }, [role, id, setUser]);

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

  return (
    <div>
      {" "}
      <Dropdown menu={{ items }} placement="bottom" className="cursor-pointer">
        {/* <Button className=""> */}
        {/* <button className="border-none"> */}
        <div ref={avatarRef} className="hover:text-blue-600 text-blue-500">
          {user.role ? (
            <div className="flex justify-center align-middle">
              {/* <MdTour className="w-8 h-8 hover:text-blue-600 text-blue-500" /> */}
              <Image
                src={
                  "https://i.ibb.co/mHJTv57/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                }
                width={40}
                height={40}
                // layout="responsive"
                // objectFit="cover"
                alt="package image"
                className=""
              ></Image>
            </div>
          ) : (
            "login/signup"
          )}
        </div>
        {/* </button> */}
        {/* </Button> */}
      </Dropdown>
    </div>
  );
}

export default NavbarDropdown;
