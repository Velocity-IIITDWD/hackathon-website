export default function MobileView() {
    return (
        <div className="grow relative flex flex-col items-center gap-4">
            <div className="absolute uppercase left-4 sm:left-16 font-anton top-0 text-[4.4rem] text-[#1b1e24]">
                Timeline
            </div>
            <h1 className="relative text-[2.4rem] font-anton w-full px-8 uppercase font-bold mb-20 pt-10 p-4 z-[2]">
                Timeline
            </h1>
            {/* <Animate>
        <div
          id="mobile-timeline-rocket"
          className="z-20 pointer-events-none max-[600px]:hidden -mr-12 -ml-4"
        >
          <Image
            src="/rocket.png"
            width={640}
            height={360}
            alt="rocket image"
            className="z-20 rotate-[60deg] scale-150 translate-y-10"
          />
        </div>
        <div className="size-fit flex justify-between z-10 max-w-96 self-center p-2 pr-4 relative">
          <div className="h-[471px] place-self-center flex flex-col justify-between -mr-[15px] z-10">
            {timelines.map((timeline) => (
              <div
                id={timeline.id}
                key={timeline.id}
                className="mobile-timeline-progress w-full flex items-center justify-end gap-2 hover:cursor-pointer"
              >
                <div className="text-center text-sm">{timeline.heading}</div>
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: "24px", height: "24px" }}
                  className="shrink-0 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                </svg>
              </div>
            ))}
          </div>
          <Image
            id="satellite"
            src="/satellite.png"
            width="35"
            height="35"
            alt="satellite"
            className="absolute right-[5.25px] top-3.5 z-10"
          />
          <svg
            className="place-self-center shrink-0 pb-2.5"
            viewBox="0 0 10 435"
            style={{ width: "6x", height: "435px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="6" height="100%" fill="white" />
            <rect
              id="mobile-timeline-progress-rect"
              width="6"
              height="0"
              fill="#a6dff9"
            />
          </svg>
        </div>
        <div className="h-fit flex w-full overflow-hidden">
          <div
            id="mobile-timeline-cards"
            className="h-[500px] relative grow w-full"
          >
            {timelines.map((timeline) => (
              <div
                id={timeline.id}
                key={timeline.id}
                className="max-w-full h-full flex justify-center p-4 max-xs:p-2 overflow-auto"
              >
                <div className="flex flex-col gap-4 h-fit">
                  {timeline.details.map((detail, index) => (
                    <ColoredCard
                      key={index}
                      color={detail.color}
                      detail={detail.detail}
                      heading={detail.heading}
                      time={detail.time}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Animate> */}
            <span className="text-3xl uppercase">Revealing Soon...</span>
        </div>
    );
}
