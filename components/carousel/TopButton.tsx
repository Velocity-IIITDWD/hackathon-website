import Image from "next/image";
import React from "react";

const colors = (color: string) => {
  var main = "";
  var sec = "";
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
};

export default function TopButton({
  setEventId,
  color,
  title,
  number,
  id,
}: TopButtonProps) {
  const [main, sec] = colors(color);

  return (
    <div
      onClick={() => setEventId(number)}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${main}, ${sec},${main})`,
      }}
      className={`relative cursor-pointer md:w-40 w-60 md:aspect-square rounded z-[1]`}
    >
      <div className="text-xs md:px-1 text-center px-2 relative z-[2] h-[99%] flex md:flex-col items-center justify-center rounded scale-[0.97] bg-gradient-to-t from-[#334C8D] to-[#0E1527]">
        <Image
          alt="image"
          src={`/${color} Planet.png`}
          width={0}
          sizes="100%"
          height={0}
          className={`${
            id === number
              ? "md:-translate-y-1/4 scale-[1.3] md:scale-[1.7]"
              : "scale-100 md:-translate-y-[20%]"
          } w-[70%] transition-all duration-500 md:absolute aspect-square`}
        />
        <div className="md:absolute px-2 bottom-2">{title}</div>
      </div>
    </div>
  );
}
