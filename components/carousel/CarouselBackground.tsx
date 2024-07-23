import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import stars from "@/public/Stars Animate.svg";
import { RefObject } from "react";
import { Event } from "@/data/carousel";
interface BackgroundProps {
  orbitsRef: RefObject<HTMLImageElement>;
  starsRef: RefObject<HTMLImageElement>;
}
const CarouselBackground = ({ orbitsRef, starsRef }: BackgroundProps) => {
  return (
    <>
      <div className="absolute w-full h-full scale-150 z-0">
        <Image src={stars} alt={""} className="w-full h-full" ref={starsRef} />
      </div>
      <Image
        src={solarSystem}
        alt={""}
        className="w-full max-w-4xl"
        ref={orbitsRef}
      />
    </>
  );
};

export default CarouselBackground;
