import { Event } from "@/data/caraousel";
interface HeadersProps {
  event: Event;
}
const Headers = ({ event }: HeadersProps) => {
  return (
    <>
      <div className="grid grid-cols-5 w-fit h-fit gap-8 gap-x-20 my-20 z-10 bg-slate-800">
        <h1 className="p-4 text-5xl col-span-5 text-center">{event.name}</h1>
        <div>
          <h2 className="opacity-70 text-xl">Participants</h2>
          <p className="text-2xl">{event.participants}</p>
        </div>
        <div>
          <h2 className="opacity-70 text-xl">Duration</h2>
          <p className="text-2xl">{event.duration}</p>
        </div>
        <div>
          <h2 className="opacity-70 text-xl">Projects</h2>
          <p className="text-2xl">{event.projects}</p>
        </div>
        <div>
          <h2 className="opacity-70 text-xl">Team Size</h2>
          <p className="text-2xl">{event["team-size"]}</p>
        </div>
        <div>
          <h2 className="opacity-70 text-xl">Type</h2>
          <p className="text-2xl">{event.type}</p>
        </div>
      </div>
    </>
  );
};

export default Headers;
