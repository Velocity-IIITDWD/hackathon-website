import { isMobileDevice } from "@/lib/responsive";

import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Landing/Navbar";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import CarouselIndex from "@/components/carousel/CarouselIndex";
import Faq from "@/components/Faq/Faq";
import Loading from "./loading";

export default async function Home() {
  const mobile = await isMobileDevice();
  return (
    <div className="-z-10 font-AtypDisplay background-bg flex flex-col gap-10">
      <Loading rendering />
      <Navbar />
      <Landing />
      <About />
      <CarouselIndex isMobile={mobile} />
      <Timeline isMobile={mobile} />
      <Sponsors />
      <Faq />
    </div>
  );
}
