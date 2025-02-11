import React from "react";
import hend from "../assets/handinnav bar.svg";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center space-x-3">
          <img src={hend} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">
            Hello! Mr. Hedra Naguib
          </span>
        </a>

        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="بحث عن رحلة..."
            className="w-64 ps-10 px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path strokeWidth="2" d="M19 19l-4-4M14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z" />
          </svg>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 focus:ring-2 focus:ring-gray-300"
          onClick={() => {
            document.getElementById("mobile-menu").classList.toggle("hidden");
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className="hidden md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="بحث عن رحلة..."
          className="w-full px-4  py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white "
        />
      </div>
    </nav>
  );
};

export default Navbar;
