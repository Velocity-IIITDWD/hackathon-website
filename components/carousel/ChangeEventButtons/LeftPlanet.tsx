import { Event } from "@/data/carousel";
import Image from "next/image";

interface LeftPlanetProps {
  onClick: () => void;
  events: Event[];
  eventId: number;
}

export const LeftPlanet = ({ onClick, events, eventId }: LeftPlanetProps) => {
  return (
    <div className="relative hidden sm:flex right-[8%] justify-center items-center w-[20vw] z-10">
      <button onClick={onClick} className="w-[80%]">
        <Image
          src={events[(eventId + 3) % 4].planet}
          alt={""}
          width={0}
          height={0}
          sizes="100%"
          className="w-full"
        />
      </button>
      <span className="text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl w-[20%] text-start opacity-80">
        {events[(eventId + 3) % 4].name}
      </span>
    </div>
  );
};
