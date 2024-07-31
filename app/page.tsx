import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Carousel from "@/components/carousel";
import Faq from "@/components/Faq/Faq";
import Prizes from "@/components/Prizes/Prizes";

export default async function Home() {
  return (
    <div className="font-AtypDisplay background-bg flex flex-col gap-10 relative">
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
