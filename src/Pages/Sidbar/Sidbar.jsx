import { useState, useEffect } from "react";
import logosidbar from "../../assets/sidbarLogo.svg";
import icone1 from "../../assets/Dashbordicon.svg";
import icone2 from "../../assets/Dashbordicon2.svg";
import icone3 from "../../assets/Dashbordicon3.svg";
import icone4 from "../../assets/Dashbordicon4.svg";
import icone5 from "../../assets/Dashbordicon5.svg";
import icone6 from "../../assets/Dashbordicon6.svg";
import icone7 from "../../assets/Dashbordicon7.svg";
import icone8 from "../../assets/Dashbordicon8.svg";
import { CaretLeft } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1024);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`fixed top-0 left-0 bg-[#212D5D]  transition-all flex flex-col justify-between z-50 ${
        isOpen ? "w-64 h-full" : "w-20 h-screen"
      } ${isOpen && window.innerWidth <= 1024 ? "w-24 h-full" : ""}`}
    >
      <button
        className="absolute -right-3 top-4 w-7 h-7 flex items-center justify-center bg-white rounded-md cursor-pointer hover:text-black"
        onClick={toggleSidebar}
      >
        <CaretLeft
          className={`transition-transform ${!isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div>
        <div className="icone-sidbar flex items-center gap-4">
          <div className="  w-16 h-16 rounded-full overflow-hidden">
            <img
              src={logosidbar}
              alt="User"
              className=" w-full object-cover mt-2"
            />
          </div>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Dashbord" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Dashbord"
                className=" icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone1} alt="لوحة التحكم" className=" w-5 h-5" />
                {isOpen && <span>لوحة التحكم</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Passport" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Passport"
                className=" icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone2} alt="الحجوزات" className=" w-5 h-5" />
                {isOpen && <span>الحجوزات</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Member" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Member"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone3} alt="العضويات" className=" w-5 h-5" />
                {isOpen && <span>العضويات</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Deposit" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Deposit"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone4} alt="ايداع الاموال" className=" w-5 h-5" />
                {isOpen && <span>ايداع الاموال</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Card" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/card"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone4} alt="العروض" className=" w-5 h-5" />
                {isOpen && <span>العروض</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Problem" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Problem"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone5} alt="مقترح او مشكلة" className=" w-5 h-5" />
                {isOpen && <span>مقترح او مشكلة</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <ul className="mb-8">
          <li
            className={`hover:bg-[#33BAE0] rounded-md transition-all ${
              location.pathname === "/login" ? "bg-[#33BAE0]" : ""
            }`}
          >
            <Link
              to="/login"
              className=" icone-sidbar flex gap-3 p-3 text-white"
            >
              <img src={icone6} alt="عن ميناس" className=" w-5 h-5" />
              {isOpen && <span>عن ميناس</span>}
            </Link>
          </li>
          <li
            className={`hover:bg-[#33BAE0] rounded-md transition-all ${
              location.pathname === "/login" ? "bg-[#33BAE0]" : ""
            }`}
          >
            <Link
              to="/login"
              className=" icone-sidbar flex gap-3 p-3 text-white"
            >
              <img src={icone7} alt="الدعم" className="  w-5 h-5" />
              {isOpen && <span>الدعم</span>}
            </Link>
          </li>
          <li
            className={`hover:bg-[#33BAE0] rounded-md transition-all ${
              location.pathname === "/login" ? "bg-[#33BAE0]" : ""
            }`}
          >
            <Link
              to="/login"
              className=" icone-sidbar flex gap-3 p-3 text-white"
            >
              <img src={icone8} alt="تسجيل الخروج" className=" w-5 h-5" />
              {isOpen && <span>تسجيل الخروج</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
