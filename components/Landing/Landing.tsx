import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="h-screen flex items-center font-AtypDisplay justify-center w-full relative">
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

      <div className="flex gap-4 flex-col py-10 md:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 text-[rgb(242,249,255)] gap-2 z-10">
          <div
            style={{
              textShadow: "0 0 2px #fff",
            }}
            className="text-center font-DrukWide leading-[1.1] text-[clamp(48px,7vw,80px)] uppercase"
          >
            Hack to
          </div>
          <div
            style={{
              textShadow: "0 0 2px #fff",
            }}
            className="text-center font-DrukWide leading-[1.1] text-[clamp(48px,7vw,80px)] tracking-wide uppercase"
          >
            the Future
          </div>

          <div className="flex gap-4 mx-auto w-fit">
            <Link
              href="/"
              className="bg-[#506DD3] rounded text-white px-5 py-2"
            >
              Apply Now
            </Link>
            <Link
              href="/"
              className="bg-[#2D22A7] rounded text-white px-5 py-2"
            >
              Download Brochure
            </Link>
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
