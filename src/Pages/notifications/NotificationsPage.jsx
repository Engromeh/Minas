import notification from "../../assets/notififcationpagelogo.svg";

export default function NotificationsPage() {
  const notifications = [
    {
      title: "موضوع",
      date: "20/2/2025",
      time: "10:00",
      image: notification,
      content:
        "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من",
    },
    {
      title: "موضوع",
      date: "20/2/2025",
      time: "10:00",
      image: notification,
      content:
        "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من",
    },
    {
      title: "موضوع",
      date: "20/2/2025",
      time: "10:00",
      image: notification,
      content:
        "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من",
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h2 className="tital-transport text-2xl font-bold mb-4 text-left">
        الإشعارات
      </h2>
      <div className="notification-card bg-white p-4 rounded-2xl shadow-md border border-gray-200">
        {notifications.map((notif, index) => (
          <div
            key={index}
            className="pb-4 mb-4 border-b border-gray-300 last:border-b-0"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-2 md:order-2">
                <h3 className="text-lg font-bold text-[#212D5D]">
                  {notif.title}
                </h3>

                <div className="bg-[#D9D9D9] p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <img src={notif.image} alt="notif" className="w-6 h-6" />
                </div>
              </div>

              <p
                className="text-sm text-[#212D5D] flex gap-x-2 "
                style={{ direction: "rtl" }}
              >
                <strong>الوقت:</strong> {notif.time}
                <strong className="mx-2"></strong>
                <strong>التاريخ:</strong> {notif.date}
              </p>
            </div>

            <p className="text-[#212D5D] text-sm text-left md:text-right w-full mt-2">
              {notif.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
