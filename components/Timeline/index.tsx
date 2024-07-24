import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import './index.css'

export default function Timeline() {
  return (
    <div id="timeline" className="p-4 h-fit w-full flex overflow-hidden">
      <div className="md:hidden size-full flex">
        <MobileView />
      </div>
      <div className="max-md:hidden size-full">
        <DesktopView />
      </div>
    </div>
  )
}
