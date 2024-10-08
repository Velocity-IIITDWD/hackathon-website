import React from 'react';

export default function TempTimeLine() {
  return (
    <section className="relative mx-auto flex w-[24rem] justify-center">
      <div className="absolute top-[3rem] h-[83%] w-1 bg-[#9978f5]"></div>
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full basis-1/5 items-center justify-between">
          <div className="relative flex aspect-square w-24 flex-col items-center justify-center rounded-full bg-[#9978f5] p-4 text-white after:absolute after:right-1 after:block after:h-1 after:w-[0] after:translate-x-full after:bg-[#9978f5] sm:after:w-[6.36rem]">
            <span className="text-lg font-semibold">26</span>
            <span className="text-xs">SEPT</span>
          </div>
          <div className="text-xl text-gray-200 transition-transform duration-700 hover:scale-105">
            Hackathon Launch
          </div>
        </div>
        <div className="flex w-full basis-1/5 flex-row-reverse items-center justify-between">
          <div className="relative flex aspect-square w-24 flex-col items-center justify-center rounded-full bg-[#9978f5] p-4 text-white after:absolute after:left-1 after:block after:h-1 after:w-[0] after:-translate-x-full after:bg-[#9978f5] sm:after:w-[6.36rem]">
            <span className="text-lg font-semibold">26</span>
            <span className="text-xs">SEPT</span>
          </div>
          <div className="text-xl text-gray-200 transition-transform duration-700 hover:scale-105">
            Registration Open
          </div>
        </div>
        <div className="flex w-full basis-1/5 items-center justify-between">
          <div className="relative flex aspect-square w-24 flex-col items-center justify-center rounded-full bg-[#9978f5] p-4 text-white after:absolute after:right-1 after:block after:h-1 after:w-[0] after:translate-x-full after:bg-[#9978f5] sm:after:w-[6.36rem]">
            <span className="text-lg font-semibold">10</span>
            <span className="text-xs">OCT</span>
          </div>
          <div className="text-xl text-gray-200 transition-transform duration-700 hover:scale-105">
            Submission Close
          </div>
        </div>
        <div className="flex w-full basis-1/5 flex-row-reverse items-center justify-between">
          <div className="relative flex aspect-square w-24 flex-col items-center justify-center rounded-full bg-[#9978f5] p-4 text-white after:absolute after:left-1 after:block after:h-1 after:w-[0] after:-translate-x-full after:bg-[#9978f5] sm:after:w-[6.36rem]">
            <span className="text-lg font-semibold">TBD</span>
            {/* <span className="text-xs">OCT</span> */}
          </div>
          <div className="text-xl text-gray-200 transition-transform duration-700 hover:scale-105">
            Result Announced
          </div>
        </div>
        <div className="flex w-full basis-1/5 items-center justify-between">
          <div className="relative flex aspect-square w-24 flex-col items-center justify-center rounded-full bg-[#9978f5] p-4 text-white after:absolute after:right-1 after:block after:h-1 after:w-[0] after:translate-x-full after:bg-[#9978f5] sm:after:w-[6.36rem]">
            <span className="text-lg font-semibold">26-27</span>
            <span className="text-xs">OCT</span>
          </div>
          <div className="text-xl text-gray-200 transition-transform duration-700 hover:scale-105">
            Final Offline Round
          </div>
        </div>
      </div>
    </section>
  );
}
