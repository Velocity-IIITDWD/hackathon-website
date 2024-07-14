import Image from "next/image";
import { Event } from "@/data/carousel";

interface EventNavBarProps {
  events: Event[];
  eventId: number;
  onClick: (num: number) => void;
}

const EventNavBar = ({ events, eventId, onClick }: EventNavBarProps) => {
  return (
    <div className="grid grid-cols-12 w-full h-fit gap-4 items-baseline justify-center mx-2 px-4 p-2">
      {events.map((event) => {
        return (
          <button
            onClick={() => onClick(parseInt(event.id))}
            key={event.id}
            className={
              "flex flex-col col-span-3 items-center w-full h-full rounded-lg bg-border-carousel text-wrap justify-center " +
              (event.id === eventId.toString() ? "p-[2px]" : "p-[0.8px]")
            }
          >
            <div className="flex flex-col items-center w-full h-full rounded-lg bg-gradient-carousel ">
              <Image
                src={event.planet}
                alt={""}
                width={0}
                height={0}
                sizes="150%"
                className={
                  "w-full object-cover -mt-[7%] -ml-[3%] " +
                  ` planet-image-${event.id}`
                }
              />
              <span
                className={
                  "text-[9px] flex-1 text-center p-0.5 flex items-center justify-center text-wrap w-full " +
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

export default EventNavBar;
