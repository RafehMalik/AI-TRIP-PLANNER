import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between p-3 shadow-2xs">
      <img src="/logo.svg" alt="" className="h-8 w-35 my-2" /> <br />
      <Button variant="default" className="my-2 h-8 ">
        Sign IN
      </Button>
    </div>
  );
}

export default Header;
