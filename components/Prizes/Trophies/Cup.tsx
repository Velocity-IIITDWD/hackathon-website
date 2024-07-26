import Image from "next/image";
interface CupProps {
  cupImage: string;
  cupColor: string;
  bgColor: string;
  className: string;
  prize: string;
}
const Cup = ({ prize, cupImage, cupColor, bgColor, className }: CupProps) => {
  return (
    <div
      className={
        "relative md:w-[30%] lg:w-1/5 py-2 flex flex-col items-center justify-center cup-div before:transition before:duration-300 before:ease-in before:delay-75 hover:before:bg-transparent border-l-2 border-r-2 " +
        className
      }
    >
      <div
        className={
          "w-full bg-inherit p-4 cup-container  grid-lines-bg flex flex-col group-hover/silver:bg-[#7C7683] bg-gradient-carousel items-center justify-center text-2xl md:text-xl lg:text-2xl 2xl:text-3xl " +
          `group-hover/${cupColor}:straight-lines-bg group-hover/${cupColor}:bg-[${bgColor}]`
        }
      >
        <Image
          src={cupImage}
          alt={""}
          width={0}
          height={0}
          sizes="100%"
          className={
            "w-9/12 transition duration-300 ease-in " +
            ` group-hover/${cupColor}:-translate-y-20`
          }
        />
        <span
          className={
            "bg-transparent pb-4 text-center transition duration-300 ease-in " +
            `group-hover/${cupColor}:-translate-y-20`
          }
        >
          {prize}
        </span>
        <span
          className={
            "bg-transparent pb-4 font-bold w-full text-center invisible transition-opacity delay-150 ease-in duration-300 opacity-0 " +
            `group-hover/${cupColor}:visible group-hover/${cupColor}:-translate-y-16 group-hover/${cupColor}:opacity-100`
          }
        >
          Prizes Details and Amount
        </span>
      </div>
    </div>
  );
};

export default Cup;
