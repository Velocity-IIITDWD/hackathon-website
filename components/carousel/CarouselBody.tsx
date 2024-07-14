import Image from "next/image";
import { RefObject } from "react";
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
      <div className="flex relative w-full md:w-[60vw] x:w-3/4 flex-grow justify-center items-center flex-col">
        <div className="relative flex items-center w-11/12 xs:w-9/12 sm:w-full md:w-10/12 lg:w-full top-0 bottom-0 right-0 left-0 m-auto">
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
        <div className="absolute top-1/4 grid grid-cols-2 w-fit justify-items-center font-bold gap-2 sm:gap-4 lg:gap-6 xl:gap-8 text-sm sm:text-md md:text-lg xl:text-2xl z-10">
          <div className="col-span-2 ">Prizes</div>
          <div className="col-span-2 ">1st *****</div>
          <div className="">2nd ***</div>
          <div className="">3rd ***</div>
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
