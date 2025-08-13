import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

function Home() {
  return (
    <div className="flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:{" "}
        </span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-gray-500 text-center text-xl mt-4">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <div className="text-center mt-9">
        <Link to="/create-trip">
          <Button variant="default">Get Started,Its Free</Button>
        </Link>
      </div>
      <img src="https://aitrip.tubeguruji.com/landing.png" alt="" />
    </div>
  );
}

export default Home;
