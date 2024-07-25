import Image from "next/image";
import React from "react";

const colors = (color: string) => {
  let main = "";
  let sec = "";
  if (color === "Purple") {
    main = "#7A4DDB";
    sec = "#301435";
  } else if (color === "Yellow") {
    main = "#FEE55C";
    sec = "#323514";
  } else if (color === "Green") {
    main = "#5B976D";
    sec = "#143521";
  } else {
    main = "#05518F";
    sec = "#142935";
  }

  return [main, sec];
};

type TopButtonProps = {
  setEventId: (id: number) => void;
  color: string;
  title: string;
  number: number;
  id: number;
  starsAnimate: () => void;
  rotateOrbit: (value: string) => void;
  rotatePlanet: (value1: string, value2: string) => void;
};

export default function TopButton({
  setEventId,
  color,
  title,
  number,
  id,
  starsAnimate,
  rotateOrbit,
  rotatePlanet,
}: TopButtonProps) {
  const [main, sec] = colors(color);

  const handleClick = () => {
    starsAnimate();
    setEventId(number);
    if (id !== number) {
      rotatePlanet("90", "0");
      rotateOrbit("+=45");
    } else {
      rotatePlanet("-90", "0");
      rotateOrbit("-=45");
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${main}, ${sec}, ${main})`,
      }}
      className={`relative cursor-pointer w-40 aspect-square rounded z-[1]`}
    >
      <div
        className={`${
          number === id ? "scale-[0.94]" : "scale-[0.97]"
        } text-xs md:px-1 text-center px-2 relative z-[2] h-[99%] flex md:flex-col items-center justify-center rounded bg-gradient-to-t from-[#334C8D] to-[#0E1527]`}
      >
        <Image
          alt="image"
          src={`/${color} Planet.png`}
          width={0}
          sizes="100%"
          height={0}
          className={`${
            id === number
              ? "-translate-y-1/4 scale-[1.5]"
              : "scale-100 -translate-y-[20%]"
          } w-[70%] transition-all duration-500 absolute aspect-square`}
        />
        <div className="absolute px-2 bottom-2">{title}</div>
      </div>
    </div>
  );
}
