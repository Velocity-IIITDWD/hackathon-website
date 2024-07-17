import Image from "next/image";
import { Event } from "@/data/carousel";

interface EventNavBarProps {
  events: Event[];
  eventId: number;
  onClick: (num: number) => void;
}

const EventNavbar = ({ events, eventId, onClick }: EventNavBarProps) => {
  return (
    <div className="grid grid-cols-4 w-full h-[122px] gap-4 items-stretch place-items-center justify-center mx-2 px-4 z-10">
      {events.map((event) => {
        return (
          <button
            onClick={() => onClick(parseInt(event.id))}
            key={event.id}
            className={
              "rounded-lg bg-border-carousel w-[78px] xs:w-24 h-full p-[1px] transition ease-in focus:p-[2px] "
            }
          >
            <div className="flex flex-col items-center w-full justify-center h-full bg-gradient-carousel rounded-lg  ">
              <div className={` planet-image-${event.id}` + " relative"}>
                <Image
                  src={event.planet}
                  alt={""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className={"w-full relative top-[1.1px] -left-[2px]"}
                />
              </div>
              <span
                className={
                  "text-[8px] xs:text-[10px] flex-1 text-center p-0.5 flex items-center justify-center w-fit " +
                  ` event-name-${event.id}`
                }
              >
                {event.name}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default EventNavbar;
