"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CarouselHeader from "@/components/carousel/CarouselHeader";
import CarouselBody from "./CarouselBody";
import { events } from "@/data/carousel";
import CarouselBackground from "@/components/carousel/CarouselBackground";
import { LeftPlanet } from "@/components/carousel/ChangeEventButtons/LeftPlanet";
import { RightPlanet } from "@/components/carousel/ChangeEventButtons/RightPlanet";

const Carousel = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planets = useRef<HTMLImageElement>(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);
  const carouselTimeline = gsap.timeline();

  const { contextSafe } = useGSAP({ scope: carouselRef }, [eventId]);

  const starsAnimate = contextSafe(() => {
    if (eventId % 2) {
      gsap.fromTo(
        starsRef.current,
        { x: 400, y: 400, scale: 1 },
        { x: 0, y: 0, duration: 0.5, scale: 2 }
      );
    } else {
      gsap.fromTo(
        starsRef.current,
        { x: -400, y: -400, scale: 2 },
        { x: 0, y: 0, duration: 0.5, scale: 1 }
      );
    }
  });

  const rotatePlanetLeft = contextSafe(() => {
    const angle = eventId === 0 ? "0" : "+=45 ";
    carouselTimeline.to(
      orbitsRef?.current,
      { rotation: angle, ease: "back.out" },
      "<"
    ),
      carouselTimeline.fromTo(
        planets?.current,
        { opacity: 0, rotation: "90" },
        {
          opacity: 1,
          rotation: "0",
          ease: "back.out",
          duration: 0.5,
          transformOrigin: "52% 51%",
        },
        "<"
      );
  });

  const rotatePlanetRight = contextSafe(() => {
    const angle = eventId === 0 ? "0" : "-=45 ";
    carouselTimeline.to(
      orbitsRef?.current,
      {
        rotation: angle,
        ease: "back.out",
      },
      "<"
    ),
      carouselTimeline.fromTo(
        planets?.current,
        { opacity: 0, rotation: "-90" },
        {
          opacity: 1,
          rotation: "0",
          ease: "back.out",
          duration: 0.5,
          transformOrigin: "52% 51%",
        },
        "<"
      );
  });

  const onLeftClick = contextSafe(() => {
    setEventId((eventId + 3) % 4);
    starsAnimate();
    if (eventId) {
      rotatePlanetLeft();
    } else {
      rotatePlanetRight();
    }
  });

  const onRightClick = contextSafe(() => {
    setEventId((eventId + 1) % 4);
    starsAnimate();
    if (eventId) {
      rotatePlanetRight();
    } else {
      rotatePlanetLeft();
    }
  });

  return (
    <div
      ref={carouselRef}
      className="relative flex flex-col items-center w-full h-full bg-gradient-carousel overflow-y-visible overflow-x-clip gap-2"
    >
      <CarouselBackground
        event={events[eventId]}
        orbitsRef={orbitsRef}
        starsRef={starsRef}
      />
      <CarouselHeader event={events[eventId]} />
      <div className="relative flex justify-between flex-grow w-full">
        <LeftPlanet onClick={onLeftClick} events={events} eventId={eventId} />
        <CarouselBody planetsRef={planets} event={events[eventId]} />
        <RightPlanet onClick={onRightClick} events={events} eventId={eventId} />
      </div>
    </div>
  );
};

export default Carousel;
