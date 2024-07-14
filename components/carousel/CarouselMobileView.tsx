"use client";
import { useEffect, useRef, useState } from "react";
import CarouselBackground from "./CarouselBackground";
import CarouselBody from "./CarouselBody";
import CarouselHeader from "./CarouselHeader";
import { events } from "@/data/carousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EventNavBar from "./ChangeEventButtons/EventNavBar";

const CarouselMobileView = () => {
  const carouselRef = useRef(null);
  const orbitsRef = useRef(null);
  const planetLarge = useRef<HTMLImageElement>(null);
  const starsRef = useRef(null);
  const navbarTimeline = useRef<gsap.core.Timeline[]>([]);
  const [eventId, setEventId] = useState(0);

  const smallPlanetsClasses = [
    ".planet-image-0",
    ".planet-image-1",
    ".planet-image-2",
    ".planet-image-3",
  ];

  const eventNameClasses = [
    ".event-name-0",
    ".event-name-1",
    ".event-name-2",
    ".event-name-3",
  ];

  const { contextSafe } = useGSAP({ scope: carouselRef }, [eventId]);

  const starsAnimate = contextSafe(() => {
    return gsap
      .timeline({ paused: true })
      .fromTo(
        starsRef.current,
        { x: 400, y: 400, scale: 1.5 },
        { x: 0, y: 0, duration: 0.5, scale: 2 }
      );
  });

  const rotateOrbit = contextSafe((angle: string) => {
    gsap.to(orbitsRef?.current, { rotation: angle, ease: "back.out" });
  });

  const rotatePlanet = contextSafe((angleFrom: string, angleTo: string) => {
    gsap.fromTo(
      planetLarge.current,
      { opacity: 0, rotation: angleFrom },
      {
        opacity: 1,
        rotation: angleTo,
        ease: "back.out",
        duration: 0.5,
        transformOrigin: "52% 51%",
      }
    );
    gsap.fromTo("#eventName", { opacity: 0 }, { opacity: 1 });
  });

  useEffect(() => {
    const eventName = document
      .querySelector("#eventName")
      ?.getBoundingClientRect();

    navbarTimeline.current = eventNameClasses.map((value, index) => {
      const timeline = contextSafe(() => {
        const navElementDimension = document
          .querySelector(eventNameClasses[index])
          ?.getBoundingClientRect();

        console.log(
          navElementDimension?.left && eventName?.left
            ? eventName.left - navElementDimension.left + eventName.width / 2
            : 0
        );

        const animateTimeline = gsap.timeline({ paused: true });
        animateTimeline.fromTo(
          smallPlanetsClasses[index],
          { scale: 1, rotation: "90", y: 0 },
          {
            y: -10,
            scale: 1.2,
            rotation: "0",
            ease: "circ.inOut",
            duration: 0.4,
            transformOrigin: "52% 51%",
          },
          "<"
        );
        animateTimeline.fromTo(
          eventNameClasses[index],
          { opacity: 1, scale: 1 },
          {
            opacity: 0,
            scale: 2,
            duration: 0.4,
            x:
              navElementDimension?.left && eventName?.left
                ? eventName.left -
                  navElementDimension.left +
                  eventName.width / 3
                : 0,
            y:
              navElementDimension?.top && eventName?.top
                ? eventName.top -
                  navElementDimension.top +
                  navElementDimension.height / 2
                : 0,
          },
          "<"
        );
        animateTimeline.set(eventNameClasses[index], {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        });
        return animateTimeline;
      });

      return timeline();
    });
    navbarTimeline.current[eventId].play();
  }, []);

  useEffect(() => {
    navbarTimeline.current[eventId].play();
  }, [eventId]);

  const onClick = (id: number) => {
    if (eventId === id) return;
    const prevEvent = eventId;
    navbarTimeline.current[prevEvent].reverse();
    setEventId(id);
    if (id > prevEvent) {
      rotatePlanet("-90", "0");
      rotateOrbit(`-=${(id - eventId) * 45}`);
    } else {
      rotatePlanet("90", "0");
      rotateOrbit(`-=${(id - eventId) * 45}`);
    }
    starsAnimate().reversed(!starsAnimate().reversed());
  };

  return (
    <div
      ref={carouselRef}
      className="relative flex flex-col items-center w-full h-fit bg-gradient-carousel overflow-clip gap-2"
    >
      <h1
        className="text-2xl md:text-3xl lg:text-5xl pt-2 p-4 text-center font-bold backdrop-blur-sm "
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Domain & Prizes
      </h1>

      <EventNavBar onClick={onClick} events={events} eventId={eventId} />
      <CarouselHeader event={events[eventId]} />
      <div className="flex relative justify-center items-center w-full">
        <CarouselBackground
          orbitsRef={orbitsRef}
          starsRef={starsRef}
          event={events[eventId]}
        />
        <div className="absolute flex h-full items-center justify-between flex-grow w-full">
          <CarouselBody planetsRef={planetLarge} event={events[eventId]} />
        </div>
      </div>
    </div>
  );
};

export default CarouselMobileView;
