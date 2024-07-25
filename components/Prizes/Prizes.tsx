import Image from "next/image";
import Trophies from "@/components/Prizes/Trophies/Trophies";
import GiftBox from "@/public/gift_box.png";
const Prizes = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-start bg-gradient-carousel">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-8 z-10"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Prizes
      </h1>

      <div className="w-3/5 h-fit bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-2 rounded-3xl">
        <div className="flex items-center bg-[#332567] justify-evenly rounded-3xl w-full h-full p-4">
          <Image
            src={GiftBox}
            alt={""}
            width={0}
            height={0}
            sizes="100%"
            className="w-1/5"
          />
          <div className="flex bg-clip-text text-transparent bg-gradient-to-r from-[#824FB0] to-[#F5C144] flex-col text-3xl sm:text-4xl md:text-5xl font-bold text-center gap-6">
            <span>Prize Pool Worth</span>
            <span>&#x20b9;1,00,000</span>
          </div>
        </div>
      </div>
      <Trophies />
    </div>
  );
};

export default Prizes;
