import React from "react";
import { IoSend } from "react-icons/io5";
import { Button } from "./ui/button";

function Information({ trip }) {
  return (
    <div className="">
      <img
        src="/image.png"
        alt="image"
        className="w-full object-cover rounded-xl h-[340px]"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold mt-4 text-2xl">
            {trip?.userSelection?.dest}
          </h2>
          <div className="flex gap-5  ">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md">
              📅 {trip?.userSelection?.noOfDays} day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md">
              ✈️No Of Travelers:{trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <IoSend />
        </Button>
      </div>
    </div>
  );
}

export default Information;
