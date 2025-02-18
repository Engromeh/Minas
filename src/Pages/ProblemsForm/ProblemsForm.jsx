import React from "react";

const ProblemsForm = () => {
  return (
    <div>
      <h2
        className="text-xl font-bold text-center mt-4"
        style={{ fontSize: "40px", fontWeight: "bold" }}
      >
        اكتب مقترحك او مشكلتك
      </h2>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
        <div className="flex flex-col gap-4 mt-6">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right bg-white-100">
                  الايميل
                </label>
                <input
                  type="text"
                  placeholder="الايميل الخاص لك"
                  className="bg-gray-50 text-right text-gray-900 text-sm rounded-lg focus:ring-0  block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
                  الاسم
                </label>
                <input
                  type="text"
                  placeholder="اسمك بالكامل"
                  className="bg-gray-50 text-right text-gray-900 text-sm rounded-lg focus:ring-0  block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
                عنوان الرسالة
              </label>
              <input
                type="text"
                placeholder="عنوان الرسالة"
                className="bg-gray-50 text-right text-gray-900 text-sm rounded-lg focus:ring-0  block w-full p-2.5 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
              الرسالة
            </label>
            <textarea
              rows="4"
              placeholder="الرسالة"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-0  dark:bg-gray-700 dark:text-white text-right"
            />
          </div>

          <div className="flex">
            <button className="flex-1 bg-[#212D5D] text-white p-2 rounded-lg">
              إرسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsForm;
