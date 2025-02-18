import React from "react";
import Offers from "./Offers/Offers";
import Bookflight from "./Bookflight/Bookflight.JSX";
import MemberSpecial from "./MemberSpecial/MemberSpecial";

const Dashbord = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/5 w-full">
          <Bookflight />
        </div>
        <div className="md:w-2/5 w-full">
          <MemberSpecial />
        </div>
      </div>

      <div>
        <Offers />
      </div>
    </div>
  );
};

export default Dashbord;
