import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import './index.css'

export default function Timeline() {
  return (
    <div id="timeline" className="p-4 h-fit w-full flex scroll-mt-14 bg-[#1C0E30]/70">
      <div className="md:hidden size-full flex overflow-hidden">
        <MobileView />
      </div>
      <div className="max-md:hidden size-full overflow-hidden">
        <DesktopView />
      </div>
    </div>
  )
}
