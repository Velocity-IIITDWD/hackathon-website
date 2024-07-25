"use client";
import { useEffect, useRef, useState } from "react";
import CarouselBackground from "@/components/carousel/CarouselBackground";
import CarouselBody from "@/components/carousel/CarouselBody";
import CarouselHeader from "@/components/carousel/CarouselHeader";
import { events } from "@/data/carousel";
import EventNavbar from "@/components/carousel/ChangeEventButtons/EventNavbar";
import { useAnimateMobileCarousel } from "@/components/carousel/AnimateCarousel";
import gsap from "gsap";

const CarouselMobileView = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planetLarge = useRef<HTMLImageElement>(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);

  const {
    rotateOrbit,
    rotatePlanet,
    starsAnimate,
    navbarTimeline,
    fadeElement,
  } = useAnimateMobileCarousel(carouselRef, orbitsRef, planetLarge, starsRef);

  useEffect(() => {
    navbarTimeline.current[eventId].progress(1);
  }, []);

  const onClick = (id: number) => {
    console.log(eventId);
    if (eventId === id) return;
    const prevEvent = eventId;
    navbarTimeline.current[prevEvent].timeScale(2).reverse();
    navbarTimeline.current[id].play();
    fadeElement(".eventInfo");
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
      ref={carouselRef}
      className="relative flex flex-col items-center w-full min-h-fit bg-gradient-carousel overflow-clip gap-2 z-10"
    >
      <h1
        className="text-2xl md:text-3xl lg:text-5xl pt-2 p-4 text-center font-bold backdrop-blur-sm z-10 "
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Domain & Prizes
      </h1>

      <EventNavbar onClick={onClick} events={events} eventId={eventId} />
      <CarouselHeader />
      <div className="flex relative justify-center items-center w-full">
        <CarouselBackground orbitsRef={orbitsRef} starsRef={starsRef} />
        <div className="absolute flex h-full items-center justify-between flex-grow w-full">
          <CarouselBody event={events[eventId]} />
        </div>
      </div>
    </div>
  );
};

export default CarouselMobileView;
