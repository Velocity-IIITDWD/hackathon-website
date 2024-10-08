'use client';
import { useRef } from 'react';
// import CarouselBody from "./CarouselBody";
// import { events } from "@/data/carousel";
// import { useAnimateCarousel } from "./AnimateCarousel";
import Image from 'next/image';
import stars from '@/public/Stars Animate.svg';
// import TopButtons from "./ChangeEventButtons/TopButtons";

const Carousel = () => {
  const carouselRef = useRef(null);
  // const orbitsRef = useRef(null);
  // const planets = useRef(null);
  const starsRef = useRef(null);
  // const [eventId, setEventId] = useState(0);

  // const {
  //   starsAnimate,
  //   rotateOrbit,
  //   topButtonsTimeline,
  //   rotatePlanet,
  //   fadeElement,
  //   contextSafe,
  // } = useAnimateCarousel(carouselRef, orbitsRef, planets, starsRef);

  // useEffect(() => {
  //   fadeElement([".buttons", ".eventInfo"]);
  // }, [eventId, starsAnimate, fadeElement]);

  // const onClick = (id: number) => {
  //   if (eventId === id) return;
  //   const prevEvent = eventId;
  //   topButtonsTimeline.current[id].play();
  //   topButtonsTimeline.current[prevEvent].timeScale(2).reverse();
  //   setEventId(id);
  //   if (id > prevEvent) {
  //     rotatePlanet("-90", "0");
  //     rotateOrbit(`-=${(id - eventId) * 45}`);
  //   } else {
  //     rotatePlanet("90", "0");
  //     rotateOrbit(`-=${(id - eventId) * 45}`);
  //   }
  //   starsAnimate();
  // };

  return (
    <div
      id="technologies"
      ref={carouselRef}
      className="relative flex h-full min-h-[100dvh] w-full scroll-mt-6 flex-col items-center gap-2 overflow-clip bg-[#070b0d] py-12 sm:py-16"
      data-idx="2"
    >
      <div className="font-anton absolute left-8 top-0 text-[6rem] uppercase text-[#1b1e24] sm:left-16 md:text-[200px]">
        Tracks
      </div>
      <Image
        src={stars}
        alt={''}
        loading={'eager'}
        className="absolute h-full w-full"
        ref={starsRef}
      />

      <h1 className="font-anton relative z-[2] mb-20 w-full px-8 pt-0 text-[3rem] font-bold uppercase sm:px-16 sm:pt-16 md:px-28 md:text-[80px]">
        Tracks
      </h1>
      {/* <TopButtons events={events} eventId={eventId} onClick={onClick} />
      <CarouselBody
        planetsRef={planets}
        orbitsRef={orbitsRef}
        event={events[eventId]}
      /> */}
      <div className="grid place-items-center">
        <h1 className="font-anton relative left-8 z-[2] mb-8 mt-28 w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[40px]">
          Revealing Soon
          <span className="font-anton absolute -bottom-4 -left-2 z-[-1] min-w-fit text-nowrap text-[6rem] text-[#1b1e24] md:-left-8 md:text-[80px]">
            Revealing Soon
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Carousel;
