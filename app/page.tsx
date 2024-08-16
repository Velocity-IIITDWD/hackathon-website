import About from "@/components/About";
import CarouselIndex from "@/components/Carousel";
import FAQs from "@/components/FAQs";
import Landing from "@/components/Landing";
import Prizes from "@/components/Prizes/Prizes";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import React from "react";

export default function Home() {
  return (
    <main className="w-full relative flex overflow-x-hidden flex-col items-center">
      <Landing />
      <About />
      <CarouselIndex />
      <Prizes />
      <Timeline />
      <Sponsors />
      <FAQs />
    </main>
  );
}
