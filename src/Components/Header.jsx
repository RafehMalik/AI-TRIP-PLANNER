import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between p-3 shadow-2xs">
      <img src="/logo.svg" alt="" /> <br />
      <Button variant="default">Sign IN</Button>
    </div>
  );
}

export default Header;
