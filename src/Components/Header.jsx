import React from "react";
import { Button } from "./ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [OpenDialoge, setOpenDialog] = useState(false);

  const handleLogin = () => {
    if (!user) {
      console.log("no user");
      setOpenDialog(true);
      return;
    }
  };

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
        window.location.reload();
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
  return (
    <div className="flex justify-between p-3 shadow-2xs">
      <img src="/logo.svg" alt="" className="h-8 w-35 my-2" /> <br />
      {user ? (
        <div className="gap-3 flex items-center">
          <Link to={"/mytrips"}>
            <Button variant="outline" className="rounded-full">
              My Trips
            </Button>
          </Link>
          <Popover>
            <PopoverTrigger>
              {" "}
              <img
                className="rounded-full h-9 w-9"
                src={user?.picture}
                alt=""
              />
            </PopoverTrigger>
            <PopoverContent>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </h2>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <Button variant="default" className="my-2 h-8 " onClick={handleLogin}>
          Sign IN
        </Button>
      )}
      <Dialog open={OpenDialoge}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="" />
              <h2 className="text-lg font-bold mt-7">Sign In With Google</h2>
              <p>Sign In To The App With Google Authentication Securely</p>
              <Button onClick={login} variant="default" className="w-full mt-7">
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
