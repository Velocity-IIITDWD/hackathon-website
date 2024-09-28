import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[100dvh] relative w-full bg-[#070b0d] flex items-center justify-center py-28"
    >
      {/* <div className="absolute left-8 sm:left-16 font-anton top-10 text-[6rem] md:text-[200px] text-[#1b1e24]">
        ABOUT
      </div> */}
      <div className="text-white z-[2]">
        <h1 className="text-[3rem] left-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
          About us
          <span className="absolute -left-2 md:-left-8 font-anton -bottom-3 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
            About
          </span>
        </h1>
        <div className="px-8 sm:px-16 md:px-28 text-[40px] leading-[1] uppercase font-anton">
          Who we are
        </div>
        <div className="font-roboto px-8 sm:px-16 md:px-28 mt-20 flex flex-col gap-4 text-white text-lg leading-relaxed">
          <span>
            Hack2Future is an exhilarating 32-hour hackathon hosted by IIIT
            Dharwad, designed to inspire and challenge undergraduate students
            from across India.
          </span>
          <span>
            This event unites tech enthusiasts to tackle real-world problems
            through innovative solutions across diverse problem statements.
          </span>
          <span>
            Participants should choose a problem statement and are free to use
            any technology or tools to bring their ideas to life.
          </span>
          <span>
            Expert mentorship and industry insights are provided, alongside
            competitive rewards.
          </span>
          <span>
            Ready to make your mark? Join us and be part of something
            extraordinary!
          </span>
        </div>
      </div>
    </section>
  );
}
