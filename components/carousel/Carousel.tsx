"use client";
import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import PurplePlanet from "@/public/Purple Planet.png";
import GreenPlanet from "@/public/Green Planet.png";
import YellowPlanet from "@/public/Yellow Planet.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Headers from "@/components/carousel/Headers";
import Content from "./Content";
const Carousel = () => {
  const carousel = useRef(null);
  const orbits = useRef(null);
  let temp = 0;
  const t1 = gsap.timeline();
  const { contextSafe } = useGSAP({ scope: carousel });

  const onLeftClick = contextSafe(() => {
    temp = (temp + 1) % 4;
    if (temp) {
      t1.to(orbits?.current, { rotation: "+=25", ease: "back.out" });
    } else {
      t1.to(orbits?.current, { rotation: 0, ease: "back.out" });
    }
  });

  const onRightClick = contextSafe(() => {
    temp = (temp - 1) % 4;
    if (temp) {
      t1.to(orbits?.current, { rotation: "-=25", ease: "back.out" });
    } else {
      t1.to(orbits?.current, { rotation: 0, ease: "back.out" });
    }
  });

  return (
    <div
      ref={carousel}
      id="carousel"
      className="flex justify-between relative items-center w-full h-full bg-gradient-carousel overflow-y-visible overflow-x-clip"
    >
      <div className="relative bottom-1/3 -left-40 grid grid-cols-4 justify-center items-center w-3/12 z-10">
        <button onClick={onLeftClick} className="w-full col-span-3">
          <Image src={GreenPlanet} alt={""} className="w-full" />
        </button>
        <span className="relative w-fit text-nowrap">Lorem Ipsum</span>
      </div>
      <div className="fixed top-40 left-14 right-14">
        <Image src={solarSystem} alt={""} className="w-full" ref={orbits} />
      </div>
      <div className="flex flex-col self-start justify-center items-center my-20 z-10">
        <Headers />
        <Content />
      </div>

      <div className="relative h-full flex justify-center items-center w-1/6 z-10">
        <span className="text-nowrap ">Lorem Ipsum</span>
        <button onClick={onRightClick} className="bg-red-700 w-full h-1/4">
          {/* <Image src={YellowPlanet} alt={""} className="w-full" /> */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
