import React from "react";
import flightgo from "../../assets/flightgo.svg";
import line from "../../assets/Line 4.svg";

const Passports = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="Passports-card bg-white shadow-lg rounded-lg  w-full mt-2">
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4">
              <div className="md:col-span-6 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="client-passport flex flex-col bg-[#6BDBFF2B] sm:col-span-3 p-4 sm:p-6 rounded-[20px]">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`style-font flex justify-between ${
                          i > 0 ? "pt-6 sm:pt-12" : ""
                        }`}
                      >
                        <p className="text-[#798494] text-sm sm:text-[15px]">
                          Client
                        </p>
                        <p className="text-[#798494] text-sm sm:text-[15px] font-semibold">
                          Company Currency
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="style-font flex flex-col col-span-1 p-4 sm:p-6 rounded-[20px]">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex justify-between ${
                          i > 0 ? "pt-6 sm:pt-12" : ""
                        }`}
                      >
                        <p className="text-[#798494] text-sm sm:text-[15px]">
                          Client
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="passpoer-lastcard md:col-span-6 bg-white p-2 rounded-lg">
                <div className="p-2 bg-[#6BDBFF2B] rounded-[20px] flex flex-wrap sm:flex-nowrap justify-between items-center">
                  <div className="style-font flex flex-col items-start">
                    <p className="text-black text-xs sm:text-sm">
                      Wed 13 Dec, 2023
                    </p>
                    <p className="font-bold text-lg">NYC</p>
                    <p className="text-[#0084FF] text-xs sm:text-sm font-bold">
                      22:30
                    </p>
                  </div>
                  <img
                    src={flightgo}
                    alt="Flight Go"
                    className="w-16 sm:w-24 h-16 sm:h-24 mr-6"
                  />
                  <div className="style-font flex flex-col items-end">
                    <p className="font-bold text-lg">CHS</p>
                    <p className="text-[#0084FF] text-xs sm:text-sm font-bold">
                      23:45
                    </p>
                  </div>
                </div>

                <div className="style-font mt-2 flex justify-between">
                  <p className="text-sm sm:text-[19px] text-[#798494]">Cost</p>
                  <p className="text-base sm:text-[20px] font-bold text-[#F3B858]">
                    $500
                  </p>
                </div>
                <div className="style-font mt-2 flex justify-between">
                  <p className="text-xs sm:text-[15px] text-[#798494]">
                    Branch
                  </p>
                  <p className="text-xs sm:text-[15px] text-[#798494]">
                    Date Ticket
                  </p>
                </div>
              </div>
            </div>

            {index < 2 && (
              <div className="flex justify-center py-2">
                <img
                  src={line}
                  alt="Separator Line"
                  className="w-full max-w-[90%]"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Passports;
