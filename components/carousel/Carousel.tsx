"use client";
import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import PurplePlanet from "@/public/Purple Planet.png";
import GreenPlanet from "@/public/Green Planet.png";
import YellowPlanet from "@/public/Yellow Planet.png";
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
  let temp = 0;
  const t1 = gsap.timeline();

  const { contextSafe } = useGSAP({ scope: carousel });

  const onLeftClick = contextSafe(() => {
    setEventId((eventId + 1) % 4);
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
    if (eventId) {
      t1.to(orbitsRef?.current, { rotation: "+=30", ease: "back.out" }), "<";
      t1.fromTo(
        planets?.current,
        { opacity: 0, rotation: "90" },
        { opacity: 1, rotation: "0", ease: "back.out", duration: 0.5 },
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
        { opacity: 0, rotation: "0" },
        { opacity: 1, rotation: "90", ease: "back.out", duration: 2 },
        "<"
      );
    }
  });

  const onRightClick = contextSafe(() => {
    setEventId((eventId + 3) % 4);
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
    if (eventId) {
      t1.to(orbitsRef?.current, { rotation: "-=30", ease: "back.out" }), "<";
      t1.fromTo(
        planets?.current,
        { opacity: 0, rotation: "0" },
        { opacity: 1, rotation: "90", ease: "back.out", duration: 0.5 },
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
        { opacity: 1, rotation: "0", ease: "back.out", duration: 0.5 },
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
        <div className="relative flex top-24 justify-center items-center  overflow-visible w-96 z-10">
          <button onClick={onLeftClick} className="min-w-80">
            <Image
              src={events[(eventId + 3) % 4].planet}
              alt={""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
          </button>
          <span className="text-2xl text-center opacity-80">
            {events[(eventId + 3) % 4].name}
          </span>
        </div>

        <Content planetsRef={planets} event={events[eventId]} />

        <div className="relative top-24 flex justify-center items-center   w-96 z-10">
          <span className="text-2xl text-center opacity-80">
            {events[(eventId + 1) % 4].name}
          </span>
          <button onClick={onRightClick} className="min-w-80">
            <Image
              src={events[(eventId + 1) % 4].planet}
              alt={""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
          </button>
        </div>

        {/* {events.map((event, index) => {
          return (
            <div key={index} className="">
              <div className="relative flex top-24 justify-center items-center  overflow-visible w-96 z-10">
                <button onClick={onLeftClick} className="min-w-80">
                  <Image
                    src={events[(index + 3) % 4].planet}
                    alt={""}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full"
                  />
                </button>
                <span className="text-2xl text-center opacity-80">
                  {events[(index + 3) % 4].name}
                </span>
              </div>

              <Content planetsRef={planets} event={event} />

              <div className="relative top-24 flex justify-center items-center   w-96 z-10">
                <span className="text-2xl text-center opacity-80">
                  {events[(index + 1) % 4].name}
                </span>
                <button onClick={onRightClick} className="min-w-80">
                  <Image
                    src={events[(index + 1) % 4].planet}
                    alt={""}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full"
                  />
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Carousel;
