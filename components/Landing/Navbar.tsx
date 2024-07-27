'use client'

import Link from "next/link";
import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [sidebarOpen, openSidebar] = useState(false);

  return (
    <>
      <div className="w-full z-50 fixed top-0 py-3 px-8 flex justify-between navBorder items-center min-[885px]:hidden bg-white/20 backdrop-blur-md">
        <Link href="/" className="text-4xl font-semibold text-white">
          Logo
        </Link>
        <Menu onClick={() => openSidebar(true)} className="size-8 cursor-pointer" />
      </div>
      <div className={clsx("min-[885px]:hidden bg-black/95 fixed min-h-screen w-screen z-50 transition-all duration-500 flex flex-col", !sidebarOpen && "translate-x-full")}>
        <div className="flex justify-between items-center bg-zinc-950 py-3 px-8">
          <Link href="/" onClick={() => openSidebar(false)} className="text-4xl font-semibold text-white">
            Logo
          </Link>
          <X onClick={() => openSidebar(false)} className="size-8 cursor-pointer ml-auto" />
        </div>
        <div onClick={() => openSidebar(false)} className="text-white flex flex-col my-3 mx-8 text-lg [&>*]:pb-2">
          <Link href={"/#about"}>About</Link>
          <Link href={"/#technologies"}>Technologies</Link>
          <Link href={"/#prizes"}>Prizes</Link>
          <Link href={"/#timeline"}>Timeline</Link>
          <Link href={"/#sponsors"}>Sponsors</Link>
          <Link href={"/team"}>Team</Link>
          <Link href={"/#faqs"}>FAQs</Link>
          <Link href={"/#contact"}>Contact Us</Link>
        </div>
      </div>
      <nav className="w-[98%] max-[885px]:hidden nav place-self-center fixed z-50 [&>*]:z-50 top-2 p-4 rounded-lg bg-slate-900/60 flex gap-2 justify-evenly items-center navGradientBorder">
        <Link href="/" className="px-10 text-4xl font-semibold text-white">
          Logo
        </Link>
        <NavbarLinks link={"/#about"} text={"About"} />
        <NavbarLinks link={"/#technologies"} text={"Technologies"} />
        <NavbarLinks link={"/#prizes"} text={"Prizes"} />
        <NavbarLinks link={"/#timeline"} text={"Timeline"} />
        <NavbarLinks link={"/#sponsors"} text={"Sponsors"} />
        <NavbarLinks link={"/team"} text={"Team"} />
        <NavbarLinks link={"/#faqs"} text={"FAQs"} />
        <NavbarLinks link={"/#contact"} text={"Contact Us"} />
      </nav>
    </>
  );
}
