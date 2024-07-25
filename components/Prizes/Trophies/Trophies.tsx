import Image from "next/image";
import "@/components/Prizes/prizes.css";
import SilverCup from "@/public/SilverCup.svg";
import GoldenCup from "@/public/GoldenCup.svg";
import BronzeCup from "@/public/BronzeCup.svg";

const Trophies = () => {
  return (
    <div className="flex p-4 gap-8 w-full h-fit items-center justify-evenly">
      <div className="relative mt-24 w-1/5 py-2 flex flex-col items-center justify-center cup-div before:transition before:duration-300 before:ease-in before:delay-75 hover:before:bg-transparent group/silver border-l-2 border-r-2">
        <div className="w-full bg-inherit p-4 cup-container group-hover/silver:straight-lines-bg grid-lines-bg flex flex-col group-hover/silver:bg-[#7C7683] bg-gradient-carousel items-center justify-center">
          <Image
            src={SilverCup}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-9/12 transition duration-300 ease-in group-hover/silver:-translate-y-20"
          />
          <span className="bg-transparent pb-4 text-3xl transition duration-300 ease-in group-hover/silver:-translate-y-20">
            2nd Prize
          </span>
          <span className="bg-transparent pb-4 text-2xl font-bold w-full text-center invisible transition-opacity delay-150 ease-in duration-300 opacity-0 group-hover/silver:visible group-hover/silver:-translate-y-16 group-hover/silver:opacity-100">
            Prizes Details and Amount
          </span>
        </div>
      </div>
      <div className="relative before:transition before:duration-300 before:ease-in before:delay-75 hover:before:bg-transparent mt-0 w-1/5 py-2 flex flex-col items-center justify-center cup-div group/gold border-l-2 border-r-2">
        <div className="w-full bg-inherit p-4 cup-container group-hover/gold:straight-lines-bg grid-lines-bg flex flex-col group-hover/gold:bg-[#E5810A] bg-gradient-carousel items-center justify-center">
          <Image
            src={GoldenCup}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-9/12 transition duration-300 ease-in group-hover/gold:-translate-y-20"
          />
          <span className="bg-transparent pb-4 text-3xl transition duration-300 ease-in group-hover/gold:-translate-y-20">
            1st Prize
          </span>
          <span className="bg-transparent pb-4 text-2xl font-bold w-full text-center invisible transition-opacity delay-150 ease-in duration-300 opacity-0 group-hover/gold:visible group-hover/gold:-translate-y-16 group-hover/gold:opacity-100">
            Prizes Details and Amount
          </span>
        </div>
      </div>
      <div className="relative before:transition before:duration-300 before:ease-in before:delay-75 hover:before:bg-transparent mt-48 w-1/5 py-2 flex flex-col items-center justify-center cup-div group/bronze border-l-2 border-r-2">
        <div className="w-full bg-inherit p-4 cup-container group-hover/bronze:straight-lines-bg grid-lines-bg flex flex-col group-hover/bronze:bg-[#C76C23] bg-gradient-carousel items-center justify-center">
          <Image
            src={BronzeCup}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-9/12 transition duration-300 ease-in group-hover/bronze:-translate-y-20"
          />
          <span className="bg-transparent pb-4 text-3xl transition duration-300 ease-in group-hover/bronze:-translate-y-20">
            3rd Prize
          </span>
          <span className="bg-transparent pb-4 text-2xl font-bold w-full text-center invisible transition-opacity delay-150 ease-in duration-300 opacity-0 group-hover/bronze:visible group-hover/bronze:-translate-y-16 group-hover/bronze:opacity-100">
            Prizes Details and Amount
          </span>
        </div>
      </div>
    </div>
  );
};

export default Trophies;
