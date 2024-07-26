import Image from "next/image";
import medal from "@/public/medal.png";
const TrackPrizes = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center p-8 z-10">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-8 z-10"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Track Prizes
      </h1>
      <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-8 mt-16">
        <div className="w-3/4 xs:w-3/5 sm:w-1/3 xl:w-1/4 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 rounded-3xl">
          <div className="flex flex-col items-center bg-[#332567] justify-evenly rounded-3xl w-full h-full p-4">
            <Image
              src={medal}
              alt={""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
            <div className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#824FB0] to-[#F5C144] flex-col text-xl md:text-xl lg:text-2xl 2xl:text-3xl text-center gap-6">
              <span className="text-white">All-women&apos;s team winner</span>
              <span>&#x20b9;1,00,000</span>
              <span>Cash Prize</span>
            </div>
          </div>
        </div>

        <div className="w-3/4 xs:w-3/5 sm:w-1/3 xl:w-1/4 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 rounded-3xl">
          <div className="flex flex-col items-center bg-[#332567] justify-evenly rounded-3xl w-full h-full p-4">
            <Image
              src={medal}
              alt={""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
            <div className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#824FB0] to-[#F5C144] flex-col text-xl md:text-xl lg:text-2xl 2xl:text-3xl text-center gap-6">
              <span className="text-white">People&apos;s choice winner</span>
              <span>&#x20b9;1,00,000</span>
              <span>Cash Prize</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPrizes;
