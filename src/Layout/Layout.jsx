import React from "react";
import Sidbar from "../Pages/Sidbar/Sidbar";
import Navbar from "../Pages/Navbar/Navbar";
import Statistics from "../Pages/Statistics/Statistics";
import UserInfo from "../Pages/UserInfo/UserInfo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 bg-[#F5F5F5] ">
      <aside className="col-span-2 md:col-span-1 lg:col-span-1  min-h-screen">
        <Sidbar />
      </aside>

      <div className="col-span-10 md:col-span-10 lg:col-span-8 xl:ml-8" style={{marginLeft:"20%"}}>
        <Navbar />
        <Statistics />
        <Outlet />
      </div>

      <aside className="USER-INFO  col-span-10 md:col-span-2 lg:col-span-3 lg:ml-4 xl:col-3  p-4 rounded-lg">
        <UserInfo />
      </aside>
    </div>
  );
};

export default Layout;
