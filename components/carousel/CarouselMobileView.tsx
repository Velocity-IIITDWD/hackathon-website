"use client";
import { useRef, useState } from "react";
import CarouselBackground from "./CarouselBackground";
import CarouselBody from "./CarouselBody";
import CarouselHeader from "./CarouselHeader";
import { events } from "@/data/carousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EventNavBar from "./ChangeEventButtons/EventNavBar";

const CarouselMobileView = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planetLarge = useRef<HTMLImageElement>(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);

  const { contextSafe } = useGSAP({ scope: carouselRef }, [eventId]);

  let turn = 0;
  const starsAnimate = contextSafe(() => {
    if (turn) {
      gsap.fromTo(
        starsRef.current,
        { x: 400, y: 400, scale: 1 },
        { x: 0, y: 0, duration: 0.5, scale: 2 }
      );
      turn = 0;
    } else {
      gsap.fromTo(
        starsRef.current,
        { x: -400, y: -400, scale: 2 },
        { x: 0, y: 0, duration: 0.5, scale: 1 }
      );
      turn = 1;
    }
  });

  const rotateLargePlanetLeft = contextSafe(() => {
    gsap.fromTo(
      planetLarge.current,
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

  const rotateOrbitLeft = contextSafe((angle: string) => {
    gsap.to(orbitsRef?.current, { rotation: angle, ease: "back.out" });
  });

  const rotateOrbitRight = contextSafe((angle: string) => {
    gsap.to(orbitsRef?.current, { rotation: angle, ease: "back.out" });
  });

  const rotateLargePlanetRight = contextSafe(() => {
    gsap.fromTo(
      planetLarge.current,
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

      <EventNavBar
        animateStars={starsAnimate}
        setEventId={setEventId}
        rotateLargePlanetLeft={rotateLargePlanetLeft}
        rotateLargePlanetRight={rotateLargePlanetRight}
        rotateOrbitLeft={rotateOrbitLeft}
        rotateOrbitRight={rotateOrbitRight}
        events={events}
        eventId={eventId}
      />
      <CarouselHeader event={events[eventId]} />
      <div className="flex relative justify-center items-center w-full">
        <CarouselBackground
          orbitsRef={orbitsRef}
          starsRef={starsRef}
          event={events[eventId]}
        />
        <div className="absolute flex h-full items-center justify-between flex-grow w-full">
          <CarouselBody planetsRef={planetLarge} event={events[eventId]} />
        </div>
      </div>
    </div>
  );
};

export default CarouselMobileView;
