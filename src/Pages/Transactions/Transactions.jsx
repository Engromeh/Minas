import Transactions from "../../assets/Transactions.svg";

export default function Transaction() {
  const Transactionss = [
    {
      title: "عملية ايداع",
      date: "20/2/2025",
      time: "10:00",
      image: Transactions,
      amount: "500LE",
      payment: " فودافون كاش",
    },
    {
      title: "عملية ايداع",
      date: "20/2/2025",
      time: "10:00",
      image: Transactions,
      amount: "700LE",
      payment: " فودافون كاش",
    },
    {
      title: "عملية ايداع",
      date: "20/2/2025",
      time: "10:00",
      image: Transactions,
      amount: "900LE",
      payment: " فودافون كاش",
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h2 className="tital-transport text-2xl font-bold mb-4 text-left">
        المعاملات
      </h2>
      <div className="notification-card bg-white p-4 rounded-2xl shadow-md border border-gray-200">
        {Transactionss.map((tran, index) => (
          <div
            key={index}
            className="pb-4 mb-4 border-b border-gray-300 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 md:order-2">
                <h3 className="text-lg font-bold text-[#212D5D]">
                  {tran.title}
                </h3>

                <div className=" p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <img src={tran.image} alt="tran" className="w-6 h-6" />
                </div>
              </div>

              <p
                className="text-sm text-[#212D5D] flex gap-x-2 "
                style={{ direction: "rtl" }}
              >
                <strong>الوقت:</strong> {tran.time}
                <strong className="mx-2"></strong>
                <strong>التاريخ:</strong> {tran.date}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
              <div className="flex items-center gap-2 md:order-2">
                <h3
                  className="text-lg font-bold text-[#212D5D]"
                  style={{ direction: "rtl" }}
                >
                  <strong>الكمية :</strong>
                  {tran.amount}{" "}
                </h3>
              </div>

              <h3
                className="text-lg font-bold text-[#212D5D] flex gap-x-2  "
                style={{ direction: "rtl" }}
              >
                <strong>طريقة الدفع :</strong> {tran.payment}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
