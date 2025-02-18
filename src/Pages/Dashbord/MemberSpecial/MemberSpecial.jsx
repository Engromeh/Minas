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
    <div className="member-special mt-4" >
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="member-card relative p-3 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          style={{ backgroundColor: card.bgColor , border:"none" }}
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
                className="logo-member"
                style={{ width: "10%", height: "60%" }}
              />
            </div>
            <img src={logo} alt="photo" style={{ marginLeft: "36%" }} />
          </div>
          <div>
            <p
              className="num-id   text-left"
              style={{ fontSize: "23px", color: "#1A4F83", fontWeight: "bold" }}
            >
              ID 465646461614253132166
            </p>
          </div>
          <br />
          <div className="flex justify-between items-center gap-4 flex-wrap">
  <p className="text-[17px] text-[#87A2BE] font-bold">اسم المشتري</p>
  <p className="text-[17px] text-[#87A2BE] font-bold">تاريخ الصلاحية</p>
</div>

<div className="flex justify-between items-center gap-4 flex-wrap mt-2">
  <p className="text-[17px] text-[#1A4F83] font-bold">الرمح رقم واحد</p>
  <p className="text-[17px] text-[#1A4F83] font-bold">22/5/2025</p>
</div>


          <br />
          <img src={linee} alt="rr" style={{ width: "100%" }} />

          <div className=" flex mt-10">
            <img src={QR} alt="rr" className="qr-member mb-6" />
            <img src={QR2} alt="rr" className="image-member ml-14 " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberSpecial;
