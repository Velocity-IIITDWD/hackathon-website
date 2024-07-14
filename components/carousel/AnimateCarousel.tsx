"use client";
import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useAnimateCarousel = (
  carouselRef: RefObject<HTMLDivElement>,
  orbitsRef: RefObject<HTMLImageElement>,
  planetLargeRef: RefObject<HTMLImageElement>,
  starsRef: RefObject<HTMLImageElement>
) => {
  const { contextSafe } = useGSAP({ scope: carouselRef });

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
      planetLargeRef.current,
      { opacity: 0, rotation: angleFrom },
      {
        opacity: 1,
        rotation: angleTo,
        ease: "back.out",
        duration: 0.5,
        transformOrigin: "52% 51%",
      }
    );
  });

  const fadeElement = contextSafe(() => {
    gsap.fromTo("#eventName", { opacity: 0 }, { opacity: 1 });
  });

  return { starsAnimate, rotateOrbit, rotatePlanet, fadeElement, contextSafe };
};

export const useAnimateMobileCarousel = (
  carouselRef: RefObject<HTMLDivElement>,
  orbitsRef: RefObject<HTMLImageElement>,
  planetLargeRef: RefObject<HTMLImageElement>,
  starsRef: RefObject<HTMLImageElement>
) => {
  const { starsAnimate, rotateOrbit, rotatePlanet, fadeElement, contextSafe } =
    useAnimateCarousel(carouselRef, orbitsRef, planetLargeRef, starsRef);

  const navbarTimeline = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
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

    const eventName = document
      .querySelector("#eventName")
      ?.getBoundingClientRect();

    navbarTimeline.current = eventNameClasses.map((value, index) => {
      const timeline = contextSafe(() => {
        const navElementDimension = document
          .querySelector(eventNameClasses[index])
          ?.getBoundingClientRect();

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
  }, []);

  return {
    starsAnimate,
    rotateOrbit,
    rotatePlanet,
    fadeElement,
    contextSafe,
    navbarTimeline,
  };
};
