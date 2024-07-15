import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <nav className="w-[98%] place-self-center fixed z-30 top-2 p-4 rounded-lg bg-slate-900/50 backdrop-blur flex justify-evenly items-center">
      <NavbarLinks link={"/"} text={"Lorem"} />
      <NavbarLinks link={"/"} text={"Lorem"} />
      <NavbarLinks link={"/"} text={"Lorem"} />
      <Link href="/" className="px-10 text-4xl font-semibold text-white">
        Logo
      </Link>
      <NavbarLinks link={"/"} text={"Lorem"} />
      <NavbarLinks link={"/"} text={"Lorem"} />
      <NavbarLinks link={"/"} text={"Lorem"} />
    </nav>
  );
}
