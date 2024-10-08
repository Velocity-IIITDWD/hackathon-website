'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import stars from '@/public/Stars Animate.svg';
import EventDetails from './EventDetails';

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
      const eventDate = new Date('2024-10-10T23:59:00');
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
      className="h-[100dvh] flex justify-between items-center relative overflow-hidden bg-[url('/Main.webp')] bg-right bg-cover font-roboto w-full"
      data-idx="0"
    >
      <Image
        src={stars}
        alt={''}
        className="absolute w-full h-full top-0 left-0 object-cover object-center animate-spin z-[2]"
      />
      <div className="absolute h-full w-full top-0 bg-black/50 z-[1]"></div>

      <div className="z-[2] max-sm:w-full mt-4 md:ml-4 lg:ml-8 xl:ml-12">
        <EventDetails timeLeft={timeLeft} />
      </div>
    </section>
  );
}
