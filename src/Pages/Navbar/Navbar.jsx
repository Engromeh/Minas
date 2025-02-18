import React from "react";
import hend from "../../assets/handinnav bar.svg";

const Navbar = () => {
  return (
    <nav
      className="nav-bare   bg-white  shadow-md w-full h-16 flex flex-col md:flex-row items-center justify-between rounded-md p-2 space-y-2 md:space-y-0 mt-6"
    >
      <div className="flex items-center space-x-3">
        <img src={hend} className="h-8" alt="Logo" />
        <span className="text-nav   text-2xl font-semibold dark:text-black">
          Hello! Mr. Hedra Naguib
        </span>
      </div>

      <div className="search-input flex items-center relative w-full md:w-auto">
        <input
          type="text"
          placeholder="رقم الرحلة"
          className="w-full md:w-64 ps-10 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 dark:text-white "
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            d="M19 19l-4-4M14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
