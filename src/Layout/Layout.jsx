import React from "react";
import Sidbar from "../Pages/Sidbar/Sidbar";
import Navbar from "../Pages/Navbar/Navbar";
import Statistics from "../Pages/Statistics/Statistics";
import UserInfo from "../Pages/UserInfo/UserInfo";

const Layout = () => {
  return (
    <div className="grid grid-cols-12 ">
      <aside className="col-span-2">
        <Sidbar />
      </aside>

      <div className="col-span-7 ">
        <Navbar />
        <Statistics />
      </div>

      <aside className="col-span-3" style={{marginLeft:"5%"}}>

    <UserInfo /> 
      </aside>
    </div>
  );
};

export default Layout;
