import React from "react";
import { Link } from "react-router-dom";

function HistoryTripCard({ trip }) {
  return (
    <Link to={"/viewtrip/" + trip?.id}>
      <div className="cursor-pointer hover:scale-105 transition-all">
        <img src="/image.png" alt="Trip" className=" rounded-sm object-cover" />
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
