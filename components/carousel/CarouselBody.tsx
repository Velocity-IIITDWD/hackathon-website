import Image from "next/image";
import { RefObject, useEffect } from "react";
import { Event } from "@/data/carousel";
import RegisterButton from "@/components/carousel/RegisterButton";

interface CarouselBodyProps {
  planetsRef: RefObject<HTMLImageElement>;
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

const CarouselBody = ({ planetsRef, event }: CarouselBodyProps) => {
  const btnColor = getRegister(event.color);

  return (
    <>
      <div className="flex relative w-full md:w-[80vw] x:w-3/4 flex-grow justify-center items-center flex-col">
        <div className="relative flex items-center w-11/12 xs:w-9/12 sm:w-11/12 md:w-full lg:w-full top-0 bottom-0 right-0 left-0 m-auto">
          <Image
            ref={planetsRef}
            src={event.planet}
            alt={""}
            height={0}
            width={0}
            sizes="100%"
            className={"w-full -mt-[7%] -ml-[3%] "}
          />
        </div>
        <div
          style={{
            textShadow:
              "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
          }}
          className="absolute top-1/4 grid grid-cols-2 w-fit justify-items-center font-bold gap-2 sm:gap-4 lg:gap-6 xl:gap-8 text-sm  md:text-lg xl:text-2xl 2xl:text-4xl z-10 eventInfo"
        >
          <div className="col-span-2">Prizes</div>
          <div className="col-span-2 text-[#FFD700]">1st {event.prizes[0]}</div>
          <div className="text-[#C0C0C0]">2nd {event.prizes[1]}</div>
          <div className="text-[#CD7F32]">3rd {event.prizes[2]}</div>
          <RegisterButton
            backgroundColor={btnColor[0]}
            foregroundColor={btnColor[1]}
          />
        </div>
      </div>
    </>
  );
};

export default CarouselBody;
