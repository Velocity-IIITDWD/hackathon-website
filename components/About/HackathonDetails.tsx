const CarouselHeader = () => {
  return (
    <>
      <div className="flex max-w-3xl z-30 my-10 w-full gap-4 flex-row items-center justify-evenly">
        <div className="flex flex-col items-center">
          <h2 className="opacity-70 uppercase text-xs 2xs:text-sm md:text-lg lg:text-xl">
            Duration
          </h2>
          <p className="text-xs 2xs:text-sm md:text-md lg:text-lg eventInfo">
            24-32 Hours
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="opacity-70 uppercase text-xs 2xs:text-sm md:text-lg lg:text-xl">
            Team Size
          </h2>
          <p className="text-xs 2xs:text-sm md:text-md lg:text-lg eventInfo">
            1-4 Members
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="opacity-70 uppercase text-xs 2xs:text-sm md:text-lg lg:text-xl">
            Participants
          </h2>
          <p className="text-xs 2xs:text-sm md:text-md lg:text-lg eventInfo">
            Open for all
          </p>
        </div>
      </div>
    </>
  );
};

export default CarouselHeader;
