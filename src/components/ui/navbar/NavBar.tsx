import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";

function NavBar() {
  return (
    <nav className="p-4 border border-t-0 border-l-0 border-r-0 border-b-gray-200 dark:border-b-gray-600">
      <div className="flex items-center justify-between">
        <Link href="/">
          <p className="p-2">Dot-travel</p>
        </Link>
        <div>
          <div className="relative mt-2 ">
            <input
              type="text"
              name="name"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-pink-300 dark:ring-pink-600 placeholder:text-gray-400    sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/package">
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
