"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CarouselHeader from "@/components/carousel/CarouselHeader";
import CarouselBody from "./CarouselBody";
import { events } from "@/data/carousel";
import CarouselBackground from "@/components/carousel/CarouselBackground";
import { LeftPlanet } from "@/components/carousel/ChangeEventButtons/LeftPlanet";
import { RightPlanet } from "@/components/carousel/ChangeEventButtons/RightPlanet";
import { useAnimateCarousel } from "./AnimateCarousel";

const Carousel = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planets = useRef(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);

  const { starsAnimate, rotateOrbit, rotatePlanet, fadeElement, contextSafe } =
    useAnimateCarousel(carouselRef, orbitsRef, planets, starsRef);

  useEffect(() => {
    fadeElement([".buttons", ".eventInfo"]);
  }, [eventId, starsAnimate, fadeElement]);

  const onLeftClick = contextSafe(() => {
    starsAnimate();
    setEventId((eventId + 3) % 4);
    if (eventId) {
      rotatePlanet("-90", "0");
      rotateOrbit("-=45");
    } else {
      rotatePlanet("90", "0");
      rotateOrbit("+=45");
    }
  });

  const onRightClick = contextSafe(() => {
    starsAnimate();
    setEventId((eventId + 1) % 4);
    if (eventId) {
      rotatePlanet("90", "0");
      rotateOrbit("+=45");
    } else {
      rotatePlanet("-90", "0");
      rotateOrbit("-=45");
    }
  });

  return (
    <div
      ref={carouselRef}
      className="relative flex flex-col items-center w-full h-fit bg-gradient-carousel overflow-clip gap-2"
    >
      <h1
        className="text-2xl md:text-3xl lg:text-5xl pt-2 p-4 text-center font-bold backdrop-blur-sm "
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Domain & Prizes
      </h1>
      <CarouselHeader event={events[eventId]} />
      <div className="flex relative lg:-top-20 justify-center items-center w-full">
        <CarouselBackground
          orbitsRef={orbitsRef}
          starsRef={starsRef}
          event={events[eventId]}
        />
        <div className="absolute flex h-full items-center lg:-top-12 justify-between flex-grow w-full">
          <LeftPlanet onClick={onLeftClick} events={events} eventId={eventId} />
          <CarouselBody planetsRef={planets} event={events[eventId]} />
          <RightPlanet
            onClick={onRightClick}
            events={events}
            eventId={eventId}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
