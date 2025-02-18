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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1024);

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
      className={`fixed top-0 left-0 bg-[#212D5D] p-6 transition-all flex flex-col justify-between z-50 ${
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
            <img src={logosidbar} alt="User" className=" w-full object-cover" />
          </div>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            <li className="hover:bg-[#33BAE0] rounded-md transition-all">
              <Link
                to="/Dashbord"
                className=" icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone1} alt="لوحة التحكم" className=" w-5 h-5" />
                {isOpen && <span>لوحة التحكم</span>}
              </Link>
            </li>
            <li className="hover:bg-[#33BAE0] rounded-md transition-all">
              <Link
                to="/Passport"
                className=" icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone2} alt="الحجوزات" className=" w-5 h-5" />
                {isOpen && <span>الحجوزات</span>}
              </Link>
            </li>
            <li className="hover:bg-[#33BAE0] rounded-md transition-all">
              <Link
                to="/Deposit"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone3} alt="العضويات" className=" w-5 h-5" />
                {isOpen && <span className="flex-1">العضويات</span>}
              </Link>
            </li>
            <li className="hover:bg-[#33BAE0] rounded-md transition-all">
              <Link
                to="/card"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone4} alt="العروض" className=" w-5 h-5" />
                {isOpen && <span className="flex-1">العروض</span>}
              </Link>
            </li>
            <li className="hover:bg-[#33BAE0] rounded-md transition-all">
              <Link
                to="/Problem"
                className="icone-sidbar flex items-center gap-3 p-3 text-white"
              >
                <img src={icone5} alt="مقترح او مشكلة" className=" w-5 h-5" />
                {isOpen && <span className="flex-1">مقترح او مشكلة</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <ul>
          <li className="hover:bg-[#33BAE0] rounded-md transition-all">
            <Link
              to="/login"
              className="icone-sidbar flex gap-3 p-3 text-white"
            >
              <img
                src={icone6}
                alt="عن ميناس"
                className="icone-sidbar w-5 h-5"
              />
              {isOpen && <span>عن ميناس</span>}
            </Link>
          </li>
          <li className="hover:bg-[#33BAE0] rounded-md transition-all">
            <Link
              to="/login"
              className="icone-sidbar flex gap-3 p-3 text-white"
            >
              <img src={icone7} alt="الدعم" className="icone-sidbar  w-5 h-5" />
              {isOpen && <span className="flex-1">الدعم</span>}
            </Link>
          </li>
          <li className="hover:bg-[#33BAE0] rounded-md transition-all">
            <Link
              to="/login"
              className="icone-sidbar flex gap-3 p-3 text-white"
            >
              <img
                src={icone8}
                alt="تسجيل الخروج"
                className="icone-sidbar w-5 h-5"
              />
              {isOpen && <span className="flex-1">تسجيل الخروج</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
