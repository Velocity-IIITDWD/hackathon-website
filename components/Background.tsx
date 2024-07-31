const Background = () => {
  return (
    <>
      <div className="absolute hidden md:flex pt-[100vh] blur-[150px] opacity-50 flex-col z-[5] w-full h-full min-h-screen max-w-7xl place-self-center overflow-clip">
        <div className="mt-[30%] bg-[#304094] w-1/2 h-[4%] rounded-full" />
        <div className="bg-[#B745BA] self-end w-1/2 h-[4%] rounded-full" />
        <div className="bg-[#304094] w-1/2 h-[4%] rounded-full" />
        <div className="flex flex-col md:flex-row w-full overflow-clip h-[10%] rotate-12">
          <div className="bg-[#B745BA] self-end w-1/2 h-[50%] rounded-full" />
          <div className="bg-[#304094] w-1/2 h-[50%] rounded-full" />
          <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] self-end w-1/2  h-[30%] rounded-full" />
        </div>
        <div className="bg-[#304094] mt-[8%] w-1/2 h-[4%] rounded-full" />
        <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D]  self-end w-1/2 h-[2%] rounded-full" />
        <div className="bg-[#304094] w-1/3 h-[4%] rounded-full" />
        <div className="flex flex-col mt-[15%] overflow-clip md:flex-row w-full h-[10%] -rotate-45">
          <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] w-1/2 h-[30%] rounded-full" />
          <div className="bg-[#B745BA] self-end w-1/2 h-[50%] rounded-full" />
          <div className="bg-[#304094] w-1/2 h-[50%] rounded-full" />
        </div>
        <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] mt-[5%] w-1/2 h-[2%] rounded-full" />
        <div className="bg-[#304094] mt-[10%] w-1/2 h-[4%] rounded-full" />
        <div className="bg-[#B745BA] self-end w-1/2 h-[4%] rounded-full" />
        <div className="flex mt-[10%] flex-col md:flex-row w-full overflow-clip h-[10%] rotate-12">
          <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] w-1/2  h-[30%] rounded-full" />
          <div className="bg-[#B745BA]  self-end w-1/2 h-[50%] rounded-full" />
          <div className="bg-[#304094] w-1/2 h-[50%] rounded-full" />
        </div>
        <div className="bg-[#B745BA] mt-[10%] w-40 h-[4%] rounded-full" />
        <div className="bg-[#304094] self-end w-40 h-[4%] rounded-full" />
        <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] w-1/2 rotate-12  h-[2%] rounded-full" />
      </div>
      <div className="size-full overflow-hidden absolute top-0 left-0 brightness-75">
        <div className="opacity-25 blur-3xl bg-gradient-radial from-[#B745BA]/80 via-[#B745BA]/80 to-transparent absolute -bottom-[5%] -left-1/2 w-[180vw] h-[1000px] 2xl:h-[1300px] max-h-[35%] max-lg:h-[1400px] rounded-full" />
        <div className="opacity-50 blur-xl bg-gradient-radial from-[#304094] to-transparent absolute -bottom-[5%] -z-10 -right-1/4 w-[180vw] h-[1000px] 2xl:h-[1300px] max-h-[35%] max-lg:h-[1400px] rounded-full" />
      </div>
    </>
  );
};

export default Background;
