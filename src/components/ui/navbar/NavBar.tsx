import Image from "next/image";
import Link from "next/link";
import companyLogo from "../../../assets/company_log.jpg";
import NavbarDropdown from "./NavbarDropdown";

function NavBar() {
  return (
    <nav className="p-2 pb-9   ">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            className="rounded-full"
            src={companyLogo}
            width={70}
            height={50}
            alt="company logo"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/TourPackages">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                Tour package
              </button>
            </Link>
            <Link href="/solo">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                Solo tour
              </button>
            </Link>
            <Link href="/about">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                Contact
              </button>
            </Link>

            <NavbarDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
