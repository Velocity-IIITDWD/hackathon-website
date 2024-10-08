import React from 'react';

export default function TempTimeLine() {
  return (
    <section className="w-[24rem] relative mx-auto flex justify-center">
      <div className="bg-[#9978f5] absolute w-1 h-[83%] top-[3rem]"></div>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full basis-1/5 flex items-center justify-between">
          <div className="bg-[#9978f5] w-24 justify-center relative after:block after:w-[0] sm:after:w-[6.36rem] after:absolute after:right-1 after:translate-x-full after:h-1 after:bg-[#9978f5] items-center text-white p-4 aspect-square rounded-full flex flex-col">
            <span className="text-lg font-semibold">26</span>
            <span className="text-xs">SEPT</span>
          </div>
          <div className="transition-transform duration-700 text-xl hover:scale-105 text-gray-200">
            Hackathon Launch
          </div>
        </div>
        <div className="w-full basis-1/5 flex flex-row-reverse items-center justify-between">
          <div className="bg-[#9978f5] w-24 justify-center relative after:block after:w-[0] sm:after:w-[6.36rem] after:absolute after:left-1 after:-translate-x-full after:h-1 after:bg-[#9978f5] items-center text-white p-4 aspect-square rounded-full flex flex-col">
            <span className="text-lg font-semibold">26</span>
            <span className="text-xs">SEPT</span>
          </div>
          <div className="transition-transform duration-700 text-xl hover:scale-105 text-gray-200">
            Registration Open
          </div>
        </div>
        <div className="w-full basis-1/5 flex items-center justify-between">
          <div className="bg-[#9978f5] w-24 justify-center relative after:block after:w-[0] sm:after:w-[6.36rem] after:absolute after:right-1 after:translate-x-full after:h-1 after:bg-[#9978f5] items-center text-white p-4 aspect-square rounded-full flex flex-col">
            <span className="text-lg font-semibold">10</span>
            <span className="text-xs">OCT</span>
          </div>
          <div className="transition-transform duration-700 text-xl hover:scale-105 text-gray-200">
            Submission Close
          </div>
        </div>
        <div className="w-full basis-1/5 flex flex-row-reverse items-center justify-between">
          <div className="bg-[#9978f5] w-24 justify-center relative after:block after:w-[0] sm:after:w-[6.36rem] after:absolute after:left-1 after:-translate-x-full after:h-1 after:bg-[#9978f5] items-center text-white p-4 aspect-square rounded-full flex flex-col">
            <span className="text-lg font-semibold">TBD</span>
            {/* <span className="text-xs">OCT</span> */}
          </div>
          <div className="transition-transform duration-700 text-xl hover:scale-105 text-gray-200">
            Result Announced
          </div>
        </div>
        <div className="w-full basis-1/5 flex items-center justify-between">
          <div className="bg-[#9978f5] w-24 justify-center relative after:block after:w-[0] sm:after:w-[6.36rem] after:absolute after:right-1 after:translate-x-full after:h-1 after:bg-[#9978f5] items-center text-white p-4 aspect-square rounded-full flex flex-col">
            <span className="text-lg font-semibold">26-27</span>
            <span className="text-xs">OCT</span>
          </div>
          <div className="transition-transform duration-700 text-xl hover:scale-105 text-gray-200">
            Final Offline Round
          </div>
        </div>
      </div>
    </section>
  );
}
