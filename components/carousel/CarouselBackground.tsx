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
      <div className="absolute w-full h-full scale-150 z-0">
        <Image src={stars} alt={""} className="w-full h-full" ref={starsRef} />
      </div>
      <Image
        src={solarSystem}
        alt={""}
        className="w-full lg:w-9/12  lg:-mt-[5%]"
        ref={orbitsRef}
      />
    </>
  );
};

export default CarouselBackground;
