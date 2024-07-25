import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Carousel from "@/components/carousel";
import Faq from "@/components/Faq/Faq";

export default async function Home() {
  return (
    <div className="-z-10 font-AtypDisplay background-bg flex flex-col gap-10">
      <Landing />
      <About />
      <Carousel />
      <Timeline />
      <Sponsors />
      <Faq />
    </div>
  );
}
