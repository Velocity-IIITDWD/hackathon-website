'use client';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { IoMenu } from 'react-icons/io5';
import { NavbarContext } from '@/app/context/navbarContext';

export default function Navbar() {
  const { option, setOption } = useContext(NavbarContext);
  const [open, setOpen] = useState(false);
  const lenis = useLenis(({ scroll }) => {});

  const navs = [
    {
      href: '/#landing',
      name: 'Home',
    },
    {
      href: '/#problem',
      name: 'Problem',
    },
    {
      href: '/#prizes',
      name: 'Prizes',
    },
    {
      href: '/#timeline',
      name: 'Timeline',
    },
    {
      href: '/#sponsors',
      name: 'Sponsors',
    },
    {
      href: '/team',
      name: 'Team',
    },
  ];

  return (
    <div className="w-full">
      <nav className="fixed right-4 md:left-0 md:right-0 md:mx-auto w-fit p-4 md:px-2 top-6 z-40 bg-black/60 shadow-lg backdrop-blur text-center items-center rounded-full flex">
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex md:hidden"
        >
          <IoMenu />
        </button>
        <div
          id="nav-highlight"
          style={{ transform: `translateX(${100 * option}%)` }}
          className="w-28 hidden md:flex bg-[#639cb6] transition-all duration-300 z-[-1] rounded-full absolute h-10"
        ></div>
        {navs.map((navItem, i) => (
          <Link
            key={i}
            href={navItem.href}
            className={`w-28 hidden justify-center md:flex ${
              option === i && 'font-semibold'
            }`}
            onClick={() => {
              setOption(i);
              lenis?.scrollTo(navItem.href.slice(1), {
                lerp: 0.07,
                duration: 0.6,
              });
            }}
          >
            {navItem.name}
          </Link>
        ))}
      </nav>

      <div
        className={`w-screen fixed h-full top-0 left-0 px-8 py-10 transition-all duration-500 flex flex-col z-50 bg-black/70 backdrop-blur-sm ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <div></div>
          <button onClick={() => setOpen(!open)}>
            <IoMenu />
          </button>
        </div>
        <div className="w-full py-20 flex flex-col items-center gap-6">
          {navs.map((navItem, i) => (
            <Link
              key={i}
              className=""
              onClick={() => {
                setOpen(!open),
                  lenis?.scrollTo(navItem.href.slice(1), {
                    lerp: 0.07,
                    duration: 0.6,
                  });
              }}
              href={navItem.href}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
