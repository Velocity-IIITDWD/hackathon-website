import Image from 'next/image';
import { RefObject } from 'react';
import { Event } from '@/data/carousel';
import solarSystem from '@/public/Space.svg';

interface CarouselBodyProps {
  event: Event;
  orbitsRef: RefObject<HTMLImageElement>;
  planetsRef: RefObject<HTMLImageElement>;
}

const CarouselBody = ({ event, orbitsRef, planetsRef }: CarouselBodyProps) => {
  return (
    <div className="relative flex w-full items-center justify-center [&_*]:z-[1]">
      <Image
        src={solarSystem}
        ref={orbitsRef}
        alt={''}
        className="absolute w-full max-w-7xl 2xl:-translate-y-[5%]"
      />
      <div className="relative flex h-fit w-full -translate-y-[6%] items-center justify-center sm:-translate-y-[10%] lg:w-[80%] xl:w-[65%] xl:-translate-y-[15%] 2xl:w-[55%]">
        <Image
          ref={planetsRef}
          src={event.planet}
          alt={''}
          height={0}
          width={0}
          sizes="100%"
          className={
            'xs:scale-125 xs:-left-[1.5rem] relative -left-[1rem] w-full scale-[1.4] sm:scale-100'
          }
        />
        <div className="absolute flex h-full w-3/5 max-w-lg flex-col items-center justify-center text-center sm:-top-16">
          <div
            id="eventName"
            // style={{
            //   textShadow:
            //     "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
            // }}
            className="vertical-box tracks-box font-anton w-3/4 border border-[#666] bg-[#0e1723] py-4 text-[clamp(20px,4dvw,40px)] font-semibold uppercase leading-[1.1] opacity-80 backdrop-blur"
          >
            {event?.name}
          </div>
          <div className="text-sm drop-shadow-none sm:text-lg">
            {event?.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBody;
