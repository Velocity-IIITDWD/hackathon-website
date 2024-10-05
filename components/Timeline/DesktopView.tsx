import Image from "next/image";
import Asteriods from "@/public/Astroids.png";
import {DesktopAnimate} from "./Animate";
import ColoredCard from "./ColoredCard";
import { timelines } from "./content";
// sine path = y^{3}\ =\ 32\sin x\left\{-2\pi<x<4\pi\right\}

export default function DesktopView() {
    return (
        <div
            className="grow rounded-xl backdrop-blur-sm flex flex-col items-center gap-8 py-4 relative"
            // style={{ boxShadow: "inset 0 0 50px 20px rgba(255,255,255,0.15)" }}
        >
            <div
                className="select-none absolute h-full w-full -mt-8 overflow-hidden grid items-center justify-items-start min-[2369px]:justify-items-center">
                <div id="asteroids-bg" className="h-full max-h-96 aspect-[2369/368]">
                    <Image
                        alt="asteroids bg"
                        src={Asteriods}
                        className="object-contain opacity-30"
                        priority
                    />
                </div>
            </div>
            <h1 className="text-[3rem] mb-8 mt-28 left-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
                TimeLine
                <span
                    className="absolute -left-2 md:-left-8 font-anton -bottom-3 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
          TimeLine
        </span>
            </h1>
            <div className=" px-8">
          <DesktopAnimate>
          <div className="max-w-[calc(100vw-160px)] h-fit overflow-hidden place-self-center z-10">
            <div
              id="timeline-cards-upper"
              className="flex items-center translate-x-full text-center"
            >
              {timelines.map((timeline, index) => {
                if (index % 2 == 0) return null;
                return (
                  <div
                    id={timeline.id}
                    key={timeline.id}
                    className="min-w-full flex justify-center p-4 overflow-x-auto"
                  >
                    <div className="flex w-full max-w-fit">
                      {timeline.details.map((detail, index) => (
                        <ColoredCard
                          key={index}
                          color={detail.color}
                          detail={detail.detail}
                          heading={detail.heading}
                          time={detail.time}
                          odd={index % 2 !== 0}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-4xl relative place-self-center h-fit w-full">
            <div
              id="timeline-rocket"
              className="max-w-4xl z-20 absolute translate-y-[-84%] translate-x-[-42.7%] pointer-events-none"
            >
              <Image
                src="/rocket.png"
                width={640}
                height={360}
                alt="rocket image"
                className="z-20 scale-[40%] xl:scale-[80%]"
              />
            </div>
            <div className="absolute w-full h-fit top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0.14 153.08 2476.75 870.9"
                className="w-full pl-5 pr-6 scale-x-[1.14] -z-50"
              >
                <g
                  transform="translate(0.000000,1097.000000) scale(0.100000,-0.100000)"
                  fill="none"
                  stroke="none"
                >
                  <path
                    id="sine-path"
                    d="M1820 9421 c-455 -84 -901 -416 -1235 -921 -264 -399 -443 -844 -559 -1395 -24 -113 -26 -136 -24 -390 1 -148 3 -254 5 -235 71 670 214 1193 452 1655 162 315 293 498 516 721 330 331 633 479 1040 509 193 15 464 -50 675 -161 268 -142 535 -389 746 -689 333 -476 549 -1070 648 -1790 54 -390 65 -628 76 -1635 5 -481 14 -954 19 -1050 39 -638 134 -1153 296 -1600 136 -374 322 -713 540 -984 99 -122 291 -309 409 -398 345 -259 728 -368 1099 -313 316 48 619 204 899 468 525 492 873 1254 1007 2202 58 407 71 682 81 1710 9 864 14 1030 46 1350 62 639 209 1187 439 1640 210 414 451 716 750 942 173 130 438 252 626 288 121 23 365 20 488 -5 300 -61 591 -230 847 -492 520 -532 843 -1320 948 -2313 40 -374 45 -531 56 -1565 12 -1056 28 -1306 116 -1795 176 -972 631 -1778 1229 -2177 110 -73 301 -166 415 -202 414 -131 839 -62 1233 201 481 319 885 920 1102 1638 175 574 244 1161 245 2060 1 503 17 1326 30 1515 41 598 147 1135 305 1550 333 874 906 1464 1538 1585 119 23 364 20 488 -5 364 -74 715 -311 1014 -685 410 -512 671 -1210 770 -2062 39 -334 46 -515 55 -1393 9 -867 12 -975 31 -1265 54 -818 221 -1460 522 -2015 327 -604 795 -1021 1282 -1144 264 -66 486 -61 740 17 191 59 441 198 590 327 96 83 273 260 316 317 38 48 40 55 37 109 l-3 57 -64 -84 c-93 -121 -317 -336 -441 -423 -115 -81 -328 -192 -430 -224 -154 -50 -206 -57 -405 -56 -173 0 -200 3 -300 28 -306 76 -547 226 -825 513 -171 176 -304 362 -447 628 -265 492 -420 1068 -488 1810 -20 216 -27 491 -35 1260 -10 1008 -22 1258 -75 1665 -94 713 -325 1354 -658 1830 -322 460 -735 768 -1153 860 -140 31 -356 38 -494 16 -216 -34 -467 -141 -665 -282 -125 -89 -320 -274 -437 -414 -351 -419 -622 -1046 -747 -1730 -92 -501 -108 -761 -121 -1935 -10 -985 -18 -1164 -71 -1580 -137 -1079 -580 -1958 -1212 -2402 -193 -135 -440 -238 -635 -264 -107 -14 -375 -6 -452 14 -325 84 -599 250 -850 513 -522 549 -839 1358 -934 2384 -30 316 -37 551 -46 1425 -9 866 -14 1012 -45 1330 -79 797 -289 1461 -627 1981 -83 128 -286 381 -374 465 -201 194 -423 338 -651 425 -251 95 -574 110 -828 38 -175 -49 -412 -169 -570 -287 -102 -76 -340 -316 -428 -430 -413 -538 -665 -1227 -767 -2097 -39 -332 -59 -923 -60 -1755 -1 -589 -16 -906 -61 -1290 -96 -805 -354 -1493 -750 -2001 -89 -113 -141 -168 -290 -305 -214 -197 -464 -331 -749 -401 -37 -9 -120 -13 -250 -13 -181 0 -203 3 -300 28 -251 66 -455 178 -677 371 -484 419 -841 1120 -997 1956 -92 494 -112 821 -126 2070 -10 848 -15 986 -45 1275 -100 949 -372 1675 -837 2236 -288 348 -652 586 -1018 664 -121 26 -382 29 -510 6z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="py-8 pt-4 w-full place-self-center flex flex-col z-10 my-4">
              <svg
                id="timeline-progress-rect-max"
                className="-z-10 w-full h-1.5 place-self-center -mb-3 px-8 translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100%" height="6px" fill="white" />
                <rect
                  id="timeline-progress-rect"
                  width="0"
                  height="6px"
                  fill="#a6dff9"
                />
              </svg>
              <div className="absolute top-[26px] flex justify-between w-full">
                {timelines.map((timeline) => (
                  <div
                    id={timeline.id}
                    key={timeline.id}
                    className="timeline-progress w-fit flex flex-col items-center hover:cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 28 28"
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="14"
                        cy="14"
                        r="12"
                        fill="white"
                        stroke="#a6dff9"
                        strokeWidth="0"
                      />
                    </svg>
                    <p className="text-center">{timeline.heading}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-[calc(100vw-160px)] overflow-hidden place-self-center">
            <div
              id="timeline-cards-lower"
              className="flex items-center text-center h-fit pt-8"
            >
              {timelines.map((timeline, index) => {
                if (index % 2 != 0) return null;
                return (
                  <div
                    id={timeline.id}
                    key={timeline.id}
                    className="min-w-full flex mb-auto justify-center p-4 overflow-x-auto"
                  >
                    <div className="flex w-full max-w-fit">
                      {timeline.details.map((detail, index) => (
                        <ColoredCard
                          key={index}
                          color={detail.color}
                          detail={detail.detail}
                          heading={detail.heading}
                          time={detail.time}
                          odd={index % 2 !== 0}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DesktopAnimate>
                {/* <span className="text-3xl uppercase">Revealing Soon...</span> */}
            </div>
        </div>
    );
}
