import About from "@/components/About";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Landing/Navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}
