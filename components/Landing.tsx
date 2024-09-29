"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import stars from "@/public/Stars Animate.svg";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculateTimeLeft(): TimeLeft {
      const eventDate = new Date("2024-10-10T11:59:00");
      const currentTime = new Date();
      const difference = eventDate.getTime() - currentTime.getTime();

      let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time left
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="landing"
      className="h-[100dvh] flex flex-col justify-center items-center md:items-start relative overflow-hidden bg-[url('/Main.webp')] bg-right bg-cover font-roboto w-full pt-[60px]"
      data-idx="0"
    >
      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full top-0 left-0 object-cover object-center animate-spin z-[2]"
      />
      <div className="absolute h-full w-full top-0 bg-black/50 z-[1]"></div>
      <div className="z-[3] text-center md:text-left md:pl-20">
        {/* Heading */}
        <div className="text-[clamp(3rem,6vw,8rem)] font-anton uppercase leading-[1] tracking-[0.01em] text-white">
          hack 2
        </div>
        <div className="text-[clamp(3rem,6vw,8rem)] font-anton uppercase leading-[1] tracking-[0.01em] text-white">
          <span className="outlined-text transition-all duration-500">
            future
          </span>
        </div>

        {/* Buttons Section */}
        <div className="mt-10 flex flex-col gap-4 items-center md:items-start mx-auto">
          {/* Brochure Button */}
          <a
            href={"/Hack2Future-Brochure.pdf"}
            target="_blank"
            className="bg-black px-8 uppercase border rounded border-slate-600 h-[44px] w-full max-w-[250px] flex items-center justify-center text-white"
          >
            Brochure
          </a>

          {/* Timer */}
          <div className="bg-black/75 text-white py-2 px-4 rounded-md text-center w-full max-w-[250px]">
            <div className="font-bold text-lg">Event Starts In:</div>
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-anton">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
                <span className="text-sm uppercase">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-anton">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="text-sm uppercase">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-anton">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-sm uppercase">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-anton">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-sm uppercase">Seconds</span>
              </div>
            </div>
          </div>

          <div
            className="apply-button"
            // className="bg-[#3770ff] h-[44px] w-[312px] flex items-center justify-center text-[20px] font-semibold rounded-[2px] text-white px-8 outline-none"
            data-hackathon-slug="hack-2-future-iiit-dharwad"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
