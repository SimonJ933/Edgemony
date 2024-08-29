import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 shadow dark:bg-gray-900 dark:border-gray-700 w-full mt-0">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center ">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            HOME
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href="/about" className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
              CONTATTI
            </Link>
          </li>
          <li>
            <Link href="/form" className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
              FORM
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
