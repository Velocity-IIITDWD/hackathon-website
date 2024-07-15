import { Event } from "@/data/carousel";
interface CarouselHeaderProps {
  event: Event;
}
const CarouselHeader = ({ event }: CarouselHeaderProps) => {
  return (
    <>
      <div className="grid mt-2 justify-items-center gap-4 grid-cols-12 w-full min-h-fit p-2 z-10 items-baseline">
        <h1
          className="p-4 text-xl basis-full md:text-2xl lg:text-3xl font-bold col-span-12 text-center"
          id="eventName"
        >
          {event.name}
        </h1>

        <div className="col-span-4 md:col-start-2 md:col-span-2">
          <h2 className="opacity-70 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl">
            Participants
          </h2>
          <p className="text-[0.5rem] xs:text-xs sm:text-sm md:text-md lg:text-lg">
            {event.participants}
          </p>
        </div>

        <div className="col-span-4 md:col-span-2">
          <h2 className="opacity-70 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl">
            Duration
          </h2>
          <p className="text-[0.5rem] xs:text-xs sm:text-sm md:text-md lg:text-lg">
            {event.duration}
          </p>
        </div>
        <div className="col-span-4 md:col-span-2">
          <h2 className="opacity-70 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl">
            Projects
          </h2>
          <p className="text-[0.5rem] xs:text-xs sm:text-sm md:text-md lg:text-lg">
            {event.projects}
          </p>
        </div>
        <div className="col-span-4 col-start-3 md:col-start-auto md:col-span-2">
          <h2 className="opacity-70 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl">
            Team Size
          </h2>
          <p className="text-[0.5rem] xs:text-xs sm:text-sm md:text-md lg:text-lg">
            {event["team-size"]}
          </p>
        </div>
        <div className="col-span-4 md:col-start-auto md:col-span-2">
          <h2 className="opacity-70 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl">
            Type
          </h2>
          <p className="text-[0.5rem] xs:text-xs sm:text-sm md:text-md lg:text-lg">
            {event.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default CarouselHeader;
