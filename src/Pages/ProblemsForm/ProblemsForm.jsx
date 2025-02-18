import React from "react";

const ProblemsForm = () => {
  return (
    <div>
      <h2
        className="titel-problem  font-bold text-center mt-4"
      >
        اكتب مقترحك او مشكلتك
      </h2>
      <div className="Problems-Form max-w-2xl mx-auto p-6 bg-white rounded-lg">
        <div className="flex flex-col gap-4 mt-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            <div className="flex flex-col w-full">
              <div className="mb-5">
                <label className="label-form block mb-2 text-sm font-medium dark:text-white text-right">
                  الايميل
                </label>
                <input
                  type="email"
                  placeholder="الايميل الخاص لك"
                  className="input-problem text-right text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-800 dark:text-white  "
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="mb-5">
                <label className="label-form block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
                  الاسم
                </label>
                <input
                  type="text"
                  placeholder="اسمك بالكامل"
                  className="input-problem  text-right text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="mb-5">
              <label className="label-form block mb-2 text-sm font-medium  text-right">
                عنوان الرسالة
              </label>
              <input
                type="text"
                placeholder="عنوان الرسالة"
                className="input-problem text-right  text-sm rounded-lg  w-full p-2.5"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="label-form block mb-2 text-sm font-medium dark:text-white text-right">
              الرسالة
            </label>
            <textarea
              rows="4"
              placeholder="الرسالة"
              className="input-problem block p-2.5 w-full text-sm bg-white rounded-lg  text-right"
            />
          </div>

          <div className="flex">
            <button className="flex-1 bg-[#212D5D] text-white p-2 rounded-lg hover:bg-[#1A254D] transition">
              إرسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsForm;
