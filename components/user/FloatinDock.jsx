"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {



  IconHome,
  IconBrandPowershell,
  IconUserCircle,
  IconChartBar,
  IconEaseInOut
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Dashboard",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Performertics",
      icon: (
        <IconEaseInOut className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Competence",
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  
    {
      title: "Profile",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "CodeGround",
      icon: (
        <IconBrandPowershell className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    }
  ];
  return (
    (<div className="flex items-center justify-center  w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
