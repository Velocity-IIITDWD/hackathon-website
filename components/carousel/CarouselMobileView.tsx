"use client";
import { useRef, useState } from "react";
import CarouselBackground from "./CarouselBackground";
import CarouselBody from "./CarouselBody";
import CarouselHeader from "./CarouselHeader";
import solarSystem from "@/public/Space.svg";
import { LeftPlanet } from "./ChangeEventButtons/LeftPlanet";
import { RightPlanet } from "./ChangeEventButtons/RightPlanet";
import { events } from "@/data/carousel";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import EventNavBar from "./ChangeEventButtons/EventNavBar";

const CarouselMobileView = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planets = useRef<HTMLImageElement>(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);

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
    gsap.to(orbitsRef?.current, { rotation: angle, ease: "back.out" }),
      gsap.fromTo(
        planets.current,
        { opacity: 0, rotation: "90" },
        {
          opacity: 1,
          rotation: "0",
          ease: "back.out",
          duration: 0.5,
          transformOrigin: "52% 51%",
        }
      );
  });

  const rotatePlanetRight = contextSafe(() => {
    const angle = eventId === 0 ? "0" : "-=45 ";
    gsap.to(orbitsRef.current, {
      rotation: angle,
      ease: "back.out",
    }),
      gsap.fromTo(
        planets.current,
        { opacity: 0, rotation: "-90" },
        {
          opacity: 1,
          rotation: "0",
          ease: "back.out",
          duration: 0.5,
          transformOrigin: "52% 51%",
        }
      );
  });

  return (
    <div className="relative flex flex-col items-center w-full h-fit bg-gradient-carousel overflow-clip gap-2">
      <h1
        className="text-2xl md:text-3xl lg:text-5xl col-span-12 p-4 text-center font-bold backdrop-blur-sm"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Domain & Prizes
      </h1>
      <EventNavBar />

      <div className="relative flex flex-col justify-center border-2">
        <CarouselHeader event={events[eventId]} />
        <div className="relative border-2 flex flex-col w-full items-center">
          <CarouselBackground
            orbitsRef={orbitsRef}
            starsRef={starsRef}
            event={events[eventId]}
          />
          <CarouselBody event={events[eventId]} planetsRef={planets} />
        </div>
      </div>
    </div>
  );
};

export default CarouselMobileView;
