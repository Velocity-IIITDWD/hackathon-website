import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <nav className="w-[98%] nav place-self-center fixed z-30 top-2 p-4 rounded-lg bg-slate-900/60 flex justify-evenly items-center">
      <Link href="/" className="px-10 text-4xl font-semibold text-white">
        Logo
      </Link>
      <NavbarLinks link={"/#about"} text={"About"} />
      <NavbarLinks link={"/#technologies"} text={"Technologies"} />
      <NavbarLinks link={"/"} text={"Prizes"} />
      <NavbarLinks link={"/"} text={"Timeline"} />
      <NavbarLinks link={"/"} text={"Sponsors"} />
      <NavbarLinks link={"/"} text={"Team"} />
      <NavbarLinks link={"/"} text={"FAQs"} />
      <NavbarLinks link={"/"} text={"Contact Us"} />
    </nav>
  );
}
