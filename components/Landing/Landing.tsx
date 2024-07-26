import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-screen flex items-center overflow-hidden font-AtypDisplay justify-center w-full relative p-4">
      <video
        className="absolute object-cover z-0 h-full w-full"
        preload="none"
        loop
        autoPlay
        playsInline
        muted
      >
        <source src="space.mp4" type="video/mp4" />
      </video>
      <div className="bg-slate-800/30 absolute h-full w-full z-[1]" />

      <div className="flex gap-8 flex-col-reverse py-10 md:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 text-[rgb(242,249,255)] gap-2 z-10">
          <div
            style={{
              textShadow: "0 0 2px #fff",
            }}
            className="text-center font-DrukWide leading-[1.1] text-[clamp(48px,7vw,80px)] uppercase max-sm:text-4xl"
          >
            Hack to
          </div>
          <div
            style={{
              textShadow: "0 0 2px #fff",
            }}
            className="text-center font-DrukWide leading-[1.1] text-[clamp(48px,7vw,80px)] tracking-wide uppercase max-sm:text-4xl"
          >
            the Future
          </div>

          <div className="flex gap-4 mx-auto w-fit">
            <div
              style={{
                textShadow: "none",
              }}
              className=" relative cursor-pointer group w-fit flex col-span-2 mt-2 lg:mt-4 text-center rounded-lg text-lg font-normal bg-[#637bd0]"
            >
              <div
                className={
                  "w-full h-full py-2 px-7 md:py-4 md:px-14 rounded-lg transition ease-in-out duration-300 delay-150 group-hover:translate-x-2 group-hover:-translate-y-2 overflow-clip bg-[#506DD3]"
                }
              >
                <span>Apply Now</span>
                <div className="absolute right-0 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 bg-[#99a9e4]" />
                <div className="absolute right-4 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 bg-[#99a9e4]" />
              </div>
            </div>
            <div
              style={{
                textShadow: "none",
              }}
              className=" relative cursor-pointer group w-fit flex col-span-2 mt-2 lg:mt-4 text-center rounded-lg text-lg font-normal bg-[#463ea0]"
            >
              <div
                className={
                  "w-full h-full py-2 px-7 md:py-4 md:px-14 rounded-lg transition ease-in-out duration-300 delay-150 group-hover:translate-x-2 group-hover:-translate-y-2 overflow-clip bg-[#2D22A7]"
                }
              >
                <span>Download Brochure</span>
                <div className="absolute right-0 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 bg-[#756cd5]" />
                <div className="absolute right-4 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 bg-[#756cd5]" />
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-full flex-1 z-[2] rotation"
          src="/landing-image.png"
          alt="landing-image"
          width={0}
          height={0}
          sizes="100%"
        />
      </div>
    </div>
  );
}
