import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function NavTop() {
  return (
    <div className="h-10 bg-gray-800 flex items-center justify-between text-gray-300 px-10">
      <div className="flex gap-5">
        <span>
          <PhoneOutlined /> +8801719317307
        </span>{" "}
        |
        <span>
          {" "}
          <MailOutlined /> mohammadshamimreza23393@gmail.com
        </span>
      </div>
      <div className="flex gap-5 ">
        <Link href={"https://facebook.com"} target="_blank">
          <FacebookOutlined className="hover:cursor-pointer hover:text-blue-500" />
        </Link>
        <Link href={"https://twitter.com/"} target="_blank">
          <TwitterOutlined className="hover:cursor-pointer hover:text-blue-400" />
        </Link>
        <Link href={"https://youtube.com/"} target="_blank">
          <YoutubeOutlined className="hover:cursor-pointer hover:text-red-600" />
        </Link>
        <Link href={"https://instagram.com"} target="_blank">
          <InstagramOutlined className="hover:cursor-pointer hover:text-red-400" />
        </Link>
      </div>
    </div>
  );
}

export default NavTop;
