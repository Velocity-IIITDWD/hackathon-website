import { isMobileDevice } from "@/lib/responsive";

import About from "@/components/About";
import Timeline from "@/components/Timeline/index";
import Carousel from "@/components/carousel/Carousel";

export default async function Home() {
  const mobile = await isMobileDevice();
  return (
    <div className="-z-10 background-bg flex flex-col gap-10">
      <About />
      <Carousel />
      <Timeline isMobile={mobile} />
    </div>
  );
}
