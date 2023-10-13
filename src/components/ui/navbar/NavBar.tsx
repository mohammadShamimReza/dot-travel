import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="p-4 border border-t-0 border-l-0 border-r-0 border-b-gray-200 dark:border-b-gray-600">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="p-2">MS-Blog</div>
        </Link>
        <div>
          <div className="relative mt-2 ">
            <input
              type="text"
              name="name"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 "
              placeholder="search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-2">
            <Link href="/write">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                About
              </button>
            </Link>

            <Link href="/profile">
              <button className="p-2 rounded w-12 h-12">
                <RxAvatar className="w-8 h-8" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
