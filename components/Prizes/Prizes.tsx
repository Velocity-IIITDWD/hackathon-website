import Image from "next/image";
import Trophies from "@/components/Prizes/Trophies/Trophies";
import GiftBox from "@/public/gift_box.png";
import TrackPrizes from "@/components/Prizes/TrackPrizes/TrackPrizes";
const Prizes = () => {
  return (
    <div
      id="prizes"
      className="scroll-mt-8 relative py-28 flex flex-col items-center w-full h-full min-h-[100dvh] bg-[#070b0d] overflow-clip gap-2"
      data-idx="2"
    >
      <h1 className="text-[3rem] mb-8 left-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
        Prizes
        <span className="absolute -left-2 md:-left-8 font-anton -bottom-3 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
          Prizes
        </span>
      </h1>

      <div className="w-10/12 md:w-3/5 lg:w-1/2 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 rounded-3xl z-10">
        <div className="flex items-center bg-[#070b0d] justify-evenly rounded-3xl w-full h-full p-2">
          <Image
            src={GiftBox}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-[30%] xs:w-[15%]"
          />
          <div className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#824FB0] to-[#F5C144] flex-col text-xl sm:text-3xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            <span>
              Prize Pool <br />
              Revealing Soon
            </span>
          </div>
        </div>
      </div>
      {/* <Trophies /> */}
      {/* <TrackPrizes /> */}
    </div>
  );
};

export default Prizes;
