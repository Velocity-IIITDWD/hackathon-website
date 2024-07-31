import Link from "next/link";
import React from "react";

interface NavbarLink {
  text: string;
  link: string;
}

export default function NavbarLinks({ text, link }: NavbarLink) {
  return (
    <Link
      href={link}
      className="hidden text-slate-100 text-md lg:text-xl md:flex flex-col items-center after:ease-in-out after:block after:w-0 after:h-[2px] after:rounded after:bg-slate-100 hover:after:w-full after:transition-all after:duration-300"
    >
      {text}
    </Link>
  );
}
