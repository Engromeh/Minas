import React from "react";
import memberlogotop from "../../assets/memberlogotop.svg";
import logo from "../../assets/Goldicone.svg";
import checkIcon from "../../assets/checkicone.svg";
import memberlogobotom from "../../assets/member logobottom.svg";
import sidebarImage1 from "../../assets/backgroundmember.svg";
import sidebarImage2 from "../../assets/meberbackground2.svg";
import sidebarImage3 from "../../assets/meberbackground3.svg";
import circle from "../../assets/circle member.svg";
import checkIcon2 from "../../assets/checkicon2.svg";
import checkIcon3 from "../../assets/checkicon3.svg";
import circle2 from "../../assets/Ellipse white.svg";
import logowhite from '../../assets/logowhite.svg';
import whitememberlogo from '../../assets/whitememberlogo.svg'
const cardsData = [
  {
    title: "العضوية الذهبية",
    memberlogotop:memberlogotop,
    bgColor: "#F3B858",
    textColor: "#03003E",
    sidebarImage: sidebarImage1,
    circleIcon: checkIcon,
    checkIcon: circle ,
    logo:logo ,

    features: [
      "دعم VIP",
      "الوصول الكامل لكل الميزات",
      "تحديثات حصرية",
      "استشارات مجانية",
      "إمكانية ترقية الحساب",
    ],
  },
  {
    title: "العضوية الفضية",
    memberlogotop:memberlogotop,
    bgColor: "#A4A4A4",
    textColor: "#000",
    sidebarImage: sidebarImage2,
    circleIcon: checkIcon2,
    checkIcon: circle ,
    logo:logo ,

    features: [
      "دعم على مدار الساعة",
      "عروض وخصومات",
      "إمكانية تجربة الميزات الجديدة",
      "تقارير وتحليلات خاصة",
      "محتوى مخصص للأعضاء",
    ],
  },
  {
    title: "العضوية البلاتينية",
    memberlogotop:whitememberlogo,
    bgColor: "#212D5E",
    textColor: "#FFF",
    sidebarImage: sidebarImage3,
   logo:logowhite ,
    circleIcon: checkIcon3,
    checkIcon: circle2,
    features: [
      "استشارات فردية",
      "تحديثات حصرية وسريعة",
      "تدريبات متقدمة",
      "إمكانية تخصيص الواجهة",
      "إمكانية تخصيص الواجهة",
    
    ],
  },
];


const Member = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="member-card2 relative p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          style={{ backgroundColor: card.bgColor ,border:"none" }}
        >
          <img
            src={card.sidebarImage}
            alt="sidebar"
            className="absolute top-0 right-0  object-cover "
          />
          <img src={card.logo} alt="photo" className="mb-2 relative z-10" />

          <div className="flex relative z-10">
            <h5
              className="mb-2 text-2xl font-bold tracking-tight"
              style={{ color: card.textColor }}
            >
              {card.title}
            </h5>
            <img src={card.memberlogotop} alt="photo" />
          </div>

          {card.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mb-2 text-right relative z-10"
            >
              <div className="relative w-6 h-6">
  <img src={card.checkIcon} alt="circle" className="w-full h-full" />
  <img
    src={ card.circleIcon}
    alt="check"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3"
  />
</div>

              <span
                className="font-medium"
                style={{ fontSize: "15px", color: card.textColor }}
              >
                {feature}
              </span>
            </div>
          ))}

          <div className="flex gap-2 relative ">
            <a
              href="#"
              className="inline-flex items-center px-3 text-sm font-medium text-center rounded-lg border"
              style={{ color: card.textColor, borderColor: card.textColor }}
            >
              بادر الآن بالاشتراك
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 text-sm font-medium text-center rounded-lg border"
              style={{ color: card.textColor, borderColor: card.textColor }}
            >
              مشاهدة التفاصيل
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <img src={memberlogobotom} alt="photo"  />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;
