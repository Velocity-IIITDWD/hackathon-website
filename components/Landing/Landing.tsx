import React from "react";

export default function Landing() {
  return (
    <div className="h-screen flex items-center justify-center w-full relative">
      <video
        className="absolute object-cover z-0 h-full w-full"
        preload="none"
        loop
        autoPlay
        muted
      >
        <source src="space.mp4" type="video/mp4" />
      </video>
      <div className="bg-slate-800/30 absolute h-full w-full z-[1]" />

      <div className="flex flex-col text-[rgb(242,249,255)] gap-2 z-10">
        <div className="uppercase flex flex-col md:flex-row items-center mb-4 md:gap-4 gap-1 leading-[1.1] font-clash-semi text-[clamp(48px,5vw,80px)]">
          <div className="w-fit bg-[linear-gradient(170deg,rgb(242,249,255)_50%,rgb(118,68,255))] text-transparent from-[rgb(242,249,255)] to-[rgb(118,68,255)] bg-clip-text">
            welcome
          </div>
          <div className="w-fit bg-[linear-gradient(to_bottom,rgb(242,249,255)_40%,rgb(118,68,255))] text-transparent from-[rgb(242,249,255)] to-[rgb(118,68,255)] bg-clip-text">
            to the
          </div>
          <div className="w-fit bg-[linear-gradient(-170deg,rgb(242,249,255)_50%,rgb(118,68,255))] text-transparent from-[rgb(242,249,255)] to-[rgb(118,68,255)] bg-clip-text">
            space
          </div>
        </div>
        <div className="text-center leading-[1.1] font-clash-semi text-[clamp(48px,8vw,130px)] [text-shadow:1px_1px_10px_#fff,1px_1px_20px_#f2f9ff] font-bold uppercase">
          Hack to
        </div>
        <div className="text-center leading-[1.1] font-clash-semi text-[clamp(48px,8vw,130px)] [text-shadow:1px_1px_10px_#fff,1px_1px_20px_#f2f9ff] font-bold uppercase">
          the future
        </div>
      </div>
    </div>
  );
}
