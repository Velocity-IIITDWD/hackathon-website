import Trophies from "@/components/Prizes/Trophies/Trophies";

const Prizes = () => {
  return (
    <div data-idx="2" className="relative flex flex-col items-center gap-4 justify-start background-bg w-full overflow-x-clip" id="prizes">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 mb-8 z-10"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Prizes
      </h1>
      <Trophies />
    </div>
  );
};
export default Prizes;