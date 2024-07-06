"use client";
import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import PurplePlanet from "@/public/Purple Planet.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Headers from "@/components/carousel/Headers";
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

  return (
    <div
      ref={carousel}
      id="carousel"
      className="flex justify-between relative items-center w-full h-full bg-gradient-carousel overflow-y-visible overflow-x-clip"
    >
      <div className="relative h-full w-1/6 z-10">
        <button
          onClick={onLeftClick}
          className="bottom-1/3 w-full h-1/5 -left-1/2 p-0 absolute"
        >
          <Image src={PurplePlanet} alt={""} />
        </button>
      </div>

      <div className="fixed top-16 left-14">
        <Image src={solarSystem} alt={""} className="w-full" ref={orbits} />
      </div>
      <div className="flex flex-col self-start justify-center items-center my-20 z-10">
        <Headers />
      </div>

      <div className="relative h-full w-1/6 z-10">
        <button
          onClick={onLeftClick}
          className="bottom-1/3 w-full h-1/5 -right-1/2 p-0 absolute"
        >
          <Image src={PurplePlanet} alt={""} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
