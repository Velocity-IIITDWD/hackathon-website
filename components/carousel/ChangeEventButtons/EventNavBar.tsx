import Image from "next/image";
import greenPlanet from "@/public/Green Planet.png";
import bluePlanet from "@/public/Blue Planet.png";
import yellowPlanet from "@/public/Yellow Planet.png";
import purplePlanet from "@/public/Purple Planet.png";
const EventNavBar = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-2 items-center px-4">
      <div className="bg-red-500">
        <Image src={greenPlanet} alt={""} />
      </div>
      <div className="bg-red-500">
        <Image src={bluePlanet} alt={""} />
      </div>
      <div className="bg-red-500">
        <Image src={yellowPlanet} alt={""} />
      </div>
      <div className="bg-red-500">
        <Image src={purplePlanet} alt={""} />
      </div>
    </div>
  );
};

export default EventNavBar;
