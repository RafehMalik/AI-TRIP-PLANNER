import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../services/FirebaseConfig";

import { collection, query, where, getDocs } from "firebase/firestore";
import HistoryTripCard from "./cards/HistoryTripCard";

function Mytrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getUserTrips();
  }, []);

  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    console.log("Current user:", user.email);
    setUserTrips([]);
    const q = query(
      collection(db, "AI-TRIP"),
      where("useremail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prevval) => [...prevval, doc.data()]);
    });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5 ">
        {userTrips?.map((trip, index) => (
          <HistoryTripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default Mytrips;
