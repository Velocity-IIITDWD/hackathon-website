import Image from "next/image";
import PurplePlanet from "@/public/Purple Planet.png";
const Content = () => {
  return (
    <>
      <div
        className="flex-grow w-full h-3/4"
        style={{ backgroundImage: "url(@/public/Purple Planet.png)" }}
      ></div>
    </>
  );
};

export default Content;
