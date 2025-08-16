import React from "react";
import PlaceImage from "../services/PlaceImage.jsx";

function Itenary({ trip }) {
  const itinerary = trip?.tripData?.itinerary || {};

  return (
    <div>
      <h2 className="font-bold text-2xl mt-5">Places To Visit</h2>
      <div>
        {Object.values(itinerary).map((day, index) => (
          <div
            key={index}
            className="mt-5 mb-6 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <h3 className="font-bold text-lg mb-2">Day {index + 1}</h3>
            <br />

            {day.map((place, placeIndex) => {
              const query = {
                query: place.placeName,
                styling: "w-25 h-25 object-cover rounded-md",
              };

              return (
                <div
                  key={placeIndex}
                  className="mb-4 flex border rounded-xl gap-5 shadow-md p-3 hover:scale-104 transition-all cursor-pointer"
                >
                  {/* <img
                    src={"/image.png"}
                    alt={place.placeName}
                    className="w-25 h-25 object-cover rounded-md"
                  /> */}
                  <PlaceImage query={query} />
                  <div>
                    <h4 className="font-semibold">{place.placeName}</h4>
                    <p className="text-sm text-gray-600">
                      {place.placeDetails}
                    </p>
                    <p className="text-xs text-gray-500">
                      ⏱️ {place.bestTimeToVisit}
                    </p>
                    <p className="text-xs text-gray-500">
                      🎫 {place.ticketPricing}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itenary;
