import Image from "next/image";
import { RefObject, useEffect } from "react";
import { Event } from "@/data/carousel";
import RegisterButton from "@/components/carousel/RegisterButton";
import solarSystem from "@/public/Space.svg";

interface CarouselBodyProps {
  event: Event;
  orbitsRef: RefObject<HTMLImageElement>;
  planetsRef: RefObject<HTMLImageElement>;
}

const getRegister = (color: string) => {
  switch (color) {
    case "blue":
      return ["bg-[#8DA3EF]", "bg-[#506DD3]"];
    case "yellow":
      return ["bg-[#EFEB8D]", "bg-[#D38750]"];
    case "purple":
      return ["bg-[#DC8DEF]", "bg-[#D350CE]"];
    case "green":
      return ["bg-[#A7EF8D]", "bg-[#30B756]"];
    case "red":
      return ["bg-[#EF8D8F]", "bg-[#B73032]"];
    default:
      return ["bg-[#A7EF8D]", "bg-[#A7EF8D]"];
  }
};

const CarouselBody = ({ event, orbitsRef, planetsRef }: CarouselBodyProps) => {
  const btnColor = getRegister(event.color);

  return (
    <div className="relative flex w-full items-center justify-center [&_*]:z-10">
      <Image
        src={solarSystem}
        ref={orbitsRef}
        alt={""}
        className="absolute w-full max-w-7xl 2xl:-translate-y-[5%]"
      />
      <div className="flex relative h-fit  -translate-y-[6%] sm:-translate-y-[10%] xl:-translate-y-[18%] w-full lg:w-[80%] xl:w-[65%] 2xl:w-[55%] items-center justify-center">
        <Image
          ref={planetsRef}
          src={event.planet}
          alt={""}
          height={0}
          width={0}
          sizes="100%"
          className={
            "w-full scale-[1.4] xs:scale-125 sm:scale-100 relative -left-[1rem] xs:-left-[1.5rem]"
          }
        />
        <div className="absolute sm:-top-16 max-w-lg h-full w-3/5 flex flex-col items-center justify-center text-center">
          <div
            id="eventName"
            style={{
              textShadow:
                "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
            }}
            className="text-[clamp(20px,4dvw,40px)] w-3/4 font-semibold"
          >
            {event?.name}
          </div>
          <div className="drop-shadow-none text-sm sm:text-lg">
            {event?.body}
          </div>
          <RegisterButton
            backgroundColor={btnColor[0]}
            foregroundColor={btnColor[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselBody;
