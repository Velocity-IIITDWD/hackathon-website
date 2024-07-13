"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function DesktopAnimate({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        let progress = 0;
        const childs = document.querySelectorAll(".timeline-progress");
        const circles = document.querySelectorAll(".timeline-progress > svg > circle");
        const rocketEl = document.getElementById("timeline-rocket")?.children[0] as HTMLElement;
        const progressRectEl = document.getElementById("timeline-progress-rect");
        const progressRectMax = document.getElementById("timeline-progress-rect-max")?.clientWidth;
        const asteroidsBg = document.getElementById("asteroids-bg");
        const cardsUpper = document.getElementById("timeline-cards-upper");
        const cardsLower = document.getElementById("timeline-cards-lower");
        const tl1 = gsap.timeline();

        childs.forEach((child, index) => {
            const timelineChildElement = child as HTMLElement;
            timelineChildElement.onclick = () => {
                progress = index;

                // animating background
                gsap.to(asteroidsBg, {
                    duration: 0.7,
                    translateX: window.innerWidth < asteroidsBg?.scrollWidth! ? -1 * (asteroidsBg?.scrollWidth! / childs.length) * (index / 2) : 0,
                });

                // animating rocket
                gsap.to(rocketEl, {
                    translateX: index != 0 ? ((progressRectMax! - 32 * 2) * index) / (childs.length - 1) - 320/2 : -320/3
                })
                if (index % 2 == 0) {
                    gsap.to(rocketEl, {
                        rotate: 45,
                        translateY: "-35%",
                        duration: 0.5
                    });
                } else {
                    gsap.to(rocketEl, {
                        rotate: -45,
                        translateY: "35%",
                        duration: 0.5
                    });
                }

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
                        opacity: 1
                    });
                } else {
                    tl1.to(cardsUpper, {
                        opacity: 0,
                        duration: 0.1,
                    });
                    tl1.to(cardsLower, {
                        translateX: ((-1 * (progress)) / 2) * cardsLower?.clientWidth!,
                        duration: 0,
                    });
                    tl1.to(cardsLower, {
                        opacity: 1
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
        gsap.set(rocketEl, {
            rotate: 45,
            translateY: "-35%"
        });
    });
    return <div className="flex flex-col gap-8 relative p-4 max-w-3xl h-fit w-full mb-10 overflow-hidden">{children}</div>;
}

export function MobileAnimate({ children }: { children: React.ReactNode }) {
    const timelineNums = 4;

    useGSAP(() => {
        let progress = 0;
        const childs = document.querySelectorAll(".timeline-progress");
        const circles = document.querySelectorAll(".timeline-progress > svg > circle");
        const cardsEl = document.getElementById("timeline-cards");
        const rocketEl = document.getElementById("timeline-rocket")?.children[0] as HTMLElement;
        const progressRectEl = document.getElementById("timeline-progress-rect");
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
                gsap.to(cardsEl, { yPercent: -100 * progress });
                gsap.to(rocketEl, {
                    x: `${index % 2 === 0 ? messageWidth + 80 : messageContainerWidth! - messageWidth - 50}px`,
                    rotate: -45 * (progress % 2),
                });
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
        gsap.set(rocketEl, {
            x: `${firstMessageWidth + 80}px`,
            rotate: -45 * (progress % 2),
        });
    });
    return <div className="flex px-4 overflow-hidden max-w-3xl h-fit w-full mb-10">{children}</div>;
}
