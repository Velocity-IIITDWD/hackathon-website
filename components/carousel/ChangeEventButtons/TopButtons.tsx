import Image from "next/image";
import { Event } from "@/data/carousel";

interface EventNavBarProps {
  events: Event[];
  eventId: number;
  onClick: (num: number) => void;
}

const colors = (color: string) => {
  let main = "";
  let sec = "";
  if (color === "purple") {
    main = "#7A4DDB";
    sec = "#301435";
  } else if (color === "yellow") {
    main = "#FEE55C";
    sec = "#323514";
  } else if (color === "green") {
    main = "#5B976D";
    sec = "#143521";
  } else if (color === "red") {
    main = "#FF474A";
    sec = "#351414";
  } else {
    main = "#05518F";
    sec = "#142935";
  }

  return [main, sec];
};

const EventNavbar = ({ events, eventId, onClick }: EventNavBarProps) => {
  return (
    <div className="grid grid-cols-6 md:flex p-2 w-full h-fit gap-4 sm:gap-8 lg:gap-24 items-stretch place-items-center justify-center mx-2 px-4 z-20">
      {events.map((event) => {
        const [main, sec] = colors(event.color);
        return (
          <button
            onClick={() => onClick(parseInt(event.id))}
            key={event.id}
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${main}, ${sec}, ${main})`,
            }}
            className={
              "rounded-lg col-span-2 w-24 xs:w-32 sm:w-36 h-24 xs:h-32 md:h-[160px] p-[1px] transition ease-in focus:p-[3px] cursor-pointer" +
              (event.id === "3" ? " col-start-2" : "")
            }
          >
            <div className="flex flex-col items-center w-full justify-center h-full bg-gradient-carousel rounded-lg  ">
              <div
                className={
                  ` planet-image-${event.id}` +
                  " relative flex items-center justify-center"
                }
              >
                <Image
                  src={event.planet}
                  alt={""}
                  width={0}
                  height={0}
                  sizes="100%"
                  className={"w-9/12 relative top-[1.1px] -left-[2px]"}
                />
              </div>
              <span
                className={
                  "relative -top-2 text-[8px] xs:text-[10px] md:text-sm flex-1 text-center p-0.5 flex items-center justify-center w-fit " +
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
