"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin)

export function DesktopAnimate({ children }: { children: React.ReactNode }) {
    const positions = [1.94 / 20, 3.965 / 20, 5.97 / 20, 8 / 20, 10.002 / 20]

    useGSAP(() => {
        let progress = 0;
        const childs = document.querySelectorAll(".timeline-progress");
        const circles = document.querySelectorAll(".timeline-progress > svg > circle");
        const rocketEl = document.getElementById("timeline-rocket") as HTMLElement;
        const rocketSize = rocketEl.clientWidth;
        const progressRectEl = document.getElementById("timeline-progress-rect");
        const asteroidsBg = document.getElementById("asteroids-bg");
        const cardsUpper = document.getElementById("timeline-cards-upper");
        const cardsLower = document.getElementById("timeline-cards-lower");
        const tl1 = gsap.timeline();
        let pr = 0;
        gsap.to('#timeline-rocket', {
            motionPath: {
                path: '#sine-path',
                align: '#sine-path',
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: positions[0],
                end: positions[0]
            }
        })

        childs.forEach((child, index) => {
            const timelineChildElement = child as HTMLElement;
            timelineChildElement.onclick = () => {
                const tl2 = gsap.timeline();
                const progressRectMax = document.getElementById("timeline-progress-rect-max")?.clientWidth;
                progress = index;

                // animating background
                gsap.to(asteroidsBg, {
                    duration: 0.7,
                    translateX: window.innerWidth < asteroidsBg?.scrollWidth! ? -1 * (asteroidsBg?.scrollWidth! / childs.length) * (index / 2) : 0,
                });

                // animating rocket
                if (index === 0 || index === childs.length - 1) {
                    gsap.to('#timeline-rocket', {
                        scale: 1,
                        delay: 0.5
                    })
                } else {
                    gsap.to('#timeline-rocket', {
                        scale: 2
                    })
                }
                tl2.to('#timeline-rocket', {
                    motionPath: {
                        path: '#sine-path',
                        align: '#sine-path',
                        alignOrigin: [0.5, 0.5],
                        autoRotate: true,
                        start: positions[pr] % positions.length,
                        end: positions[index] % positions.length,
                    },
                    ease: "power1.inOut",
                    duration: 2 * Math.sqrt(Math.abs(pr - index)),
                    onUpdate: function () {
                        if (this.ratio > 0.5) {
                            pr = index
                        }
                    }
                })

                // animating carousel
                if (index % 2 != 0) {
                    tl1.to(cardsLower, {
                        opacity: 0,
                        duration: 0.1,
                    });
                    tl1.to(cardsUpper, {
                        translateX: ((-1 * (progress - 1)) / 2) * cardsUpper?.clientWidth!,
                        duration: 0,
                    });
                    tl1.to(cardsUpper, {
                        opacity: 1,
                    });
                } else {
                    tl1.to(cardsUpper, {
                        opacity: 0,
                        duration: 0.1,
                    });
                    tl1.to(cardsLower, {
                        translateX: ((-1 * progress) / 2) * cardsLower?.clientWidth!,
                        duration: 0,
                    });
                    tl1.to(cardsLower, {
                        opacity: 1,
                    });
                }

                // animating progress bar and circles
                gsap.to(progressRectEl, {
                    duration: 0.7,
                    width: ((progressRectMax! - 32 * 2) * index) / (childs.length - 1), // removing padding width
                });
                circles.forEach((circle, i) => {
                    gsap.to(circle, { strokeWidth: 0 });
                    if (progress >= i) {
                        gsap.to(circle, { delay: 0.5, duration: 0, fill: "#272077" });
                    } else {
                        gsap.to(circle, { delay: 0.2, duration: 0.2, fill: "#fff" });
                    }
                });
                gsap.set(circles[progress], { delay: 0.5, strokeWidth: 4 });
            };
        });

        // initial stages
        circles.forEach((circle, i) => {
            if (i == 0) {
                gsap.set(circle, { fill: "#272077", strokeWidth: 4 });
            } else {
                gsap.set(circle, { fill: "#fff" });
            }
        });
    });
    return <div className="flex flex-col gap-4 relative pb-2 h-fit w-full">{children}</div>;
}

export function MobileAnimate({ children }: { children: React.ReactNode }) {
    const timelineNums = 5;
    const positions = [0, 10, 25, 45, 60]

    useGSAP(() => {
        let progress = 0;
        const childs = document.querySelectorAll(".mobile-timeline-progress");
        const circles = document.querySelectorAll(".mobile-timeline-progress > svg > circle");
        const cardsEl = document.getElementById("mobile-timeline-cards");
        const progressRectEl = document.getElementById("mobile-timeline-progress-rect");
        const messageContainerWidth = document.getElementById(`${childs[0].id}-msg`)?.offsetWidth;
        const firstMessageWidth = (document.querySelector(`#${childs[0].id}-msg > div`) as HTMLElement)?.offsetWidth;
        const satellite = document.getElementById("satellite");

        childs.forEach((child, index) => {
            const timelineChildElement = child as HTMLElement;
            timelineChildElement.onclick = () => {
                progress = index;
                const messageWidth = (document.getElementById(`${child.id}-msg`)?.children[0] as HTMLElement)?.offsetWidth;
                gsap.to(progressRectEl, {
                    duration: 0.7,
                    height: (400 * index) / (timelineNums - 1),
                });
                gsap.to(satellite, {
                    duration: 0.7,
                    y: (400 * index) / (timelineNums - 1),
                });
                gsap.to('#mobile-timeline-rocket', {
                    duration: 0.7,
                    yPercent: positions[index % positions.length],
                });
                gsap.to(cardsEl, { yPercent: -100 * progress });
                circles.forEach((circle, i) => {
                    if (progress >= i) {
                        gsap.to(circle, { delay: 0.2, duration: 0.2, fill: "#272077" });
                    } else {
                        gsap.to(circle, { delay: 0.2, duration: 0.2, fill: "#fff" });
                    }
                });
            };
        });
        circles.forEach((circle, i) => {
            if (progress >= i) {
                gsap.set(circle, { fill: "#272077" });
            } else {
                gsap.set(circle, { fill: "#fff" });
            }
        });
    });
    return <div className="flex px-4 max-2xs:px-1 sm:gap-2 md:gap-4 overflow-hidden max-w-3xl h-fit w-full mb-10">{children}</div>;
}
