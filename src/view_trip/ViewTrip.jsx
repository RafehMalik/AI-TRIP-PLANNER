import React, { useEffect } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import Information from "@/Components/Information";
import Hotels from "@/Components/Hotels";
import Itenary from "@/Components/Itenary";
import { db } from "../services/FirebaseConfig";

function ViewTrip() {
  const { id } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    id && getdata();
  }, [id]);

  const getdata = async () => {
    const docRef = doc(db, "AI-TRIP", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* information section  */}
      <Information trip={trip} />

      {/* recomended hotels */}
      <Hotels trip={trip} />

      {/* itinerary */}
      <Itenary />

      {/* footeerr */}
    </div>
  );
}

export default ViewTrip;
