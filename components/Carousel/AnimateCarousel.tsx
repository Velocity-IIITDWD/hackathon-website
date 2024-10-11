'use client';
import { RefObject, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useAnimateCarousel = (
  carouselRef: RefObject<HTMLDivElement>,
  orbitsRef: RefObject<HTMLImageElement>,
  planetLargeRef: RefObject<HTMLImageElement>,
  starsRef: RefObject<HTMLImageElement>
) => {
  const [toggle, setToggle] = useState(true);

  const topButtonsTimeline = useRef<gsap.core.Timeline[]>([]);

  const { contextSafe } = useGSAP(
    () => {
      const smallPlanetsClasses = [
        '.planet-image-0',
        '.planet-image-1',
        '.planet-image-2',
        '.planet-image-3',
        '.planet-image-4',
      ];

      const eventNameClasses = [
        '.event-name-0',
        '.event-name-1',
        '.event-name-2',
        '.event-name-3',
        '.event-name-4',
      ];

      const eventName = document
        .querySelector('#eventName')
        ?.getBoundingClientRect();

      topButtonsTimeline.current = eventNameClasses.map((value, index) => {
        const timeline = contextSafe(() => {
          const navElementDimension = document
            .querySelector(eventNameClasses[index])
            ?.getBoundingClientRect();

          const animateTimeline = gsap.timeline({ paused: true });
          animateTimeline.to(smallPlanetsClasses[index], {
            y: -16,
            scale: 1.3,
            rotation: '90',
            ease: 'back.out',
            duration: 0.8,
            transformOrigin: 'center center',
          });
          animateTimeline.fromTo(
            '#eventName',
            { opacity: 0, y: -3 },
            { opacity: 1, duration: 0.8, y: 0, ease: 'power3.inOut' },
            '-=50%'
          );
          animateTimeline.fromTo(
            eventNameClasses[index],
            { opacity: 1, scale: 1, width: '100%' },
            {
              width: '400%',
              opacity: 0,
              scale: 2,
              ease: 'back.out',
              duration: 1.5,
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
            '<'
          );
          animateTimeline.set(eventNameClasses[index], {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            width: '100%',
          });
          animateTimeline.set('#eventName', {
            opacity: 1,
            duration: 4,
            y: 0,
            ease: 'power3.inOut',
          });
          return animateTimeline;
        });

        return timeline();
      });
      topButtonsTimeline.current[0].progress(1);
    },
    { scope: carouselRef }
  );

  const starPlay1 = contextSafe(() => {
    return gsap.fromTo(
      starsRef.current,
      { x: 400, y: 400, scale: 1.5 },
      { x: 0, y: 0, duration: 0.5, scale: 2 }
    );
  });
  const starPlay2 = contextSafe(() => {
    return gsap.fromTo(
      starsRef.current,
      { x: -400, y: -400, scale: 1.5 },
      { x: 0, y: 0, duration: 0.5, scale: 2 }
    );
  });

  const starsAnimate = () => {
    if (toggle) {
      starPlay1();
      setToggle(false);
    } else {
      starPlay2();
      setToggle(true);
    }
  };

  const rotateOrbit = contextSafe((angle: string) => {
    gsap.to(orbitsRef?.current, { rotation: angle, ease: 'back.out' });
  });

  const rotatePlanet = contextSafe((angleFrom: string, angleTo: string) => {
    gsap.fromTo(
      planetLargeRef.current,
      { opacity: 0, rotation: angleFrom },
      {
        opacity: 1,
        rotation: angleTo,
        ease: 'back.out',
        duration: 0.5,
        transformOrigin: '52% 51%',
      }
    );
  });

  const fadeElement = contextSafe((target: any) => {
    gsap.fromTo(
      target,
      { opacity: 0, y: -1 },
      {
        y: 0,
        ease: 'expo.inOut',
        duration: 0.5,
        opacity: 1,
      }
    );
  });

  return {
    starsAnimate,
    rotateOrbit,
    rotatePlanet,
    fadeElement,
    contextSafe,
    topButtonsTimeline,
  };
};
