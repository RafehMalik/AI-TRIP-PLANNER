import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/Components/ui/button.jsx";
import { toast } from "sonner";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/options.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";

function TripForm() {
  const [formData, setformData] = useState({});
  const [OpenDialoge, setOpenDialog] = useState(false);

  const handleSubmision = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        handleGenrateTrip();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      setOpenDialog(false);
      getUserProfile(codeResp);
    },
    onError: (error) => console.log(error),
  });

  const handleGenrateTrip = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      console.log("no user");
      setOpenDialog(true);
      return;
    }
    if (
      formData?.noOfDays > 5 ||
      !formData.traveler ||
      !formData.budget ||
      !formData.dest
    ) {
      toast("Please Fill All The Fields!");
      return;
    }
    const Final_Prompt = AI_PROMPT.replace("{location}", formData?.dest)
      .replace("{noOfDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{noOfDays}", formData?.noOfDays);

    console.log(Final_Prompt);
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 px-5 mt-10">
      <h1 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h1>
      <p className="text-gray-500 mt-3 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="my-3 font-medium text-xl">
            What is destination of choice?
          </h2>
          <Input
            type="text"
            placeholder={"Dubai."}
            onChange={(e) => handleSubmision("dest", e.target.value)}
          />
        </div>

        <div>
          <h2 className="my-3 font-medium text-xl">
            How many days are you planning your trip?
          </h2>
          <Input
            type="number"
            placeholder={"Ex.3"}
            onChange={(e) => handleSubmision("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="my-3 font-medium text-xl">What is Your Budget?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SelectBudgetOptions.map((item) => (
              <div
                onClick={() => handleSubmision("budget", item.title)}
                key={item.id}
                className={`border p-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition ${
                  formData?.budget === item.title
                    ? "shadow-lg bg-amber-500"
                    : ""
                }`}
              >
                <div className="text-3xl">{item.icon}</div>
                <h2 className="font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="my-3 font-medium text-xl">
            Who do you plan on traveling with on your next adventure?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SelectTravelesList.map((item) => (
              <div
                onClick={() => handleSubmision("traveler", item.people)}
                key={item.id}
                className={`border p-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition ${
                  formData?.traveler === item.people
                    ? "shadow-lg bg-amber-500"
                    : ""
                }`}
              >
                <div className="text-3xl">{item.icon}</div>
                <h2 className="font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 mb-10 justify-end flex">
            <Button variant="default" onClick={handleGenrateTrip}>
              Generate Trip
            </Button>
          </div>

          <Dialog open={OpenDialoge}>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <img src="/logo.svg" alt="" />
                  <h2 className="text-lg font-bold mt-7">
                    Sign In With Google
                  </h2>
                  <p>Sign In To The App With Google Authentication Securely</p>
                  <Button
                    onClick={login}
                    variant="default"
                    className="w-full mt-7"
                  >
                    <FcGoogle className="h-7 w-7" />
                    Sign In With Google
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
