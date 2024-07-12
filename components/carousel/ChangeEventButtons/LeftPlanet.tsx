import { Event } from "@/data/carousel";
import Image from "next/image";

interface LeftPlanetProps {
  onClick: () => void;
  events: Event[];
  eventId: number;
}

export const LeftPlanet = ({ onClick, events, eventId }: LeftPlanetProps) => {
  return (
    <button
      onClick={onClick}
      className="relative hidden self-center sm:flex h-1/4 justify-center -translate-x-[40%] items-center w-[20vw] z-10"
    >
      <Image
        src={events[(eventId + 3) % 4].planet}
        alt={""}
        width={0}
        height={0}
        sizes="100%"
        className="lg:w-[80%] w-[90%]"
      />
      <span className="text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl w-[10%] lg:w-[20%] text-start opacity-80">
        {events[(eventId + 3) % 4].name}
      </span>
    </button>
  );
};
