"use client";
import { useEffect, useRef, useState } from "react";
import CarouselHeader from "@/components/carousel/CarouselHeader";
import CarouselBody from "./CarouselBody";
import { events } from "@/data/carousel";
import { useAnimateCarousel } from "./AnimateCarousel";
import Image from "next/image";
import TopButton from "./TopButton";
import stars from "@/public/Stars Animate.svg";

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

  return (
    <div
      ref={carouselRef}
      className="relative py-16 flex flex-col items-center w-full h-full min-h-[100dvh] bg-gradient-carousel overflow-clip gap-2"
    >
      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full"
        ref={starsRef}
      />
      <h1
        className="text-2xl md:text-3xl lg:text-5xl pt-2 p-4 text-center font-bold backdrop-blur-sm "
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Technologies
      </h1>
      <div className="max-w-6xl my-10 flex-col gap-4 flex md:flex-row items-center w-full justify-evenly">
        <TopButton
          setEventId={setEventId}
          number={0}
          color={"Purple"}
          title={"Fin Tech"}
          id={eventId}
        />

        <TopButton
          setEventId={setEventId}
          number={1}
          color={"Yellow"}
          title={"Healthcare & BioInformation"}
          id={eventId}
        />
        <TopButton
          setEventId={setEventId}
          number={2}
          color={"Green"}
          title={"Supply chain Management & Logistics"}
          id={eventId}
        />
        <TopButton
          setEventId={setEventId}
          number={3}
          color={"Blue"}
          id={eventId}
          title={"Sustainability & Green Tech"}
        />
        {/* <TopButton
          setEventId={setEventId}
          number={4}
          id={eventId}
          color={"Blue"}
          title={"Open Category"}
        /> */}
      </div>
      <CarouselHeader />
      <CarouselBody event={events[eventId]} />
    </div>
  );
};

export default Carousel;
