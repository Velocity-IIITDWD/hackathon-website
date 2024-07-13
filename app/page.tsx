import { isMobileDevice } from "@/lib/responsive";

import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Landing/Navbar";
import Timeline from "@/components/Timeline";
import Carousel from "@/components/carousel/Carousel";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq/Faq";

export default async function Home() {
  const mobile = await isMobileDevice();
  return (
    <div className="-z-10 background-bg flex flex-col gap-10">
      <Navbar />
      <Landing />
      <About />
      <Carousel />
      <Timeline isMobile={mobile} />
      <Sponsors />
      <Faq />
    </div>
  );
}
