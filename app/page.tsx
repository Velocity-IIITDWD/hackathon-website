import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Landing/Navbar";
import Timeline from "@/components/Timeline/index";

export default function Home() {
  return (
    <div className="-z-10 background-bg flex flex-col gap-10">
      <Navbar />
      <Landing />
      <About />
      <Timeline />
    </div>
  );
}
