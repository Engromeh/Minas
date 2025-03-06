import React from "react";
import cardlogo1 from "../../assets/Cardlogo1.svg";
import cardlogo2 from "../../assets/cardlogo2.svg";
const Card = () => {
  const flights = [
    {
      id: 1,
      airline: "United Airlines",
      logo: cardlogo1,
      from: "NYC",
      to: "CHS",
      departure: "22:30",
      arrival: "23:45",
      duration: "1H - 15M",
      price: "$300",
    },
    {
      id: 2,
      airline: "Delta Airlines",
      logo: cardlogo2,
      from: "NYC",
      to: "CHS",
      departure: "22:30",
      arrival: "23:45",
      duration: "1H - 15M",
      price: "$300",
    },
  ];

  const repeatedFlights = Array(4).fill(flights).flat();

  return (
    <>
    <h2 className="offer-titel text-xl font-bold mb-4 mt-2 text-left" style={{fontFamily:"Cairo"}}>العروض </h2>
    <div className="offer-card grid sm:grid-cols-1 md:grid-cols-2 gap-1">
      {repeatedFlights.map((flight, index) =>
        index % 2 === 0 ? (
          <div
            key={index}
            className="bg-white p-1 rounded-2xl shadow-md border border-gray-200"
          >
            <div className="flex flex-col divide-y divide-dashed divide-gray-300">
              <div className="inbox-offer  flex items-center justify-between p-4">
                <img
                  src={flight.logo}
                  alt={flight.airline}
                  className="w-10 h-10"
                />

                <div className="style-font text-center">
                  <p className="text-from text-lg font-semibold">{flight.from}</p>
                  <p className="text-blue-500 text-sm font-medium">
                    {flight.departure}
                  </p>
                </div>

                <div className="box-center flex flex-col items-center text-gray-500" style={{fontFamily:"Cairo"}}>
                  <p className="airinel-text  text-sm font-semibold">{flight.airline}</p>
                  <p className="duration-text text-[#003E78] text-xs font-medium">
                    {flight.duration}
                  </p>
                  <p className="text-gray-400 text-xs">Non-Stop</p>
                </div>

                <div className="style-font text-center">
                  <p className="text-too text-lg font-semibold">{flight.to}</p>
                  <p className="text-blue-500 text-sm font-medium">
                    {flight.arrival}
                  </p>
                </div>

                <div className="style-font text-right">
                  <p className="text-lg font-bold">{flight.price}</p>
                  <button className="bt-offer   bg-[#003E78] text-white text-sm px-4 py-1 rounded-lg mt-1">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4">
                <img
                  src={repeatedFlights[index + 1]?.logo}
                  alt={repeatedFlights[index + 1]?.airline}
                  className="w-10 h-10"
                />

                <div className="style-font text-center">
                  <p className="text-from text-lg font-semibold">
                    {repeatedFlights[index + 1]?.from}
                  </p>
                  <p className="text-blue-500 text-sm font-medium">
                    {repeatedFlights[index + 1]?.departure}
                  </p>
                </div>

                <div className="style-font flex flex-col items-center text-gray-500">
                  <p className="airinel-text text-sm font-semibold">
                    {repeatedFlights[index + 1]?.airline}
                  </p>
                  <p className="duration-text text-[#003E78] text-xs font-medium">
                    {repeatedFlights[index + 1]?.duration}
                  </p>
                  <p className="text-gray-400 text-xs">Non-Stop</p>
                </div>

                <div className="style-font text-center">
                  <p className="text-too text-lg font-semibold">
                    {repeatedFlights[index + 1]?.to}
                  </p>
                  <p className="text-blue-500 text-sm font-medium">
                    {repeatedFlights[index + 1]?.arrival}
                  </p>
                </div>

                <div className="style-font text-right">
                  <p className="text-lg font-bold">
                    {repeatedFlights[index + 1]?.price}
                  </p>
                  <button className=" bt-offer bg-[#003E78] text-white text-sm px-4 py-1 rounded-lg mt-1">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
    </>
  );
};

export default Card;
