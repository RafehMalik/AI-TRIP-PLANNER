import React from "react";
import { Link } from "react-router-dom";
import PlaceImage from "../../services/PlaceImage.jsx";

function HistoryTripCard({ trip }) {
  const query = {
    query: trip?.userSelection?.dest,
    styling: "rounded-lg h-50 w-50 ",
  };
  return (
    <Link to={"/viewtrip/" + trip?.id}>
      <div className="cursor-pointer hover:scale-105 transition-all">
        <PlaceImage query={query} />
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.dest || "No destination"}
          </h2>
          <h2 className="text-gray-500  text-sm">
            {trip?.userSelection?.noOfDays} Day Trip With{" "}
            {trip?.userSelection?.budget || "No budget info"} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default HistoryTripCard;
