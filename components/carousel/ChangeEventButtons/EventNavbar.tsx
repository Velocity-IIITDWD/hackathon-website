import Image from "next/image";
import { Event } from "@/data/carousel";

interface EventNavBarProps {
  events: Event[];
  eventId: number;
  onClick: (num: number) => void;
}

const EventNavbar = ({ events, eventId, onClick }: EventNavBarProps) => {
  return (
    <div className="grid grid-cols-4 w-96 h-[100px] gap-6 items-center place-items-center justify-center mx-2 px-4">
      {events.map((event) => {
        return (
          <button
            onClick={() => onClick(parseInt(event.id))}
            key={event.id}
            className={
              "flex flex-col items-center w-full h-full rounded-lg bg-border-carousel text-wrap justify-center p-[1px] transition ease-in focus:p-[2px] "
            }
          >
            <div className="flex flex-col items-center w-full h-full bg-gradient-carousel rounded-lg  ">
              <Image
                src={event.planet}
                alt={""}
                width={0}
                height={0}
                sizes="100%"
                className={
                  "w-full object-cover -mt-[7%] -ml-[3%] " +
                  ` planet-image-${event.id}`
                }
              />
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
