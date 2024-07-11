import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

export default function Timeline({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return <MobileView />
  }
  return <DesktopView />
}
