import React from 'react';
import flightgo from "../../assets/flightgo.svg";
import line from "../../assets/Line 4.svg";

const Passports = () => {
  return (
    <div className="Container">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full ">
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-12 gap-4 items-center p-4">
              <div className="col-span-8 p-4 rounded-lg">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col bg-[#6BDBFF2B] col-span-3 p-6 rounded-[35px]">
                    <div className="flex justify-between">
                      <p className="text-[#798494] text-[15px]">Client</p>
                      <p className="text-[#798494] text-[15px] font-semibold">Company Currency</p>
                    </div>
                    <div className="flex justify-between pt-12">
                      <p className="text-[#798494] text-[15px]">Client</p>
                      <p className="text-[#798494] font-semibold text-[15px]">Company Currency</p>
                    </div>
                    <div className="flex justify-between pt-12">
                      <p className="text-[#798494] text-[15px]">Client</p>
                      <p className="text-[#798494] font-semibold text-[15px]">Company Currency</p>
                    </div>
                  </div>

                  <div className="flex flex-col col-span-1 p-6 rounded-[35px]">
                    <div className="flex justify-between">
                      <p className="text-[#798494] text-[15px]">Client</p>
                    </div>
                    <div className="flex justify-between pt-12">
                      <p className="text-[#798494] text-[15px]">Client</p>
                    </div>
                    <div className="flex justify-between pt-12">
                      <p className="text-[#798494] text-[15px]">Client</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 bg-white p-4 rounded-lg">
                <div className="p-2 bg-[#6BDBFF2B] rounded-[20px] flex justify-between items-center">
                  <div className="flex flex-col items-start">
                    <p className="text-black text-sm">Wed 13 Dec, 2023</p>
                    <p className="font-bold">NYC</p>
                    <p className="text-[#0084FF] text-sm font-bold">22:30</p>
                  </div>
                  <img src={flightgo} alt="Flight Go" className="w-24 h-24 mr-6" />
                  <div className="flex flex-col items-end">
                    <p className="font-bold">CHS</p>
                    <p className="text-[#0084FF] text-sm font-bold">23:45</p>
                  </div>
                </div>

                <div className="mt-2 flex justify-between">
                  <p className="text-[19px] text-[#798494]">Cost</p>
                  <p className="text-[20px] font-bold text-[#F3B858]">$500</p>
                </div>
                <div className="mt-2 flex justify-between">
                  <p className="text-[15px] text-[#798494]">Branch</p>
                  <p className="text-[15px] text-[#798494]">Date Ticket</p>
                </div>
              </div>
            </div>

            {index < 2 && (
              <div className="flex justify-center py-2">
                <img src={line} alt="Separator Line" className="w-full max-w-[90%]" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Passports;
