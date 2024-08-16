import Image from "next/image";
import React from "react";
import stars from "@/public/Stars Animate.svg";

export default function Landing() {
  return (
    <section
      id="main"
      className="h-[100dvh] justify-center md:justify-start relative overflow-hidden bg-[url('/Main.webp')] bg-right bg-cover font-roboto w-full pt-[180px] flex"
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
            className="bg-black px-8 uppercase border rounded border-slate-600 h-12 flex items-center justify-center w-fit"
          >
            Brochure
          </a>
          <span className="font-anton tracking-wide uppercase text-xl">Registration Starting Soon...</span>
        </div>
      </div>
    </section>
  );
}
