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

// Countdown Timer Component
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
    return null; // Or a fallback UI if desired
  }

  return (
    <div className="text-center text-white mt-8 clockCard">
      <div className="bg-clockPurpleDark rounded-lg p-4 inline-block">
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-digital">
              {timeLeft.days}
              <span className="font-sans">D: </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-digital">
              {timeLeft.hours}
              <span className="font-sans">H: </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-digital">
              {timeLeft.minutes}
              <span className="font-sans">M: </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-digital">
              {timeLeft.seconds}
              <span className="font-sans">S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
