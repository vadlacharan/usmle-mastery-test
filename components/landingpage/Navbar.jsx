"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    (<div className="relative w-full  flex items-center justify-center">

      <Navbar className="top-2 " />
     
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10  inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} className=" bg-black ">
        <MenuItem setActive={setActive} active={active} item="Register">
       
       
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Sign In">
       
           
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About us">
         
        </MenuItem>
      </Menu>
    </div>)
  );
}
