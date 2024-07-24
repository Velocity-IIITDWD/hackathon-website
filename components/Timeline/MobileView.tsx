import Image from "next/image";
import { MobileAnimate as Animate } from "./Animate";
import { timelines } from "./content";
import ColoredCard from "./ColoredCard";

export default function MobileView() {
  return (
    <div
      className="bg-fuchsia-900/5 grow rounded-xl backdrop-blur-lg flex flex-col items-center gap-4"
      style={{ boxShadow: "inset 0 0 50px 20px rgba(255,255,255,0.15)" }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6"
        style={{ textShadow: "0 0 2px #fff" }}
      >
        Timeline
      </h1>
      <Animate>
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
        <div className="h-fit w-fit flex justify-between z-10 max-w-96 self-center p-2 pr-4 relative">
          <div className="h-[436px] place-self-center flex flex-col justify-between -mr-[15px] z-10">
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                </svg>
              </div>
            ))}
          </div>
          <Image
            id="satellite"
            src="/satellite.svg"
            width="35"
            height="35"
            alt="satellite"
            className="absolute right-[5px] top-2.5 z-10"
          />
          <svg
            className="place-self-center"
            viewBox="0 0 10 400"
            style={{ width: "6x", height: "400px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="6" height="400" fill="white" />
            <rect
              id="mobile-timeline-progress-rect"
              width="6"
              height="0"
              fill="#4F46B3"
            />
          </svg>
        </div>
        <div className="h-fit flex w-full overflow-hidden">
          <div id="mobile-timeline-cards" className="h-[500px] relative grow w-full">
            {timelines.map((timeline) => (
              <div id={timeline.id} key={timeline.id} className="max-w-full h-full flex justify-center p-4 max-xs:p-2 overflow-auto">
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
      </Animate>
    </div>
  );
}
