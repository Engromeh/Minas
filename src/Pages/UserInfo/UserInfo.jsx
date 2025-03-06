import React, { useState } from "react";
import notification from "../../assets/notification.svg";
import edit from "../../assets/edit Profile.svg";
import fightgo from "../../assets/flightgo.svg";
import fightback from "../../assets/flightback.svg";
import line from "../../assets/Line 4.svg";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import romeh from "../../assets/Romeh.jpg"
const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);

  const [isDark, setIsDark] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("Hedra Naguib");
  const [phone, setPhone] = useState("+201551407492");
  const [image, setImage] = useState(romeh
  );
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const handleSave = () => {
    setUser((prev) => ({ ...prev, name ,image }));
    setShowForm(false);
  };
  return (
    <div
      className=" USER-INFO bg-white shadow-md rounded-lg p-4 w-full  flex flex-col justify-between" 
      style={{ height: "100%", width: "auto"}}
    >
      <div className="flex justify-between items-center">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <img src={notification} alt="Notification" />
        </button>
        <h2 className=" style-font font-semibold" style={{fontSize:"18px"}}>معلومات المستخدم</h2>

      </div>

      <div className="style-font flex flex-col items-center mt-4">
        {!showForm ? (
          <>
            <img src={user.image} alt="User" className="w-32 h-32 rounded-full border-4 border-white shadow-md" />
            <h2 className="font-bold mt-3 text-xl">{user.name}</h2>
            <p className="text-gray-500 text-sm" style={{fontSize:"18px"}}>{phone}</p>
            <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition mt-3" onClick={() => setShowForm(true)}>
              <img src={edit} alt="Edit" />
              
            </button>
          </>
        ) : (
          <>
            <label className="style-font cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              <img src={image} alt="User" className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md object-cover" />
            </label>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="style-font mt-3 px-3 py-2 border rounded w-64" placeholder="Enter Name" />
            <input type="text" value={phone} onChange={(e) => setName(e.target.value)} className="style-font mt-3 px-3 py-2 border rounded w-64" placeholder="Enter phone" />


            <div className="style-font flex gap-2 mt-3">
              <button className="bg-[#212D5D] text-white px-4 py-2 rounded transition" onClick={handleSave}>
                حفظ
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition" onClick={() => setShowForm(false)}>
                إلغاء
              </button>
            </div>
          </>
        )}
      </div>
      <div className="style-font flex justify-center my-3 ">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          <div
            className={`w-20 h-8 flex items-center rounded-full transition-all px-2 ${
              isDark ? "bg-blue-900" : "bg-gray-200"
            }`}
          >
            <span
              className={`absolute w-full text-center text-sm font-medium transition-all ${
                isDark ? "text-white" : "text-gray-600"
              }`}
            >
              {isDark ? "Dark" : "Light"}
            </span>
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isDark ? "translate-x-12" : "translate-x-0"
              }`}
            ></div>
          </div>
        </label>
      </div>
      <div className="text-sm text-gray-600 space-y-2 mt-6 flex flex-col flex-grow justify-center" style={{marginTop:"10%"}}>
        <div className="style-font flex justify-between">
          <p className="font-medium text-gray-500">الموقع</p>
          <p className="text-[#09121E] font-bold">مصر</p>
        </div>
        <img src={line} className="w-full my-2 opacity-40" alt="divider" />
        <div className="style-font flex justify-between">
          <p className="font-medium text-gray-500">البريد</p>
          <p className="text-[#09121E] font-bold">navedansari@gmail.com</p>
        </div>
        <img src={line} className="w-full my-2 opacity-40" alt="divider" />
        <div className="style-font flex justify-between">
          <p className="font-medium text-gray-500">تاريخ الميلاد</p>
          <p className="text-[#09121E] font-bold">1/2/2004</p>
        </div>
        <img src={line} className="w-full my-2 opacity-40" alt="divider" />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">الحجوزات</h3>
        <a href="#" className="text-blue-600 text-sm">
          View All
        </a>
      </div>
      <div className="mt-4 bg-gray-100 p-3 rounded-lg">
        <div className="flex">
          <button
            className={`next-fight px-4 py-2 transition ${
              activeTab === "upcoming"
                ? "bg-blue-900 text-white"
                : "bg-gray-300 text-gray-700"
            } `}
            onClick={() => setActiveTab("upcoming")}
            style={{fontFamily:"Cairo"}}
          >
            الرحلات القادمة
          </button>

          <button
            className={`Previous-fight px-4 py-2 transition ${
              activeTab === "previous"
                ? "bg-blue-900 text-white"
                : "bg-gray-300 text-gray-700"
            } `}
            style={{fontFamily:"Cairo"}}
            onClick={() => setActiveTab("previous")}
          >
            الرحلات السابقة
          </button>
        </div>
        <div>
          <div className="border-b p-1 flex justify-between items-center">
            <div className="flex flex-col items-start">
              <p className="style-font text-black-50 text-sm">Wed 13 Dec, 2023</p>
              <p className="font-bold">NYC</p>
              <p className="style-font text-[#0084FF] text-sm font-bold">22:30</p>
            </div>
            <img src={fightgo} alt="Flight Go" className="w-24 h-24" />
            <div className="flex flex-col items-end">
              <p className="style-font font-bold">CHS</p>
              <p className="style-font text-[#0084FF] text-sm font-bold">23:45</p>
            </div>
          </div>
          <img src={line} className="w-full my-2 opacity-40" alt="divider" />
          <div className="style-font mt-2  flex justify-between items-center">
            <div className="flex flex-col items-start">
              <p className="style-font text-black-50 text-sm">Fri 15 Dec, 2023</p>
              <p className="font-bold">CHS</p>
              <p className="style-font text-[#0084FF] text-sm font-bold">08:30</p>
            </div>
            <img src={fightback} alt="Flight Back" className="w-24 h-24" />
            <div className="flex flex-col items-end">
              <p className="style-font font-bold">NYC</p>
              <p className="style-font text-[#0084FF] text-sm font-bold">11:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;