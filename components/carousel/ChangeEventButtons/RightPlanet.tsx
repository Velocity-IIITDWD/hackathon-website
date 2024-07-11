import { Event } from "@/data/carousel";
import Image from "next/image";

interface RightPlanetProps {
  onClick: () => void;
  events: Event[];
  eventId: number;
}

export const RightPlanet = ({ onClick, events, eventId }: RightPlanetProps) => {
  return (
    <div className="relative hidden sm:flex sm:flex-row-reverse justify-center items-center left-[8%] w-[20vw] z-10">
      <button onClick={onClick} className="w-[80%]">
        <Image
          src={events[(eventId + 1) % 4].planet}
          alt={""}
          width={0}
          height={0}
          sizes="100%"
          className="w-full"
        />
      </button>
      <span
        className="text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl text-start opacity-80 w-[20%] relative right-[40%] lg:right-[30%] xl:right-[20%] 2xl:right-[5%]
    "
      >
        {events[(eventId + 1) % 4].name}
      </span>
    </div>
  );
};
