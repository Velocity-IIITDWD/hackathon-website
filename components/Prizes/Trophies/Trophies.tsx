import "@/components/Prizes/prizes.css";
import Cup from "@/components/Prizes/Trophies/Cup";

const Trophies = () => {
  return (
    <>
      <div className="hidden md:flex p-4 gap-8 w-full h-fit items-center justify-evenly z-10">
        <Cup
          cupImage={"/SilverCup.svg"}
          cupColor={"silver"}
          bgColor={"#7C7683"}
          className={"mt-24 group/silver"}
          prize={"2nd Prize"}
        />
        <Cup
          cupImage={"/GoldenCup.svg"}
          cupColor={"gold"}
          bgColor={"#E5810A"}
          className={"mt-0 group/gold"}
          prize={"1st Prize"}
        />
        <Cup
          cupImage={"/BronzeCup.svg"}
          cupColor={"bronze"}
          bgColor={"#C76C23"}
          className={"mt-48 group/bronze"}
          prize={"3rd Prize"}
        />
      </div>
      <div className="flex flex-col md:hidden p-8 gap-16 w-full h-fit items-center justify-evenly">
        <Cup
          cupImage={"/GoldenCup.svg"}
          cupColor={"gold"}
          bgColor={"#E5810A"}
          className={"mt-24 group/gold"}
          prize={"1st Prize"}
        />
        <Cup
          cupImage={"/SilverCup.svg"}
          cupColor={"silver"}
          bgColor={"#7C7683"}
          className={"group/silver"}
          prize={"2nd Prize"}
        />
        <Cup
          cupImage={"/BronzeCup.svg"}
          cupColor={"bronze"}
          bgColor={"#C76C23"}
          className={"group/bronze"}
          prize={"3rd Prize"}
        />
      </div>
    </>
  );
};

export default Trophies;
