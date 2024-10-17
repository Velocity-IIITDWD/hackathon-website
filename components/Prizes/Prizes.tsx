import Image from "next/image";
import Trophies from "@/components/Prizes/Trophies/Trophies";
import GiftBox from "@/public/gift_box.png";
import TrackPrizes from "@/components/Prizes/TrackPrizes/TrackPrizes";
const Prizes = () => {
  return (
    <div className="relative flex flex-col items-center gap-4 justify-start background-bg w-full overflow-x-clip" id="prizes">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-8 z-10"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Prizes
      </h1>

      {/* Prize Poll Section */}
      {/* <div className="w-11/12 md:w-3/5 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-2 rounded-3xl z-10">
        <div className="flex items-center bg-[#332567] justify-evenly rounded-3xl w-full h-full p-4">
          <Image
            src={GiftBox}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-2/5 xs:w-1/5"
          />
          <div className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#824FB0] to-[#F5C144] flex-col text-xl sm:text-3xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            <span>
              Prize Pool Worth <br />
              &#x20b9;1,25,000
            </span>
          </div>
        </div>
      </div> */}

      <Trophies />
      
      {/* <TrackPrizes /> */}
    </div>
  );
};
export default Prizes;