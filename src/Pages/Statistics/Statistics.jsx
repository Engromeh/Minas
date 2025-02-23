import React from "react";
import celender from "../../assets/calendardashbord.svg";
import accspt from "../../assets/tick.svg";
import celnseld from "../../assets/cancelled.svg";
import doller from "../../assets/dollar.svg";

const Statistics = () => {
  return (
    <div className="box-show grid grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <div className="Statistics-box bg-white p-4  shadow flex justify-between items-center" >
        <div className="style-font flex flex-col text-left">
          <h3 className="statistics-number font-bold text-[#09121E]" >45</h3>
          <p className="statistics-prargraph text-gray-500" >عدد الحجوزات</p>
        </div>
        <img src={celender} className="w-10 h-10 ml-auto" alt="calendar" />
      </div>

      <div className="Statistics-box bg-white p-4 shadow flex justify-between items-center">
        <div className="style-font flex flex-col text-left">
          <h3 className="statistics-number font-bold text-[#09121E]">33</h3>
          <p className="statistics-prargraph text-gray-500">حجوزات متممة</p>
        </div>
        <img src={accspt} className="w-10 h-10 ml-auto" alt="accepted" />
      </div>

      <div className="Statistics-box bg-white p-4 shadow flex justify-between items-center">
        <div className="style-font flex flex-col text-left">
          <h3 className="statistics-number font-bold text-[#09121E]">12</h3>
          <p className="statistics-prargraph text-gray-500">الحجوزات الملغية</p>
        </div>
        <img src={celnseld} className="w-10 h-10 ml-auto" alt="cancelled" />
      </div>

      <div className="Statistics-box bg-white p-4  shadow flex justify-between items-center">
        <div className="style-font flex flex-col text-left">
          <h3 className="statistics-number font-bold text-[#09121E]">129</h3>
          <p className="statistics-prargraph text-gray-500">إجمالي المال</p>
        </div>
        <img src={doller} className="w-10 h-10 ml-auto" alt="money" />
      </div>
    </div>
  );
};

export default Statistics;
