import Image from "next/image";
import Trophies from "@/components/Prizes/Trophies/Trophies";
import GiftBox from "@/public/gift_box.png";
import TrackPrizes from "@/components/Prizes/TrackPrizes/TrackPrizes";

const Prizes = () => {
  return (
    <div
      id="prizes"
<<<<<<< HEAD
      className="scroll-mt-8 relative py-28 flex flex-col items-center w-full h-full min-h-[100dvh] bg-[#070b0d] overflow-clip gap-2"
      data-idx="2"
    >
      <h1 className="text-[3rem] mb-8 left-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
=======
      className="scroll-mt-8 relative py-16 flex flex-col items-center w-full h-full min-h-[100dvh] background-bg overflow-hidden gap-2"
    >
      {/* Toned-down color patches */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 opacity-15 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/4 right-[-150px] w-[500px] h-[500px] bg-blue-500 opacity-15 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-[-200px] left-1/4 w-[600px] h-[600px] bg-pink-500 opacity-15 rounded-full blur-[200px]"></div>
      <div className="absolute top-3/4 right-1/4 w-[450px] h-[450px] bg-yellow-400 opacity-10 rounded-full blur-[170px]"></div>

      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-8 z-10 text-white"
        style={{ textShadow: "0 0 6px rgba(255, 255, 255, 0.6)" }}
      >
>>>>>>> 4738d6f468bcf647b6fad652ad36b30a5a8bde8d
        Prizes
        <span className="absolute -left-2 md:-left-8 font-anton -bottom-3 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
          Prizes
        </span>
      </h1>

<<<<<<< HEAD
      <div className="w-10/12 md:w-3/5 lg:w-1/2 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 rounded-3xl z-10">
        <div className="flex items-center bg-[#070b0d] justify-evenly rounded-3xl w-full h-full p-2">
=======
      <div className="w-10/12 md:w-3/5 lg:w-1/2 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 md:p-1.5 rounded-3xl z-10 shadow-lg shadow-purple-500/30">
        <div className="flex items-center bg-[#332567] justify-evenly rounded-3xl w-full h-full p-2">
>>>>>>> 4738d6f468bcf647b6fad652ad36b30a5a8bde8d
          <Image
            src={GiftBox}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-[30%] xs:w-[15%]"
          />
          <div className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#824FB0] to-[#ad8b3b] flex-col text-xl sm:text-3xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            <span>
              Prize Pool <br />
              Revealing Soon
            </span>
          </div>
        </div>
      </div>
      <div className="z-10 w-full">
        <Trophies />
      </div>
      <div className="z-10 w-full">
        <TrackPrizes />
      </div>
    </div>
  );
};

export default Prizes;