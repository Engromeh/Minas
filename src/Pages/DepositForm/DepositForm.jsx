import React, { useState } from "react";
import vodafoneCashLogo from "../../assets/vodofane.svg";
import etisalatLogo from "../../assets/Etasilat.svg";
import weLogo from "../../assets/we.svg";
import bankLogo from "../../assets/bank.svg";
import instapayLogo from "../../assets/انستباي-removebg-preview 1.svg";
import OrangeLogo from "../../assets/Orange.svg";
import logo from "../../assets/logo in form debosite.svg";
import logocopy from "../../assets/coby.svg";
import moneyIcon from "../../assets/amounticones.svg";

const DepositForm = () => {
  const [depositMethod, setDepositMethod] = useState("vodafone");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const methods = {
    vodafone: {
      label: "فودافون كاش",
      number: "01557899776",
      logo: vodafoneCashLogo,
    },
    etisalat: {
      label: "اتصالات كاش",
      number: "01123456789",
      logo: etisalatLogo,
    },
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-6">
        إيداع الأموال
      </h2>
      <div className="Deposit-Form max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <span className="text-[#003E78] text-lg md:text-xl font-bold">
            {methods[depositMethod].number}
          </span>
          <div className="flex items-center gap-2 md:mr-72">
            <span className="text-[#003E78] text-lg font-bold">انسخ الرقم</span>
            <img src={logocopy} alt="نسخ" className="h-6 cursor-pointer" />
          </div>
          <img src={logo} alt="Logo" className="h-16 md:h-20" />
        </div>

        <div className="space-y-4">
          <div>
            <label className="font-semibold text-right block mb-1">
              طريقة الإيداع
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg">
              <select
                className="bg-transparent flex-1 text-right appearance-none pr-8 outline-none border-none cursor-pointer"
                onChange={(e) => setDepositMethod(e.target.value)}
                value={depositMethod}
              >
                <option value="vodafone">فودافون كاش</option>
                <option value="etisalat">اتصالات كاش</option>
              </select>
              <img
                src={methods[depositMethod].logo}
                alt="Method Logo"
                className="h-6 w-6 ml-2 order-last"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-right block mb-1">الاسم</label>
            <input
              type="text"
              placeholder="اسمك بالكامل"
              className="p-2 rounded-lg bg-gray-100 w-full text-right outline-none border-none"
            />
          </div>

          <div>
            <label className="font-semibold text-right block mb-1">
              الكمية
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg">
              <input
                type="number"
                placeholder="المبلغ المراد إيداعه"
                className="bg-transparent flex-1 text-right outline-none border-none pl-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <img src={moneyIcon} alt="Money" className="h-6 w-6 ml-2" />
            </div>
          </div>

          <div>
            <label className="font-semibold text-right block mb-1">
              أرفق الصورة من الدفع
            </label>
            <label
              className="p-4 rounded-lg bg-gray-100 text-center text-gray-500 cursor-pointer flex flex-col items-center justify-center"
              htmlFor="file-upload"
            >
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="h-20 mt-2 rounded-lg object-cover"
                />
              ) : (
                <span>اضغط هنا لإرفاق الصورة</span>
              )}
            </label>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-gray-300 p-2 rounded-lg">إلغاء</button>
            <button className="flex-1 bg-[#003E78] text-white p-2 rounded-lg">
              إرسال الطلب
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center mt-6">
          <img src={OrangeLogo} alt="Orange" className="h-12 md:h-14" />
          <img src={weLogo} alt="WE" className="h-12 md:h-14" />
          <img src={instapayLogo} alt="InstaPay" className="h-12 md:h-14" />
          <img src={vodafoneCashLogo} alt="Vodafone" className="h-12 md:h-14" />
          <img src={bankLogo} alt="Bank" className="h-12 md:h-14" />
          <img src={etisalatLogo} alt="Etisalat" className="h-12 md:h-14" />
        </div>
      </div>
    </>
  );
};

export default DepositForm;
