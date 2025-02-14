import React, { useState } from 'react'
import bookfight from '../../../assets/DASHBORD.svg'
import { FaPlaneDeparture, FaUser, FaCalendarAlt } from "react-icons/fa";

const Bookflight = () => {
    const [passengers, setPassengers] = useState(1);

    return (
      <div className="relative bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 max-w-4xl mx-auto">
        {/* Left Side (Image) */}
        <div className="w-1/2 relative">
          <img
            src={bookfight}
            alt="Airplane"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
  
        {/* Right Side (Form) */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-xl font-bold text-gray-800">هل تخطط لرحلة جديدة؟</h2>
          <h3 className="text-2xl font-bold text-blue-900">احجز رحلة الآن</h3>
          
          <div className="space-y-3">
            {/* From Input */}
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
              <FaPlaneDeparture className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="New York (NYC)"
                className="bg-transparent flex-1 outline-none text-gray-700"
              />
            </div>
  
            {/* To Input */}
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
              <FaPlaneDeparture className="text-gray-500 mr-2 rotate-180" />
              <input
                type="text"
                placeholder="Chicago (CHS)"
                className="bg-transparent flex-1 outline-none text-gray-700"
              />
            </div>
  
            {/* Date Input */}
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                type="date"
                className="bg-transparent flex-1 outline-none text-gray-700"
              />
            </div>
  
            {/* Passengers Input */}
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100">
              <FaUser className="text-gray-500 mr-2" />
              <button
                className="px-2 text-lg"
                onClick={() => setPassengers((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="mx-2 text-gray-700">{passengers}</span>
              <button
                className="px-2 text-lg"
                onClick={() => setPassengers((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
  
          {/* Submit Button */}
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-bold hover:bg-blue-800">
            البحث عن رحلة
          </button>
        </div>
      </div>
    );
}

export default Bookflight
