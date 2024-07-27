import Image from "next/image";
import Asteriods from "@/public/Astroids.png";
import { DesktopAnimate as Animate } from "./Animate";
import { timelines } from "./content";
import ColoredCard from "./ColoredCard";

export default function DesktopView() {
    return (
        <div
            className="grow rounded-xl backdrop-blur-sm flex flex-col items-center gap-8 px-8 py-4 relative"
            style={{ boxShadow: "inset 0 0 50px 20px rgba(255,255,255,0.15)" }}
        >
            <div className="select-none absolute h-full w-full -mt-8 overflow-hidden grid items-center justify-items-start min-[2369px]:justify-items-center">
                <div
                    id="asteroids-bg"
                    className="h-full max-h-96 aspect-[2369/368]"
                >
                    <Image
                        alt="asteroids bg"
                        src={Asteriods}
                        className="object-contain opacity-30"
                        priority
                    />
                </div>
            </div>
            <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 z-10"
                style={{ textShadow: "0 0 4px #fff" }}
            >
                Timeline
            </h1>
            <Animate>
                <div className="max-w-[calc(100vw-160px)] h-fit overflow-hidden place-self-center">
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
                                        {timeline.details.map(
                                            (detail, index) => (
                                                <ColoredCard
                                                    key={index}
                                                    color={detail.color}
                                                    detail={detail.detail}
                                                    heading={detail.heading}
                                                    time={detail.time}
                                                    odd={index % 2 !== 0}
                                                />
                                            )
                                        )}
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
                            viewBox="0 0 2346.000000 974.000000"
                            preserveAspectRatio="xMidYMid meet"
                            className="w-full pl-5 pr-6 scale-x-[1.22]"
                        >
                            <g
                                transform="translate(0.000000,974.000000) scale(0.100000,-0.100000)"
                                fill="none"
                                stroke="none"
                            >
                                <path
                                    id="sine-path"
                                    d="M2590 9415 c-136 -16 -171 -23 -311 -69 -434 -141 -865 -520 -1176 -1034 -335 -553 -535 -1210 -617 -2027 -30 -296 -39 -516 -40 -920 l-1 -410 24 -3 c13 -2 28 2 32 10 5 7 9 87 9 178 1 390 24 882 56 1190 84 810 304 1490 659 2036 158 244 422 528 625 672 205 145 447 253 660 293 103 20 389 17 490 -4 473 -99 912 -434 1267 -967 331 -495 560 -1188 648 -1960 38 -331 45 -502 55 -1235 12 -1003 18 -1301 30 -1495 52 -862 202 -1506 485 -2085 291 -594 689 -1030 1140 -1251 507 -247 1040 -205 1533 121 122 80 344 275 447 391 469 532 775 1266 904 2169 65 451 79 739 91 1905 10 872 15 1028 45 1345 83 862 309 1566 683 2123 468 697 1076 1037 1697 947 455 -66 893 -369 1252 -868 334 -464 562 -1052 678 -1751 79 -475 105 -891 105 -1696 1 -1086 31 -1666 110 -2143 158 -943 520 -1701 1052 -2198 329 -307 668 -470 1041 -499 628 -47 1232 318 1700 1030 364 555 593 1290 672 2155 30 340 36 526 45 1440 9 963 19 1213 60 1574 123 1081 490 1935 1066 2480 356 337 754 505 1159 488 206 -8 398 -58 586 -153 716 -358 1267 -1252 1473 -2389 69 -379 102 -746 115 -1278 5 -206 11 -331 18 -338 6 -6 21 -9 34 -7 l24 3 -2 265 c-7 1058 -161 1865 -485 2540 -288 602 -685 1042 -1143 1269 -147 73 -216 98 -355 130 -324 75 -674 30 -988 -128 -544 -273 -1015 -866 -1296 -1631 -143 -392 -241 -838 -290 -1330 -33 -318 -46 -693 -51 -1434 -9 -1143 -26 -1468 -101 -1941 -144 -899 -477 -1633 -966 -2126 -283 -286 -565 -448 -908 -525 -94 -21 -393 -24 -490 -5 -346 67 -619 222 -919 519 -241 239 -402 466 -571 804 -232 466 -379 992 -449 1613 -42 369 -52 600 -61 1495 -11 1123 -21 1356 -71 1755 -144 1154 -556 2030 -1209 2571 -346 287 -766 432 -1146 395 -389 -39 -733 -208 -1054 -517 -265 -257 -456 -527 -640 -908 -234 -484 -377 -1019 -445 -1669 -35 -339 -46 -643 -55 -1572 -10 -914 -14 -1044 -45 -1395 -63 -692 -219 -1282 -475 -1785 -192 -380 -388 -641 -668 -888 -346 -306 -710 -450 -1097 -434 -569 24 -1096 391 -1511 1053 -393 627 -602 1416 -654 2471 -6 114 -15 613 -20 1108 -10 898 -19 1141 -55 1475 -73 667 -226 1217 -475 1705 -108 212 -147 278 -268 447 -455 641 -1066 973 -1662 903z"
                                />
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
                                fill="#4F46B3"
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
                                            stroke="#AE6EF1"
                                            strokeWidth="0"
                                        />
                                    </svg>
                                    <p className="text-center">
                                        {timeline.heading}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[calc(100vw-160px)] h-fit overflow-hidden place-self-center">
                    <div
                        id="timeline-cards-lower"
                        className="flex items-center text-center"
                    >
                        {timelines.map((timeline, index) => {
                            if (index % 2 != 0) return null;
                            return (
                                <div
                                    id={timeline.id}
                                    key={timeline.id}
                                    className="min-w-full flex justify-center p-4 overflow-x-auto"
                                >
                                    <div className="flex w-full max-w-fit">
                                        {timeline.details.map(
                                            (detail, index) => (
                                                <ColoredCard
                                                    key={index}
                                                    color={detail.color}
                                                    detail={detail.detail}
                                                    heading={detail.heading}
                                                    time={detail.time}
                                                    odd={index % 2 !== 0}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Animate>
        </div>
    );
}
