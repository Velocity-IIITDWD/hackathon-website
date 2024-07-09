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
      return ["bg-[#DC8DEF]", "bg-[#D350CE]"];
    case "yellow":
      return ["bg-[#DC8DEF]", "bg-[#D350CE]"];
    case "purple":
      return ["bg-[#DC8DEF]", "bg-[#D350CE]"];
    case "green":
      return ["bg-[#DC8DEF]", "bg-[#D350CE]"];
    default:
      return ["", ""];
      break;
  }
};

const Content = ({ planetsRef, event }: ContentProps) => {
  const regButtonRef = useRef(null);
  const regButtonTimeline = gsap.timeline();
  const { contextSafe } = useGSAP({ scope: regButtonRef });

  const onMouseEnter = contextSafe(() => {
    //   gsap.to(".regButtonLines", { transformOrigin: "", opacity: 0.6 });
    //   gsap.to("#regButtonStar", { yPercent: 1000 });
  });
  const onMouseLeave = contextSafe(() => {
    // gsap.to(".regButtonLines", { xPercent: 0, opacity: 0 });
  });
  const btnColor = getRegister(event.color);
  return (
    <>
      <div className="flex relative w-full flex-grow content-center items-center flex-col my-32">
        <div className="absolute w-[60rem] h-[60rem] -top-8">
          <Image
            src={event.planet}
            alt={""}
            ref={planetsRef}
            height={0}
            width={0}
            sizes="100%"
            className="w-full "
          />
        </div>
        <div className="absolute top-32 grid grid-cols-2 justify-items-center font-bold gap-8 md:text-2xl lg:text-4xl">
          <div className="col-span-2 ">Prizes</div>
          <div className="col-span-2 ">1st ***</div>
          <div className="">2nd ***</div>
          <div className="">3rd ***</div>
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={regButtonRef}
            className={
              "relative group flex col-span-2 my-32 text-center rounded-lg md:text-xl lg:text-2xl font-normal " +
              btnColor[0]
            }
          >
            <div
              className={
                "w-full h-full py-4 px-14 rounded-lg transition ease-in-out duration-300 delay-150 group-hover:translate-x-2 group-hover:-translate-y-2 overflow-clip " +
                btnColor[1]
              }
            >
              <span>Register</span>
              <div
                className={
                  "absolute right-0 -top-2 rotate-12 h-[120%] w-3 transition ease-in-out duration-300 delay-150 group-hover:-translate-x-44 group-hover:opacity-60 opacity-0 " +
                  btnColor[0]
                }
              />
              <div
                className={
                  "absolute right-4 -top-2 rotate-12 h-[120%] w-3 transition ease-in-out duration-300 delay-150 group-hover:-translate-x-44 group-hover:opacity-60 opacity-0 " +
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
