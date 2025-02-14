import React from "react";
import membergold from "../../../assets/Gold.svg";
import logo from "../../../assets/Goldicone.svg";
import linee from "../../../assets/Line 7.svg";
import QR from "../../../assets/qrcode.svg";
import QR2 from "../../../assets/minas.svg";

const MemberSpecial = () => {
  const cardsData = [
    {
      title: "العضوية الاحترافية",
      bgColor: "white",
      textColor: "#03003E",
    },
  ];
  return (
    <div className="mt-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="relative p-3 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="flex">
            <div className="flex relative z-10 mt-2">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight"
                style={{ color: card.textColor }}
              >
                {card.title}
              </h5>

              <img
                src={membergold}
                alt="photo"
                style={{ width: "10%", height: "60%" }}
              />
            </div>
            <img src={logo} alt="photo" style={{ marginLeft: "36%" }} />
          </div>
          <div>
            <p
              className="text-left"
              style={{ fontSize: "23px", color: "#1A4F83", fontWeight: "bold" }}
            >
              ID 465646461614253132166
            </p>
          </div>
          <br />
          <div className="flex">
            <p
              className="text-left"
              style={{ fontSize: "17px", color: "#87A2BE", fontWeight: "bold" }}
            >
              اسم المشتري
            </p>
            <p
              className="ml-52"
              style={{ fontSize: "17px", color: "#87A2BE", fontWeight: "bold" }}
            >
              تاريخ الصلاحية
            </p>
          </div>

          <div className="flex">
            <p
              className="text-left"
              style={{ fontSize: "17px", color: "#1A4F83", fontWeight: "bold" }}
            >
              {" "}
              الرمح رقم واحد
            </p>
            <p
              className="ml-52"
              style={{ fontSize: "17px", color: "#1A4F83", fontWeight: "bold" }}
            >
              22/5/2025
            </p>
          </div>
          <br />
          <img src={linee} alt="rr" style={{ width: "100%" }} />

          <div className="flex mt-10">
            <img src={QR} alt="rr" className="mb-6" />
            <img src={QR2} alt="rr" className="ml-24 " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberSpecial;
