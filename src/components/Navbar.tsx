"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}> 
    <Menu setActive={setActive}>
        <Link href={"/"}>
       
    <MenuItem setActive={setActive} active={active} item="Home">
      {/* <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="/">Web Development</HoveredLink>
      </div> */}
    </MenuItem>
    </Link>
    <MenuItem setActive={setActive} active={active} item="Our courses">
      <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="/web-dev">All courses</HoveredLink>
      <HoveredLink href="/web-dev">Basic Music theory</HoveredLink>
      <HoveredLink href="/web-dev">Advanced composition</HoveredLink>
      <HoveredLink href="/web-dev">Songwriting</HoveredLink>
      <HoveredLink href="/web-dev">Music Production</HoveredLink>
      </div>
    </MenuItem>
    <Link href={"/contact"}>
    <MenuItem setActive={setActive} active={active} item="Contact us">
      <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="/web-dev">All courses</HoveredLink>
      <HoveredLink href="/web-dev">Basic Music theory</HoveredLink>
      <HoveredLink href="/web-dev">Advanced composition</HoveredLink>
      <HoveredLink href="/web-dev">Songwriting</HoveredLink>
      <HoveredLink href="/web-dev">Music Production</HoveredLink>
     
      </div>
    </MenuItem>
    </Link>
  </Menu></div>
  )
}

export default Navbar