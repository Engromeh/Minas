import React from "react";
import hend from "../../assets/handinnav bar.svg";
import search from "../../assets/search.svg";
const Navbar = () => {
  return (
    <nav className="nav-bare    shadow-md w-full h-16 flex flex-col md:flex-row items-center justify-between p-2 space-y-2 md:space-y-0 mt-6">
      <div className="flex items-center space-x-3">
        <img src={hend} className="h-8" alt="Logo" />
        <span className="text-nav   font-semibold dark:text-black" style={{fontFamily:"Cairo"}}>
          Hello! Mr. Hedra Naguib
        </span>
      </div>

      <div className="search-input flex items-center relative w-full md:w-auto">
        <input
          type="text"
          placeholder="رقم الرحلة"
          className="input-nav w-full md:w-64 ps-10 px-4 py-2  rounded-lg bg-[#F5F5F5]  text-[#939393] "
          style={{ fontFamily:"Cairo"}}
        />

        <img
          src={search}
          alt="wwwww"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;
