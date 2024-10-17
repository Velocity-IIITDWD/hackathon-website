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
      const eventDate = new Date("2024-10-25T00:00:00");
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
      className="font-roboto relative flex h-[100dvh] w-full items-center justify-between overflow-hidden bg-[url('/Main.webp')] bg-cover bg-right"
      data-idx="0"
    >
      <Image
        src={stars}
        alt={''}
        className="absolute left-0 top-0 z-[2] h-full w-full animate-spin object-cover object-center"
      />
      <div className="absolute top-0 z-[1] h-full w-full bg-black/50"></div>

      <div className="z-[2] mt-4 max-sm:w-full md:ml-4 lg:ml-8 xl:ml-12">
        <EventDetails timeLeft={timeLeft} />
      </div>
    </section>
  );
}
