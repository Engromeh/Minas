import { useState, useEffect, useContext } from "react";
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
import { UserContext } from "../../UserContext";
import notificationsbar from "../../assets/notififcationsbar.svg";
import depositbar from "../../assets/deposite.svg";
import icone9 from "../../assets/mo3malet.svg";

const Sidebar = () => {
  const { user } = useContext(UserContext);

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
        <div className="icone-sidbar flex items-center gap-2">
          <div className="  w-12 h-12 rounded-full overflow-hidden">
            <img
              src={logosidbar}
              alt="User"
              className=" w-full object-cover mt-2"
            />
          </div>
        </div>

        <nav className="mt-3">
          <ul className="space-y-2">
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Userinfo" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link className="icone-sidbar flex items-center gap-4 ">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={user.image || logosidbar}
                    alt="User"
                    className="romeh-photo object-cover"
                  />
                </div>
                {isOpen && (
                  <span className="style-font text-white text-lg font-bold">
                    {user.name}
                  </span>
                )}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Dashbord" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Dashbord"
                className=" icone-sidbar flex items-center gap-3  pl-2 pb-2 text-white"
              >
                <img src={icone1} alt="لوحة التحكم" className=" w-5 h-5" />
                {isOpen && <span className="style-font">لوحة التحكم</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Passport" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Passport"
                className=" icone-sidbar flex items-center gap-3 pl-2 pb-2 text-white"
              >
                <img src={icone2} alt="الحجوزات" className=" w-5 h-5" />
                {isOpen && <span className="style-font">الحجوزات</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Member" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Member"
                className="icone-sidbar flex items-center gap-3 pl-2 pb-2 text-white"
              >
                <img src={icone3} alt="العضويات" className=" w-5 h-5" />
                {isOpen && <span className="style-font">العضويات</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Card" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/card"
                className="icone-sidbar flex items-center gap-3 pl-2 pb-2  text-white"
              >
                <img src={icone4} alt="العروض" className=" w-5 h-5" />
                {isOpen && <span className="style-font">العروض</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Deposit" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Deposit"
                className="icone-sidbar flex items-center gap-3 pl-2 pb-2 text-white"
              >
                <img
                  src={depositbar}
                  alt="ايداع الاموال"
                  className=" w-5 h-5"
                />
                {isOpen && <span className="style-font">ايداع الاموال</span>}
              </Link>
            </li>

            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Transactions" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Transactions"
                className="icone-sidbar flex items-center gap-3 pl-2 pb-2 text-white"
              >
                <img src={icone9} alt="مقترح او مشكلة" className=" w-5 h-5" />
                {isOpen && <span className="style-font">سجل المعاملات</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/notification" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/notification"
                className="icone-sidbar flex items-center gap-3 p-1 text-white"
              >
                <img
                  src={notificationsbar}
                  alt="الاشعارات"
                  className=" w-5 h-5"
                />
                {isOpen && <span className="style-font">الاشعارات</span>}
              </Link>
            </li>
            <li
              className={`hover:bg-[#33BAE0] rounded-md transition-all ${
                location.pathname === "/Problem" ? "bg-[#33BAE0]" : ""
              }`}
            >
              <Link
                to="/Problem"
                className="icone-sidbar flex items-center gap-2 pl-2 pb-2  text-white"
              >
                <img src={icone5} alt="مقترح او مشكلة" className=" w-5 h-5" />
                {isOpen && <span className="style-font">مقترح او مشكلة</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        <ul>
          <li
            className={`hover:bg-[#33BAE0] rounded-md transition-all ${
              location.pathname === "/login" ? "bg-[#33BAE0]" : ""
            }`}
          >
            <Link
              to="/login"
              className=" icone-sidbar flex gap-3 pl-2 pb-1 text-white"
            >
              <img src={icone6} alt="عن ميناس" className=" w-5 h-5" />
              {isOpen && <span className="style-font">عن ميناس</span>}
            </Link>
          </li>
          <li
            className={`hover:bg-[#33BAE0] rounded-md transition-all ${
              location.pathname === "/login" ? "bg-[#33BAE0]" : ""
            }`}
          >
            <Link
              to="/login"
              className=" icone-sidbar flex gap-3 pl-2 pb-1 text-white"
            >
              <img src={icone7} alt="الدعم" className="  w-5 h-5" />
              {isOpen && <span className="style-font">الدعم</span>}
            </Link>
          </li>
          <li
            className={`hover:bg-[#33BAE0] rounded-md transition-all ${
              location.pathname === "/login" ? "bg-[#33BAE0]" : ""
            }`}
          >
            <Link
              to="/login"
              className=" icone-sidbar flex gap-3 pl-2 pb-1  text-white"
            >
              <img src={icone8} alt="تسجيل الخروج" className=" w-5 h-5" />
              {isOpen && <span className="style-font">تسجيل الخروج</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
