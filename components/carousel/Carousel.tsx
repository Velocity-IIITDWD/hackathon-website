"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Headers from "@/components/carousel/Headers";
import Content from "./Content";
import { events } from "@/data/caraousel";
import Background from "./Background";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const carousel = useRef(null);
  const orbitsRef = useRef(null);
  const planets = useRef<HTMLImageElement>(null);
  const starsRef = useRef(null);
  const [eventId, setEventId] = useState(0);
  const t1 = gsap.timeline();

  const { contextSafe } = useGSAP({ scope: carousel });

  const onIdUpdate = contextSafe(() => {
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

  const onLeftClick = contextSafe(() => {
    setEventId((eventId + 1) % 4);
    onIdUpdate();
    if (eventId) {
      t1.to(orbitsRef?.current, { rotation: "+=30", ease: "back.out" }), "<";
      t1.fromTo(
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
    } else {
      t1.to(
        orbitsRef?.current,
        {
          rotation: 0,
          ease: "back.out",
        },
        "<"
      );

      t1.fromTo(
        [planets?.current],
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
    }
  });

  const onRightClick = contextSafe(() => {
    setEventId((eventId + 3) % 4);
    onIdUpdate();
    if (eventId) {
      t1.to(orbitsRef?.current, { rotation: "-=30", ease: "back.out" }), "<";
      t1.fromTo(
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
    } else {
      t1.to(
        [orbitsRef?.current, planets.current],
        {
          rotation: 0,
          ease: "back.out",
        },
        "<"
      );
      t1.fromTo(
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
    }
  });

  return (
    <div
      ref={carousel}
      id="carousel"
      className="relative flex flex-col items-center w-full h-full bg-gradient-carousel overflow-y-visible overflow-x-clip gap-2"
    >
      <Headers event={events[eventId]} />
      <Background
        event={events[eventId]}
        orbitsRef={orbitsRef}
        starsRef={starsRef}
      />
      <div className="relative flex justify-between flex-grow w-full">
        <div className="relative hidden sm:flex right-[8%] justify-center items-center w-[20vw] z-10">
          <button onClick={onLeftClick} className="w-[80%]">
            <Image
              src={events[(eventId + 3) % 4].planet}
              alt={""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
          </button>
          <span className="text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl w-[20%] text-start opacity-80">
            {events[(eventId + 3) % 4].name}
          </span>
        </div>

        <Content planetsRef={planets} event={events[eventId]} />

        <div className="relative hidden sm:flex sm:flex-row-reverse justify-center items-center left-[8%] w-[20vw] z-10">
          <button onClick={onRightClick} className="w-[80%]">
            <Image
              src={events[(eventId + 1) % 4].planet}
              alt={""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
          </button>
          <span
            className="text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl text-start opacity-80 w-[20%] relative right-[40%] lg:right-[30%] xl:right-[20%] 2xl:right-[5%]
          "
          >
            {events[(eventId + 1) % 4].name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
