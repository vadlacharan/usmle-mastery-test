"use client";
import React from "react";
import { FloatingDockDemo } from "@/components/user/FloatinDock";
import { SidebarDemo } from "@/components/user/dashboard/Sidebar";
import { CardHoverEffectDemo } from "@/components/user/dashboard/Courses";

const layout = () => {
  return (
    <div>
        
      <SidebarDemo >
        <CardHoverEffectDemo />
        </SidebarDemo>

      <div className=" flex  w-full items-center   fixed z-50 bottom-5 ">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default layout;
