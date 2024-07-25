import Trophies from "@/components/Prizes/Trophies/Trophies";
const Prizes = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gradient-carousel">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 z-10"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Prizes
      </h1>
      <Trophies />
    </div>
  );
};

export default Prizes;
