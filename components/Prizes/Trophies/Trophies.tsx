import "@/components/Prizes/prizes.css";
import Cup from "@/components/Prizes/Trophies/Cup";

const Trophies = () => {
  return (
    <>
      <div className="hidden md:flex p-2 gap-4 w-full h-fit items-center justify-evenly z-10">
        <Cup
          cupImage={"/SilverCup.svg"}
          cupColor={"silver"}
          className={"mt-16"}
          prize={"2nd Prize"}
        />
        <Cup
          cupImage={"/GoldenCup.svg"}
          cupColor={"gold"}
          className={"mt-0"}
          prize={"1st Prize"}
        />
        <Cup
          cupImage={"/BronzeCup.png"}
          cupColor={"bronze"}
          className={"mt-32"}
          prize={"3rd Prize"}
        />
      </div>
      <div className="flex flex-col md:hidden p-4 gap-8 w-full h-fit items-center justify-start">
        <Cup
          cupImage={"/GoldenCup.svg"}
          cupColor={"gold"}
          className={"mt-6 group/gold"}
          prize={"1st Prize"}
        />
        <Cup
          cupImage={"/SilverCup.svg"}
          cupColor={"silver"}
          className={"group/silver"}
          prize={"2nd Prize"}
        />
        <Cup
          cupImage={"/BronzeCup.png"}
          cupColor={"bronze"}
          className={"group/bronze"}
          prize={"3rd Prize"}
        />
      </div>
    </>
  );
};

export default Trophies;
