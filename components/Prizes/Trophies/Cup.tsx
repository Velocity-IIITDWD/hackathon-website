import Image from "next/image";
interface CupProps {
  cupImage: string;
  cupColor: string;
  className: string;
  prize: string;
}
const Cup = ({ prize, cupImage, cupColor, className }: CupProps) => {
  return (
    <div
      className={
        "relative w-4/5 sm:w-3/5 md:w-[30%] lg:w-1/4 xl:w-1/5 py-2 flex flex-col items-center justify-center cup-div before:transition before:duration-300 before:ease-in before:delay-75 hover:before:opacity-70 border-l-2 border-r-2 group " +
        className
      }
    >
      <div
        className={
          "w-full bg-inherit p-4 cup-container grid-lines-bg flex flex-col bg-gradient-carousel items-center justify-center text-2xl md:text-xl lg:text-2xl 2xl:text-3xl " +
          `${cupColor}`
        }
      >
        <Image
          src={cupImage}
          alt={""}
          width={0}
          height={0}
          sizes="100%"
          className={
            "w-9/12 transition duration-300 ease-in group-hover:-translate-y-20 "
          }
        />
        <span
          className={
            "pb-4 text-center transition duration-300 ease-in group-hover:-translate-y-20"
          }
        >
          {prize}
        </span>
        <span
          className={
            "pb-4 font-bold w-full text-center invisible transition-opacity delay-150 ease-in duration-300 opacity-0 group-hover:visible group-hover:-translate-y-16 group-hover:opacity-100"
          }
        >
          Prizes Details and Amount
        </span>
      </div>
    </div>
  );
};

export default Cup;
