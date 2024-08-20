import TempTimeLine from "../Temp-Timeline";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import "./index.css";

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="z-10 p-4 py-20 h-fit w-full flex flex-col gap-10 scroll-mt-14 bg-[#070b0d]"
      data-idx="3"
    >
      <h1 className="text-[3rem] mb-8 mt-28 left-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
        TimeLine
        <span className="absolute -left-2 md:-left-8 font-anton -bottom-3 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
          TimeLine
        </span>
      </h1>
      {/* <div className="md:hidden size-full flex overflow-hidden">
        <MobileView />
      </div>
      <div className="max-md:hidden size-full overflow-hidden">
        <DesktopView />
      </div> */}
      <TempTimeLine />
    </div>
  );
}
