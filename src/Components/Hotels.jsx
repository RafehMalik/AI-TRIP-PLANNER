import React from "react";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text2xl mt-5">Hotel Recomendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trip?.tripData?.hotelOptions?.map((item, index) => (
          <div key={index} className="p-2">
            <img
              src="/image.png"
              alt={item.hotelName}
              className="rounded-xl w-full h-40 object-cover"
            />
            <h3 className="font-semibold mt-3">{item.hotelName}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <p className="text-sm font-bold mt-2">Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
