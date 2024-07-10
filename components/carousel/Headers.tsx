import { Event } from "@/data/caraousel";
interface HeadersProps {
  event: Event;
}
const Headers = ({ event }: HeadersProps) => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly md:grid  md:grid-cols-5 w-fit h-fit gap-2 sm:gap-4 md:gap-8 gap-x-20 p-2 z-10 items-baseline">
        <h1 className="p-4 text-2xl basis-full md:text-3xl lg:text-4xl col-span-2  md:col-span-5 text-center">
          {event.name}
        </h1>

        <div className="flex-1 ">
          <h2 className="opacity-70 text-md sm:text-lg md:text-xl lg:text-2xl">
            Participants
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl">
            {event.participants}
          </p>
        </div>

        <div className="flex-1 ">
          <h2 className="opacity-70 text-md sm:text-lg md:text-xl lg:text-2xl">
            Duration
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl">
            {event.duration}
          </p>
        </div>
        <div className="flex-1 ">
          <h2 className="opacity-70 text-md sm:text-lg md:text-xl lg:text-2xl">
            Projects
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl">
            {event.projects}
          </p>
        </div>
        <div className="flex-1 ">
          <h2 className="opacity-70 text-md sm:text-lg md:text-xl lg:text-2xl">
            Team Size
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl">
            {event["team-size"]}
          </p>
        </div>
        <div className="flex-1 ">
          <h2 className="opacity-70 text-md sm:text-lg md:text-xl lg:text-2xl">
            Type
          </h2>
          <p className="text-sm sm:text-md md:text-lg lg:text-xl">
            {event.type}
          </p>
        </div>
      </div>
    </>
  );
};

export default Headers;
