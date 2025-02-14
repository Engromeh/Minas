import React from "react";
import Sidbar from "../Pages/Sidbar/Sidbar";
import Navbar from "../Pages/Navbar/Navbar";
import Statistics from "../Pages/Statistics/Statistics";
import UserInfo from "../Pages/UserInfo/UserInfo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 bg-[#F5F5F5] ">
      <aside className="hidden md:block md:col-span-1 lg:col-span-2  min-h-screen">
        <Sidbar />
      </aside>

      <div className="col-span-12 md:col-span-10 lg:col-span-7">
        <Navbar />
        <Statistics />
        <Outlet />
      </div>

      <aside className="col-span-12 md:col-span-2 lg:col-span-3 lg:ml-4  p-4 rounded-lg">
        <UserInfo />
      </aside>
    </div>
  );
};

export default Layout;
