import About from "@/components/About";
import Timeline from "@/components/Timeline/index";

import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <div className="-z-10 background-bg flex flex-col gap-10">
      <About />
      <Carousel />
      <Timeline />
    </div>
  );
}
