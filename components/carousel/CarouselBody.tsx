import Image from "next/image";
import { RefObject, useEffect } from "react";
import { Event } from "@/data/carousel";
import RegisterButton from "@/components/carousel/RegisterButton";
import solarSystem from "@/public/Space.svg";

interface CarouselBodyProps {
  event: Event;
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
    default:
      return ["", ""];
  }
};

const CarouselBody = ({ event }: CarouselBodyProps) => {
  const btnColor = getRegister(event.color);

  return (
    <div className="relative flex w-full items-center justify-center">
      <Image src={solarSystem} alt={""} className="absolute w-full max-w-5xl" />
      <div className="flex relative w-[70%] items-center justify-center aspect-square">
        <Image
          src={event.planet}
          alt={""}
          height={0}
          width={0}
          sizes="100%"
          className={"w-full relative -translate-x-[1rem]"}
        />
        <div
          style={{
            textShadow:
              "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
          }}
          className="absolute -top-6 max-w-lg h-full w-full flex flex-col items-center justify-center"
        >
          <div className="text-[clamp(24px,4dvw,44px)] font-semibold">
            {event?.name}
          </div>
          <div className="">{event?.body}</div>
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
