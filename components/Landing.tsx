import Image from "next/image";
import React from "react";
import stars from "@/public/Stars Animate.svg";

export default function Landing() {
  return (
    <section
      id="landing"
      className="h-[100dvh] justify-center md:justify-start relative overflow-hidden bg-[url('/Main.webp')] bg-right bg-cover font-roboto w-full pt-[180px] flex"
      data-idx="0"
    >
      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full top-0 left-0 object-cover object-center animate-spin z-[2]"
      />
      <div className="absolute h-full w-full top-0 bg-black/20 z-[1]"></div>
      <div className="z-[3] md:pl-20">
        <div className="text-[5rem] md:text-[11rem] font-anton uppercase leading-[1] tracking-[0.01em]">
          hack 2
        </div>
        <div className="text-[5rem] md:text-[11rem] font-anton uppercase leading-[1] tracking-[0.01em]">
          <span className="outlined-text transition-all duration-500">
            future
          </span>
        </div>
        <div className="mt-20 flex flex-col gap-8">
          {/* <button className="bg-[#3770ff] px-8 uppercase rounded h-12 gap-2 flex items-center justify-center">
            <Image
              src={"/Devfolio.png"}
              height={20}
              width={20}
              alt={"Devfolio logo"}
              sizes="100%"
            />
            Register
          </button> */}
          <a
            href={"/Hack2Future-Brochure.pdf"}
            target="_blank"
            className="bg-black px-8 uppercase border rounded border-slate-600 h-[44px] w-[312px] flex items-center justify-center"
          >
            Brochure
          </a>
          <button
            className="bg-[#3770ff] h-[44px] w-[312px] flex items-center justify-center text-[20px] font-semibold rounded-[2px] text-white px-8 outline-none"
            type="button"
          >
            <svg
              className="mr-2 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 115.46 123.46"
              fill="#fff"
            >
              <path
                d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
            12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
            13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
            2.18.08 3.34z"
              ></path>
              <path
                d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
            104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
            55.41 0 0 1 50.58 55.34z"
              ></path>
            </svg>
            <span id="apply-button-title">Register</span>
          </button>
          {/* <span className="font-anton tracking-wide uppercase text-xl">
            Registration Starting Soon...
          </span> */}
        </div>
      </div>
    </section>
  );
}
