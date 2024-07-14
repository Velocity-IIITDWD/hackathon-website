"use client";
import Image from "next/image";
import gsap from "gsap";
import { Event } from "@/data/carousel";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

interface EventNavBarProps {
  events: Event[];
  eventId: number;
  rotateLargePlanetLeft: () => void;
  rotateLargePlanetRight: () => void;
  animateStars: () => void;
  rotateOrbitLeft: (angle: string) => void;
  rotateOrbitRight: (angle: string) => void;
  setEventId: (num: number) => void;
}

const EventNavBar = ({
  events,
  eventId,
  rotateLargePlanetLeft,
  rotateLargePlanetRight,
  animateStars,
  rotateOrbitLeft,
  rotateOrbitRight,
  setEventId,
}: EventNavBarProps) => {
  const navbarTimeline = useRef<gsap.core.Timeline[]>([]);

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

  const { contextSafe } = useGSAP();

  useEffect(() => {
    const eventName = document
      .querySelector("#eventName")
      ?.getBoundingClientRect();
    navbarTimeline.current = eventNameClasses.map((value, index) => {
      const timeline = contextSafe(() => {
        const navElementDimension = document
          .querySelector(eventNameClasses[index])
          ?.getBoundingClientRect();

        return gsap
          .timeline({ paused: true })
          .fromTo(
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
          )
          .fromTo(
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
                    navElementDimension.width / 2
                  : 0,
              y:
                navElementDimension?.top && eventName?.top
                  ? eventName.top -
                    navElementDimension.top +
                    navElementDimension.height / 2
                  : 0,
            },
            "<"
          )
          .set(eventNameClasses[index], {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          });
      });

      return timeline();
    });
    navbarTimeline.current[eventId].play();
  });

  const onClick = (id: number) => {
    if (eventId === id) return;
    navbarTimeline.current[eventId].timeScale(1.5).reverse();
    const prevEvent = eventId;
    setEventId(id);
    if (id > prevEvent) {
      rotateLargePlanetRight();
      rotateOrbitLeft(`-=${(id - eventId) * 45}`);
    } else {
      rotateLargePlanetLeft();
      rotateOrbitRight(`-=${(id - eventId) * 45}`);
    }

    navbarTimeline.current[eventId].play();
    animateStars();
  };

  return (
    <div className="grid grid-cols-12 w-full h-fit gap-4 items-baseline justify-center mx-2 px-4 p-2">
      {events.map((event) => {
        return (
          <button
            onClick={() => onClick(parseInt(event.id))}
            key={event.id}
            className={
              "flex flex-col col-span-3 items-center w-full h-full rounded-lg bg-border-carousel text-wrap justify-center " +
              (event.id === eventId.toString() ? "p-[2px]" : "p-[0.8px]")
            }
          >
            <div className="flex flex-col items-center w-full h-full rounded-lg bg-gradient-carousel ">
              <Image
                src={event.planet}
                alt={""}
                width={0}
                height={0}
                sizes="150%"
                className={
                  "w-full object-cover -mt-[7%] -ml-[3%] " +
                  ` planet-image-${event.id}`
                }
              />
              <span
                className={
                  "text-[9px] flex-1 text-center p-0.5 flex items-center justify-center text-wrap w-full " +
                  ` event-name-${event.id}`
                }
              >
                {event.name}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default EventNavBar;
