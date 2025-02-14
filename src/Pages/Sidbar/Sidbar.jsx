import React from "react";
import logosidbar from "../../assets/sidbarLogo.svg";
import icone1 from "../../assets/Dashbordicon.svg";
import icone2 from "../../assets/Dashbordicon2.svg";
import icone3 from "../../assets/Dashbordicon3.svg";
import icone4 from "../../assets/Dashbordicon4.svg";
import icone5 from "../../assets/Dashbordicon5.svg";
import icone6 from "../../assets/Dashbordicon6.svg";
import icone7 from "../../assets/Dashbordicon7.svg";
import icone8 from "../../assets/Dashbordicon8.svg";
import { Link } from "react-router-dom";

const Sidbar = () => {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 flex flex-col"
        aria-label="Sidebar"
        style={{ background: "#212D5D" }}
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto flex flex-col"
          style={{ background: "#212D5D" }}
        >
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src={logosidbar}
              className="me-3 sm:h-7"
              alt="Flowbite Logo"
              style={{ width: "35%", height: "100%" }}
            />
          </a>

          <ul className="space-y-2 font-medium flex-grow">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
              >
                <img src={icone1} className="w-5 h-5" alt="Icon" />
                <Link className="ms-3 text-white" to={""}>
                  لوحة التحكم
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
              >
                <img src={icone2} className="w-5 h-5" alt="Icon" />
                <span className="ms-3 whitespace-nowrap text-white">
                  الحجوزات{" "}
                </span>
              </a>
            </li>
            <li>
              <Link
to={"/Deposit"}                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
              >
                <img src={icone3} className="w-5 h-5" alt="Icon" />
                <span className="ms-3 whitespace-nowrap text-white">
                  العضويات
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/card"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
              >
                <img src={icone4} className="w-5 h-5" alt="Icon" />
                <span className="ms-3 whitespace-nowrap text-white">
                  العروض
                </span>
              </Link>
            </li>
            <li>
              <Link
               to={"/Problem"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
              >
                <img src={icone5} className="w-5 h-5" alt="Icon" />
                <span className="ms-3 whitespace-nowrap text-white">
                  مقترح او مشكلة
                </span>
              </Link>
            </li>
          </ul>

          <div className="mt-auto space-y-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
            >
              <img src={icone6} className="w-5 h-5" alt="Icon" />
              <span className="ms-3 whitespace-nowrap text-white">
                عن ميناس
              </span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
            >
              <img src={icone7} className="w-5 h-5" alt="Icon" />
              <span className="ms-3 whitespace-nowrap text-white">الدعم</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#33BAE0] dark:hover:bg-gray-700 group"
            >
              <img src={icone8} className="w-5 h-5" alt="Icon" />
              <span className="ms-3 whitespace-nowrap text-white">
                تسجيل الخروج
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidbar;
