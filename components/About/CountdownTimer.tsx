"use client";

import React, { useState, useEffect } from "react";
import "@/components/About/index.css";

// Helper function to calculate time left
const calculateTimeLeft = (endDate: Date) => {
  const difference = +endDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const endDate = new Date("2024-11-20T00:00:00");

const CountdownTimer: React.FC<{ endDate: Date }> = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-center text-white mt-8 border-2 border-[#A784BD] rounded-2xl w-full">
      <div
        className="bg-clockPurpleDark rounded-2xl p-6 max-sm:p-4 xl:py-2 inline-block relative w-full"
        style={{ boxShadow: "inset 0 0 5px 5px rgba(0,0,0,0.25)" }}
      >
        <svg
          className="absolute max-2xs:scale-75 max-2xs:-top-4 max-2xs:-left-0.5 -top-3 left-1 "
          width="64"
          height="64"
          viewBox="0 0 165 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 27C0 12.0883 12.0883 0 27 0H158.527C165.502 0 167.108 9.76623 160.5 12L65.6107 32.5289C59.7078 33.806 54.4036 37.0252 50.5459 41.672L23.8066 73.8806C18.1232 80.7266 7.47861 80.2692 2.40339 72.9609C0.8386 70.7076 0 68.0298 0 65.2865V27Z"
            fill="#9862DB"
            fill-opacity="0.6"
          />
        </svg>
        <svg
          className="absolute -bottom-0 left-1/2"
          width="55"
          height="12"
          viewBox="0 0 110 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107.485 10.5H2.26642C0.0639343 10.5 -0.320693 7.35331 1.81694 6.8228L2.97027 6.53658C37.4515 -2.02081 73.5166 -1.89425 107.937 6.90493C110.018 7.43683 109.632 10.5 107.485 10.5Z"
            fill="#9862DB"
            fill-opacity="0.6"
          />
        </svg>
        <svg
          className="absolute -top-6 right-1/4"
          width="64"
          height="64"
          viewBox="0 0 110 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.65771 0.158965L107.876 0.19412C110.078 0.194856 110.462 3.34167 108.324 3.87147L107.171 4.15731C72.6867 12.7032 36.6216 12.5646 2.20426 3.75388C0.123797 3.22129 0.51015 0.158247 2.65771 0.158965Z"
            fill="#9862DB"
            fill-opacity="0.6"
          />
        </svg>
        <div className="flex justify-center items-center tracking-tighter space-x-2 font-semibold xs:font-bold font-digital">
          <div className="max-3xs:text-[0.8] max-2xs:text-sm max-xs:text-xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl max-xl:text-[4rem] text-[5.8rem]">
            {timeLeft.days}
            <span className="font-serif font-medium max-2xs:text-xs max-sm:text-sm max-md:text-2xl max-xs:text-md max-lg:text-3xl text-4xl">
              {" "}
              D{" "}
            </span>
            <span className="">: </span>
          </div>
          <div className="max-3xs:text-[0.8] max-2xs:text-sm max-xs:text-xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl max-xl:text-[4rem] text-[5.8rem]">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
            <span className="font-serif font-medium max-2xs:text-xs max-sm:text-sm max-md:text-2xl max-xs:text-md max-lg:text-3xl text-4xl">
              {" "}
              H{" "}
            </span>
            <span className="">: </span>
          </div>
          <div className="max-3xs:text-[0.8] max-2xs:text-sm max-xs:text-xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl max-xl:text-[4rem] text-[5.8rem]">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
            <span className=" font-serif font-medium max-2xs:text-xs max-sm:text-sm max-md:text-2xl max-xs:text-md max-lg:text-3xl text-4xl">
              {" "}
              M{" "}
            </span>
            <span className="">: </span>
          </div>
          <div className="max-3xs:text-[0.8] max-2xs:text-sm max-xs:text-xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl max-xl:text-[4rem] text-[5.8rem]">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
            <span className=" font-serif font-medium max-2xs:text-xs max-sm:text-sm max-md:text-2xl max-xs:text-md max-lg:text-3xl text-4xl">
              {" "}
              S
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
