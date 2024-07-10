import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import stars from "@/public/Star Animate.png";
import blueRectangle from "@/public/blueRectangle.png";
import yellowRectangle from "@/public/yellowRectangle.png";
import purpleRectangle from "@/public/purpleRectangle.png";
import greenRectangle from "@/public/greenRectangle.png";
import { Event } from "@/data/caraousel";
import { ForwardedRef } from "react";

interface BackgroundProps {
  event: Event;
  orbitsRef: ForwardedRef<HTMLImageElement>;
  starsRef: ForwardedRef<HTMLImageElement>;
}
const Background = ({ event, orbitsRef, starsRef }: BackgroundProps) => {
  return (
    <>
      <div className="absolute top-52 sm:top-40 bottom-0 right-0 left-0 sm:-left-3  m-auto w-full sm:w-3/4 md:w-2/3">
        <Image src={solarSystem} alt={""} className="w-full" ref={orbitsRef} />
      </div>
      <div className="absolute w-1/3 top-0 left-0">
        <Image src={stars} alt={""} className="w-full" ref={starsRef} />
      </div>
      <div className="absolute -top-80 -left-80 w-3/4">
        <Image
          src={yellowRectangle}
          alt={""}
          width={0}
          height={0}
          sizes="100%"
          className="w-full absolute "
        />
      </div>
    </>
  );
};

export default Background;
