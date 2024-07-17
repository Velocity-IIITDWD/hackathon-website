import { Event } from "@/data/carousel";
import Image from "next/image";

interface RightPlanetProps {
  onClick: () => void;
  events: Event[];
  eventId: number;
}

export const RightPlanet = ({ onClick, events, eventId }: RightPlanetProps) => {
  return (
    <button
      onClick={onClick}
      className="relative hidden self-center h-1/4 sm:flex sm:flex-row-reverse justify-center items-center w-[20vw] z-10 buttons"
    >
      <Image
        src={events[(eventId + 1) % 4].planet}
        alt={""}
        width={0}
        height={0}
        sizes="100%"
        className="w-full translate-x-[40%]"
      />
      <span
        className="absolute text-start text-wrap text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl opacity-80 w-20 md:w-32 xl:w-40  -left-[40%] lg:-left-[20%] xl:-left-[5%] 2xl:left-0
        "
      >
        {events[(eventId + 1) % 4].name}
      </span>
    </button>
  );
};
