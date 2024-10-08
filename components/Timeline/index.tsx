import TempTimeLine from '../Temp-Timeline';
import DesktopView from './DesktopView';
import './index.css';
import MobileView from './MobileView';

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="z-10 p-4 sm:px-0 py-20 h-fit w-full flex flex-col gap-10 scroll-mt-14 bg-[#070b0d]"
      data-idx="3"
    >
      <div className="md:hidden size-full flex overflow-y-auto">
        <MobileView />
      </div>
      <div className="max-md:hidden size-full overflow-hidden">
        <DesktopView />
      </div>
      {/* <div className="grow relative flex flex-col items-center gap-4">
        <span className="text-3xl uppercase">Revealing Soon...</span>
      </div> */}
      {/* <TempTimeLine/> */}
    </div>
  );
}
