"use client";
import { useEffect, useRef, useState } from "react";
import CarouselHeader from "@/components/carousel/CarouselHeader";
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
    topButtonsTimeline.current[prevEvent].timeScale(2).reverse();
    topButtonsTimeline.current[id].play();
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
      className="scroll-mt-6 relative py-16 flex flex-col items-center w-full h-full min-h-[100dvh] bg-gradient-carousel overflow-clip gap-2"
    >
      {/* Enhanced color patches */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/4 right-[-50px] w-[250px] h-[250px] bg-blue-500 opacity-30 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-100px] left-1/4 w-[350px] h-[350px] bg-indigo-500 opacity-30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-cyan-400 opacity-20 rounded-full blur-[70px]"></div>
      
      {/* Additional color patches */}
      <div className="absolute top-1/3 left-1/3 w-[180px] h-[180px] bg-green-500 opacity-25 rounded-full blur-[90px]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[220px] h-[220px] bg-yellow-400 opacity-20 rounded-full blur-[85px]"></div>
      <div className="absolute top-3/4 left-[-50px] w-[280px] h-[280px] bg-pink-500 opacity-15 rounded-full blur-[110px]"></div>
      <div className="absolute top-[-50px] right-1/4 w-[240px] h-[240px] bg-teal-400 opacity-20 rounded-full blur-[95px]"></div>
      <div className="absolute bottom-[-75px] right-[-75px] w-[320px] h-[320px] bg-orange-500 opacity-25 rounded-full blur-[130px]"></div>

      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full"
        ref={starsRef}
      />
      <h1
        className="text-2xl md:text-3xl lg:text-5xl mb-4 pt-2 p-4 text-center font-bold backdrop-blur-sm "
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Technologies
      </h1>
      {/* <div className="max-w-6xl my-10 flex-wrap gap-4 flex md:flex-row items-center w-full justify-evenly">
        <TopButton
          setEventId={setEventId}
          number={0}
          color={"Purple"}
          title={"Fin Tech"}
          id={eventId}
          starsAnimate={starsAnimate}
          rotateOrbit={rotateOrbit}
          rotatePlanet={rotatePlanet}
        />
        <TopButton
          setEventId={setEventId}
          number={1}
          color={"Yellow"}
          title={"Healthcare & BioInformation"}
          id={eventId}
          starsAnimate={starsAnimate}
          rotateOrbit={rotateOrbit}
          rotatePlanet={rotatePlanet}
        />
        <TopButton
          setEventId={setEventId}
          number={2}
          color={"Green"}
          title={"Supply chain Management & Logistics"}
          id={eventId}
          starsAnimate={starsAnimate}
          rotateOrbit={rotateOrbit}
          rotatePlanet={rotatePlanet}
        />
        <TopButton
          setEventId={setEventId}
          number={3}
          color={"Blue"}
          title={"Sustainability & Green Tech"}
          id={eventId}
          starsAnimate={starsAnimate}
          rotateOrbit={rotateOrbit}
          rotatePlanet={rotatePlanet}
        />
      </div> */}
      <TopButtons events={events} eventId={eventId} onClick={onClick} />
      <CarouselHeader />
      <CarouselBody
        planetsRef={planets}
        orbitsRef={orbitsRef}
        event={events[eventId]}
      />
    </div>
  );
};

export default Carousel;