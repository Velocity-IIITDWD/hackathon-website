import Image from "next/image";
import React from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface EventDetailsProps {
  timeLeft: TimeLeft;
}

export default function EventDetails({ timeLeft }: EventDetailsProps) {
  return (
    <div className="z-[3] flex flex-col items-center justify-center text-center w-full max-w-[900px]">
      {/* Heading */}
      <div className="text-[clamp(4rem,7vw,6rem)] font-anton uppercase leading-[1] tracking-[0.01em] text-white">
        hack 2
      </div>
      <div className="text-[clamp(4rem,7vw,6rem)] font-anton uppercase leading-[1] tracking-[0.01em] text-white">
        <span className="outlined-text">future</span>
      </div>

      {/* Buttons Section */}
      <div className="mt-10 flex flex-col gap-4 items-center">
        {/* Brochure Button */}
        {/* <a
          href={"/Hack2Future-Brochure.pdf"}
          target="_blank"
          className="bg-black px-8 uppercase border rounded border-slate-600 h-[44px] w-full max-w-[250px] flex items-center justify-center text-white"
        >
          Brochure
        </a> */}

        {/* Timer */}
        <div className="text-white py-2 px-4 rounded-md text-center w-full max-w-[250px]">
          <div className="font-bold text-lg">Submissions Closes In:</div>
          <div className="flex space-x-4 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-anton">
                {timeLeft.days.toString().padStart(2, "0")}
              </span>
              <span className="text-sm uppercase">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-anton">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-sm uppercase">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-anton">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-sm uppercase">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-anton">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-sm uppercase">Seconds</span>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div
          className="apply-button"
          // className="bg-[#3770ff] h-[44px] w-[312px] flex items-center justify-center text-[20px] font-semibold rounded-[2px] text-white px-8 outline-none"
          data-hackathon-slug="hack-2-future-iiit-dharwad"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
        {/* <a
          href={"https://hack-2-future-iiit-dharwad.devfolio.co"}
          target="_blank"
          className="bg-[#3770ff] h-[44px] w-[312px] flex items-center justify-center text-[20px] gap-2 rounded-[2px] text-white px-8 outline-none"
        >
          <Image
            height={20}
            width={20}
            src={"/Devfolio.png"}
            alt={"devfolio"}
          />
          Apply with Devfolio
        </a> */}
      </div>
    </div>
  );
}
