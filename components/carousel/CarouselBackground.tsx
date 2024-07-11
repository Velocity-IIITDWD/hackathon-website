import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import stars from "@/public/Stars Animate.svg";
import { RefObject } from "react";

interface BackgroundProps {
  orbitsRef: RefObject<HTMLImageElement>;
  starsRef: RefObject<HTMLImageElement>;
}

const CarouselBackground = ({ orbitsRef, starsRef }: BackgroundProps) => {
  return (
    <>
      <Image
        src={solarSystem}
        alt={""}
        className="w-full md:w-10/12 lg:w-9/12 xl:w-7/12 mt-[18%] md:mt-[5%]"
        ref={orbitsRef}
      />
      <div className="absolute w-full flex justify-between top-0 left-0">
        <Image src={stars} alt={""} className="w-full h-full" ref={starsRef} />
      </div>
    </>
  );
};

export default CarouselBackground;
