const Background = () => {
  return (
    <div className="absolute hidden md:flex pt-[100%] blur-3xl lg:pt-48 opacity-20 flex-col z-[5] w-full h-full overflow-clip">
      <div className="relative mt-[50%] bg-[#304094] w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="bg-[#B745BA]  self-end w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="bg-[#304094] w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="flex flex-col md:flex-row w-full overflow-clip h-[10%] rotate-12">
        <div className="bg-[#B745BA]  self-end w-1/2 md:w-1/4 h-[50%] rounded-full" />
        <div className="bg-[#304094] w-1/2 md:w-1/4 h-[50%] rounded-full" />
        <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] self-end w-1/2  h-[30%] rounded-full" />
      </div>
      <div className="bg-[#304094] mt-[8%] w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D]  self-end w-1/2 h-[2%] rounded-full" />
      <div className="bg-[#304094] w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="flex flex-col mt-[15%] overflow-clip md:flex-row w-full h-[10%] -rotate-45">
        <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] w-1/2 h-[30%] rounded-full" />
        <div className="bg-[#B745BA]  self-end w-1/2 md:w-1/4 h-[50%] rounded-full" />
        <div className="bg-[#304094] w-1/2 md:w-1/4 h-[50%] rounded-full" />
      </div>
      <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] mt-[5%] w-1/2 h-[2%] rounded-full" />
      <div className="bg-[#304094] mt-[10%] w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="bg-[#B745BA] self-end w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="flex mt-[10%] flex-col md:flex-row w-full overflow-clip h-[10%] rotate-12">
        <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] w-1/2  h-[30%] rounded-full" />
        <div className="bg-[#B745BA]  self-end w-1/2 md:w-1/4 h-[50%] rounded-full" />
        <div className="bg-[#304094] w-1/2 md:w-1/4 h-[50%] rounded-full" />
      </div>
      <div className="bg-[#B745BA] mt-[10%] w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="bg-[#304094] self-end w-1/2 md:w-1/4 h-[4%] rounded-full" />
      <div className="bg-gradient-to-r from-[#5200FF] to-[#CA2B9D] w-1/2 rotate-12  h-[2%] rounded-full" />
    </div>
  );
};

export default Background;
