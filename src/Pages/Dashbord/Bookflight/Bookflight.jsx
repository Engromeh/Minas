import React, { useState } from "react";
import bookfight from "../../../assets/bookfight.svg";
import { FaPlaneDeparture, FaUser, FaCalendarAlt } from "react-icons/fa";

const Bookflight = () => {
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="form-book relative bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-4xl mx-auto mt-3" style={{height:"98%"}}>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bookfight}
          alt="Airplane"
          className="w-[60%] md:w-full h-auto object-cover rounded-xl"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <div className="space-y-3 mb-6">
          <div>
            <label
              htmlFor="from"
              className="style-font block text-gray-600  text-left"
            >
              من
            </label>
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
              <FaPlaneDeparture className="text-gray-500 mr-2" />
              <input
                id="from"
                type="text"
                placeholder="New York (NYC)"
                className="bg-transparent flex-1 outline-none border-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label htmlFor="to" className="style-font block text-gray-600 mb-1 text-left">
              إلى
            </label>
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
              <FaPlaneDeparture className="text-gray-500 mr-2 " />
              <input
                id="to"
                type="text"
                placeholder="Chicago (CHS)"
                className="bg-transparent flex-1 outline-none border-none text-gray-700"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="date"
                className="style-font block text-gray-600 mb-1 text-left"
              >
                التاريخ
              </label>
              <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100 relative">
                {/* <FaCalendarAlt className="text-gray-500 absolute 3" /> */}
                <input
                  id="date"
                  type="date"
                  className="date-input bg-transparent flex-1 outline-none border-none  text-gray-700 font-semibold pl-10 pr-2 cursor-pointer"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="passengers"
                className="style-font block text-gray-600 mb-1 text-left"
              >
                عدد الركاب
              </label>
              <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
                <FaUser className="text-gray-500 mr-2" />
                <button
                  className="px-2 text-lg bg-white outline-none border-none"
                  onClick={() => setPassengers((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span id="passengers" className="mx-2 text-gray-700">
                  {passengers}
                </span>
                <button
                  className="px-2 text-lg bg-white outline-none border-none"
                  onClick={() => setPassengers((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="style-font w-full md:w-auto bg-blue-900 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-800 transition" style={{width:"100%"}}>
          البحث عن رحلة
        </button>
      </div>
    </div>
  );
};

export default Bookflight;
