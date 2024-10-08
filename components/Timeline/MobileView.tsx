import Image from 'next/image';
import { MobileAnimate } from './Animate';
import ColoredCard from './ColoredCard';
import { timelines } from './content';

export default function MobileView() {
  return (
    <div className="relative flex grow flex-col items-center gap-2 overflow-x-hidden">
      <div className="font-anton absolute left-4 top-0 text-[4.4rem] uppercase text-[#1b1e24] sm:left-16">
        Timeline
      </div>
      <h1 className="font-anton relative z-[2] mb-20 w-full p-4 px-8 pt-10 text-[2.4rem] font-bold uppercase">
        Timeline
      </h1>
      <MobileAnimate>
        <div
          id="mobile-timeline-rocket"
          className="pointer-events-none z-20 -ml-4 -mr-12 max-[600px]:hidden"
        >
          <Image
            src="/rocket.png"
            width={640}
            height={360}
            alt="rocket image"
            className="z-20 translate-y-10 rotate-[60deg] scale-150"
          />
        </div>
        <div className="relative z-10 -ml-4 flex size-fit max-w-96 justify-between self-center p-2 pr-4">
          <div className="z-10 -mr-[15px] flex h-[471px] flex-col justify-between place-self-center">
            {timelines.map((timeline) => (
              <div
                id={timeline.id}
                key={timeline.id}
                className="mobile-timeline-progress flex w-full items-center justify-end gap-2 hover:cursor-pointer"
              >
                <div className="text-center text-sm">{timeline.heading}</div>
                <svg
                  viewBox="0 0 24 24"
                  style={{ width: '24px', height: '24px' }}
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
            className="absolute right-[5.25px] top-5 z-10"
          />
          <svg
            className="shrink-0 place-self-center pb-2.5"
            viewBox="0 0 10 435"
            style={{ width: '6x', height: '435px' }}
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
        <div className="flex h-fit w-full overflow-hidden">
          <div
            id="mobile-timeline-cards"
            className="relative h-[500px] w-fit grow"
          >
            {timelines.map((timeline) => (
              <div
                id={timeline.id}
                key={timeline.id}
                className="max-xs:p-2 flex h-full max-w-full justify-center overflow-auto p-4"
              >
                <div className="flex h-fit flex-col gap-4">
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
      </MobileAnimate>
      {/* <span className="text-3xl uppercase">Revealing Soon...</span> */}
    </div>
  );
}
