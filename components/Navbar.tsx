"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [option, setOption] = useState(0);
  const [open, setOpen] = useState(false);
  const lenis = useLenis(({ scroll }) => {});

  return (
    <div className="w-full">
      <nav className="fixed right-4 md:left-0 md:right-0 md:mx-auto w-fit p-4 md:px-2 top-6 z-40 bg-black/60 shadow-lg backdrop-blur text-center items-center rounded-full flex">
        <button onClick={() => setOpen(!open)} className="flex md:hidden">
          <IoMenu />
        </button>

        <div
          style={{ transform: `translateX(${100 * option}%)` }}
          className="w-28 hidden md:flex bg-[#639cb6] transition-all duration-300 z-[-1] rounded-full absolute h-10"
        ></div>
        <Link
          href={"/"}
          className={`w-28 hidden justify-center md:flex ${
            option === 0 && "font-semibold"
          }`}
          onClick={() => {
            setOption(0),
              lenis?.scrollTo("#main", { lerp: 0.07, duration: 0.6 });
          }}
        >
          Home
        </Link>
        <Link
          href={"/#prizes"}
          className={`w-28 hidden justify-center md:flex ${
            option === 1 && "font-semibold"
          }`}
          onClick={() => {
            setOption(1),
              lenis?.scrollTo("#prizes", { lerp: 0.07, duration: 0.6 });
          }}
        >
          Prizes
        </Link>
        <Link
          href={"/#timeline"}
          className={`w-28 hidden justify-center md:flex ${
            option === 2 && "font-semibold"
          }`}
          onClick={() => {
            setOption(2),
              lenis?.scrollTo("#timeline", { lerp: 0.07, duration: 0.6 });
          }}
        >
          Timeline
        </Link>
        <Link
          href={"/#sponsors"}
          className={`w-28 hidden justify-center md:flex ${
            option === 3 && "font-semibold"
          }`}
          onClick={() => {
            setOption(3),
              lenis?.scrollTo("#sponsors", { lerp: 0.07, duration: 0.6 });
          }}
        >
          Sponsors
        </Link>
        {/* <Link
          href={"/team"}
          className={`w-28 hidden justify-center md:flex ${
            option === 4 && "font-semibold"
          }`}
          onClick={() => setOption(4)}
        >
          Team
        </Link> */}
      </nav>

      <div
        className={`w-screen fixed h-full top-0 left-0 px-8 py-10 transition-all duration-500 flex flex-col z-50 bg-black/70 backdrop-blur-sm ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <div></div>
          <button onClick={() => setOpen(!open)}>
            <IoMenu />
          </button>
        </div>
        <div className="w-full py-20 flex flex-col items-center gap-6">
          <Link
            className=""
            onClick={() => {
              setOpen(!open),
                lenis?.scrollTo("#main", { lerp: 0.07, duration: 0.6 });
            }}
            href="/"
          >
            Home
          </Link>
          <Link
            className=""
            onClick={() => {
              setOpen(!open),
                lenis?.scrollTo("#about", { lerp: 0.07, duration: 0.6 });
            }}
            href="/#about"
          >
            About
          </Link>
          <Link
            className=""
            onClick={() => {
              setOpen(!open),
                lenis?.scrollTo("#timeline", { lerp: 0.07, duration: 0.6 });
            }}
            href="/#timeline"
          >
            Timeline
          </Link>
          <Link
            className=""
            onClick={() => {
              setOpen(!open),
                lenis?.scrollTo("#sponsors", { lerp: 0.07, duration: 0.6 });
            }}
            href="/#sponsors"
          >
            Sponsors
          </Link>
          {/* <Link
            className=""
            onClick={() => {
              setOpen(!open);
            }}
            href="/team"
          >
            Team
          </Link> */}
        </div>
      </div>
    </div>
  );
}
