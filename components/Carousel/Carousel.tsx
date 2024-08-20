"use client";
import { useEffect, useRef, useState } from "react";
import CarouselBody from "./CarouselBody";
import { events } from "@/data/carousel";
import { useAnimateCarousel } from "./AnimateCarousel";
import Image from "next/image";
import stars from "@/public/Stars Animate.svg";
import TopButtons from "./ChangeEventButtons/TopButtons";

const Carousel = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planets = useRef(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);

  const {
    starsAnimate,
    rotateOrbit,
    topButtonsTimeline,
    rotatePlanet,
    fadeElement,
    contextSafe,
  } = useAnimateCarousel(carouselRef, orbitsRef, planets, starsRef);

  useEffect(() => {
    fadeElement([".buttons", ".eventInfo"]);
  }, [eventId, starsAnimate, fadeElement]);

  const onClick = (id: number) => {
    if (eventId === id) return;
    const prevEvent = eventId;
    topButtonsTimeline.current[id].play();
    topButtonsTimeline.current[prevEvent].timeScale(2).reverse();
    setEventId(id);
    if (id > prevEvent) {
      rotatePlanet("-90", "0");
      rotateOrbit(`-=${(id - eventId) * 45}`);
    } else {
      rotatePlanet("90", "0");
      rotateOrbit(`-=${(id - eventId) * 45}`);
    }
    starsAnimate();
  };

  return (
    <div
      id="technologies"
      ref={carouselRef}
      className="scroll-mt-6 relative py-12 sm:py-16 flex flex-col items-center w-full h-full min-h-[100dvh] bg-[#070b0d] overflow-clip gap-2"
      data-idx="1"
    >
      <div className="absolute uppercase left-8 sm:left-16 font-anton top-0 text-[6rem] md:text-[200px] text-[#1b1e24]">
        Tracks
      </div>
      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full"
        ref={starsRef}
      />
      <h1 className="relative text-[3rem] md:text-[80px] font-anton w-full px-8 sm:px-16 md:px-28 uppercase font-bold mb-20 pt-0 sm:pt-16 z-[2]">
        Tracks
      </h1>
      <TopButtons events={events} eventId={eventId} onClick={onClick} />
      <CarouselBody
        planetsRef={planets}
        orbitsRef={orbitsRef}
        event={events[eventId]}
      />
    </div>
  );
};

export default Carousel;
