import TempTimeLine from '../Temp-Timeline';
import DesktopView from './DesktopView';
import './index.css';
import MobileView from './MobileView';

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="z-10 flex h-fit w-full scroll-mt-14 flex-col gap-10 bg-[#070b0d] p-4 py-20 sm:px-0"
      data-idx="3"
    >
      <div className="flex size-full overflow-y-auto md:hidden">
        <MobileView />
      </div>
      <div className="size-full overflow-hidden max-md:hidden">
        <DesktopView />
      </div>
      {/* <div className="grow relative flex flex-col items-center gap-4">
        <span className="text-3xl uppercase">Revealing Soon...</span>
      </div> */}
      {/* <TempTimeLine/> */}
    </div>
  );
}
