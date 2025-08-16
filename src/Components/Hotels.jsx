import React from "react";
import PlaceImage from "../services/PlaceImage.jsx";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-5">Hotel Recommendations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trip?.tripData?.hotelOptions?.map((item, index) => {
          // ✅ define query here (inside map)
          const query = {
            query: item.hotelName,
            styling: "rounded-xl w-full h-40 object-cover",
          };

          return (
            <div
              key={index}
              className="p-2 hover:scale-105 transition-all cursor-pointer"
            >
              <PlaceImage query={query} />

              <h3 className="font-semibold mt-3">{item.hotelName}</h3>
              <p className="text-xs text-gray-600 mt-2">
                📍{item.hotelAddress}
              </p>
              <p className="text-xs text-gray-600 mt-2">⭐{item.rating}</p>
              <p className="text-sm font-bold mt-2">💰Price: ${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hotels;
