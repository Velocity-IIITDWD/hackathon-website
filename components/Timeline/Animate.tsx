"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Animate({ children }: { children: React.ReactNode }) {
  const timelineNums = 4;

  useGSAP(() => {
    let progress = 0;
    const childs = document.querySelectorAll(".timeline-progress");
    const circles = document.querySelectorAll(
      ".timeline-progress > svg > circle"
    );
    const cardsEl = document.getElementById("timeline-cards");
    const rocketEl = document.getElementById("timeline-rocket")
      ?.children[0] as HTMLElement;
    const progressRectEl = document.getElementById("timeline-progress-rect");
    const messageContainerWidth = document.getElementById(
      `${childs[0].id}-msg`
    )?.offsetWidth;
    const firstMessageWidth = (document.querySelector(
      `#${childs[0].id}-msg > div`
    ) as HTMLElement)?.offsetWidth;
    const satellite = document.getElementById("satellite");

    childs.forEach((child, index) => {
      const timelineChildElement = child as HTMLElement;
      timelineChildElement.onclick = () => {
        progress = index;
        const messageWidth = (
          document.getElementById(`${child.id}-msg`)?.children[0] as HTMLElement
        )?.offsetWidth;
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
          x: `${index % 2 === 0
            ? messageWidth + 80
            : messageContainerWidth! - messageWidth - 50
            }px`,
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
  return <div className="flex gap-8 relative px-4 overflow-hidden max-w-3xl h-fit w-full mb-10">{children}</div>;
}
