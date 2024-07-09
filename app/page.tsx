import About from "@/components/About";
import Timeline from "@/components/Timeline/index";

export default function Home() {
  return (
    <div className="-z-10 background-bg flex flex-col gap-10">
      <About />
      <Timeline />
    </div>
  );
}
