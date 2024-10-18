import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100dvh] w-full items-center justify-center bg-[#070b0d] py-28"
    >
      <div className="z-[2] text-white">
        <h1 className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]">
          About us
          <span className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]">
            About
          </span>
        </h1>
        <div className="font-anton px-8 text-[40px] uppercase leading-[1] sm:px-16 md:px-28">
          Who we are
        </div>
        <div className="font-roboto mt-20 flex flex-col gap-6 px-8 text-xl leading-relaxed text-slate-200 sm:px-16 md:px-28">
          <h2 className="mb-4 text-3xl font-bold transition-transform duration-700 hover:scale-105">
            Hack2Future Hackathon
          </h2>

          <ul className="list-disc pl-6">
            <li className="mb-2">
              Hack2Future is an exhilarating 32-hour hackathon hosted by IIIT
              Dharwad, designed to inspire and challenge undergraduate students
              from across India.
            </li>
            <li className="mb-2">
              This event unites tech enthusiasts to tackle real-world problems
              through innovative solutions across diverse problem statements.
            </li>
            <li className="mb-2">
              Participants should choose a problem statement and are free to use
              any technology or tools to bring their ideas to life.
            </li>
            <li className="mb-2">
              Expert mentorship and industry insights are provided, alongside
              competitive rewards.
            </li>
            <li>
              Ready to make your mark? Join us and be part of something
              extraordinary!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
