import Image from 'next/image';
import medal from '@/public/medal.png';

const TrackPrizes = () => {
  return (
    <div className="z-10 flex h-fit w-full flex-col items-center justify-center py-8">
      <h1 className="font-anton relative left-8 z-[2] mb-8 mt-28 w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]">
        Track Prizes
        <span className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[150px]">
          Track Prizes
        </span>
      </h1>
      <div className="mt-16 flex w-full flex-col items-center justify-evenly gap-8 px-4 sm:flex-row">
        <div className="xs:w-3/5 h-fit w-3/4 rounded-3xl bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 sm:w-1/3 xl:w-1/4">
          <div className="flex h-full w-full flex-col items-center justify-evenly rounded-3xl bg-[#181c1f] p-4">
            <Image
              src={medal}
              alt={''}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
            <div className="flex flex-col gap-6 bg-gradient-to-r from-[#824FB0] to-[#F5C144] bg-clip-text text-center text-xl text-transparent md:text-xl lg:text-2xl 2xl:text-3xl">
              <span className="text-white">All-women&apos;s team winner</span>
              {/* <span>&#x20b9;10,000</span> */}
              <span>Revealing Soon</span>
              <span>Cash Prize</span>
            </div>
          </div>
        </div>

        <div className="xs:w-3/5 h-fit w-3/4 rounded-3xl bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 sm:w-1/3 xl:w-1/4">
          <div className="flex h-full w-full flex-col items-center justify-evenly rounded-3xl bg-[#181c1f] p-4">
            <Image
              src={medal}
              alt={''}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
            <div className="flex flex-col gap-6 bg-gradient-to-r from-[#824FB0] to-[#F5C144] bg-clip-text text-center text-xl text-transparent md:text-xl lg:text-2xl 2xl:text-3xl">
              <span className="text-white">Winner per track</span>
              {/* <span>&#x20b9;10,000</span> */}
              <span>Revealing Soon</span>
              <span>Cash Prize</span>
            </div>
          </div>
        </div>

        <div className="xs:w-3/5 h-fit w-3/4 rounded-3xl bg-gradient-to-r from-[#824FB0] to-[#F5C144] p-1 sm:w-1/3 xl:w-1/4">
          <div className="flex h-full w-full flex-col items-center justify-evenly rounded-3xl bg-[#181c1f] p-4">
            <Image
              src={medal}
              alt={''}
              width={0}
              height={0}
              sizes="100%"
              className="w-full"
            />
            <div className="flex flex-col gap-6 bg-gradient-to-r from-[#824FB0] to-[#F5C144] bg-clip-text text-center text-xl text-transparent md:text-xl lg:text-2xl 2xl:text-3xl">
              <span className="text-white">People&apos;s choice winner</span>
              {/* <span>&#x20b9;10,000</span> */}
              <span>Revealing Soon</span>
              <span>Cash Prize</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPrizes;
