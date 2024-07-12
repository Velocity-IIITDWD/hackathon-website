import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import stars from "@/public/Stars Animate.svg";
import { RefObject } from "react";
import { Event } from "@/data/carousel";
interface BackgroundProps {
  event: Event;
  orbitsRef: RefObject<HTMLImageElement>;
  starsRef: RefObject<HTMLImageElement>;
}
const CarouselBackground = ({
  event,
  orbitsRef,
  starsRef,
}: BackgroundProps) => {
  return (
    <>
      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full flex top-0 left-0 scale-150"
        ref={starsRef}
      />
      <Image
        src={solarSystem}
        alt={""}
        className="w-full md:w-10/12 lg:w-9/12  md:-mt-[5%]"
        ref={orbitsRef}
      />
    </>
  );
};

export default CarouselBackground;
