import Image from "next/image";
import PurplePlanet from "@/public/Purple Planet.png";
import star from "@/public/Star.png";
import { ForwardedRef, forwardRef, useRef } from "react";
import { Event } from "@/data/caraousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ContentProps {
  planetsRef: ForwardedRef<HTMLImageElement>;
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

const Content = ({ planetsRef, event }: ContentProps) => {
  const btnColor = getRegister(event.color);
  return (
    <>
      <div className="flex relative w-[60vw] flex-grow content-center items-center flex-col">
        <div className="absolute flex items-start w-full xs:w-9/12 sm:w-full lg:w-10/12 xl:w-3/4 top-0 bottom-0 right-0 left-0 m-auto">
          <Image
            ref={planetsRef}
            src={event.planet}
            alt={""}
            height={0}
            width={0}
            sizes="100%"
            className="w-full -mt-[7%] -ml-[3%] object-cover object-top"
          />
        </div>
        <div className="mt-[13%] sm:mt-[12%] md:mt-[15%] lg:mt-[18%] xl:mt-[15%] grid grid-cols-2 w-fit justify-items-center font-bold gap-2 sm:gap-4 lg:gap-6 xl:gap-8 text-sm sm:text-md md:text-lg xl:text-2xl z-10">
          <div className="col-span-2 ">Prizes</div>
          <div className="col-span-2 ">1st *****</div>
          <div className="">2nd ***</div>
          <div className="">3rd ***</div>
          <div
            className={
              "relative group w-fit flex col-span-2 mt-2 lg:mt-4 text-center rounded-lg text-sm sm:text-md md:text-lg xl:text-2xl font-normal " +
              btnColor[0]
            }
          >
            <div
              className={
                "w-full h-full py-2 px-7 md:py-4 md:px-14 rounded-lg transition ease-in-out duration-300 delay-150 group-hover:translate-x-2 group-hover:-translate-y-2 overflow-clip " +
                btnColor[1]
              }
            >
              <span>Register</span>
              <div
                className={
                  "absolute right-0 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 " +
                  btnColor[0]
                }
              />
              <div
                className={
                  "absolute right-4 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 " +
                  btnColor[0]
                }
              />
              <div
                className={
                  "absolute right-8 top-12 rotate-12 h-[110%] w-1/12 transition ease-in-out duration-300 delay-150 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:translate-x-4  "
                }
              >
                <Image src={star} alt={""} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
