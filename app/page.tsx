import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Carousel from "@/components/carousel";
import Faq from "@/components/Faq/Faq";
import Prizes from "@/components/Prizes/Prizes";
import Team from "@/components/Team";

export default async function Home() {
  return (
    <div className="-z-10 font-AtypDisplay background-bg flex flex-col">
      <Landing />
      <About />
      <Carousel />
      <Prizes />
      <Timeline />
      <Sponsors />
      <Faq />
    </div>
  );
}