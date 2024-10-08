import Image from 'next/image';
import GiftBox from '@/public/gift_box.png';

const Prizes = () => {
  return (
    <div
      id="prizes"
      className="relative flex h-full w-full scroll-mt-24 flex-col items-center gap-2 overflow-clip bg-[#070b0d] py-28 xl:min-h-[100dvh]"
      data-idx="2"
    >
      <h1 className="font-anton relative left-8 z-[2] mb-16 w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]">
        Prizes
        <span className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]">
          Prizes
        </span>
      </h1>

      <div className="z-10 h-fit w-10/12 rounded-3xl bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 md:w-3/5 lg:w-1/2">
        <div className="flex h-full w-full items-center justify-evenly rounded-3xl bg-[#070b0d] p-2">
          <Image
            src={GiftBox}
            alt={''}
            width={0}
            height={0}
            sizes="100%"
            className="xs:w-[15%] w-[30%]"
          />
          <div className="xs:text-2xl flex flex-col bg-gradient-to-r from-[#824FB0] to-[#F5C144] bg-clip-text text-center text-xl font-bold text-transparent sm:text-3xl md:text-3xl lg:text-4xl">
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
