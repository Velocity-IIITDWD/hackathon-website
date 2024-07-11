import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import Asteriods from "@/public/Astroids.png";
import { DesktopAnimate as Animate } from "./Animate";
import { timelines } from "./data";

export default function DesktopView() {
    return (
        <div className="p-4 h-fit w-full flex">
            <div
                className="bg-fuchsia-900/15 grow rounded-xl backdrop-blur-sm flex flex-col items-center gap-8 p-8 relative"
                style={{ boxShadow: "inset 0 0 50px 20px rgba(255,255,255,0.15)" }}
            >
                <div className="select-none absolute h-full w-full -mt-8 overflow-hidden grid items-center justify-items-start min-[2369px]:justify-items-center">
                    <div id="asteroids-bg" className="h-full max-h-96 aspect-[2369/368]">
                        <Image alt="asteroids bg" src={Asteriods} className="object-contain opacity-30" priority />
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 z-10" style={{ textShadow: "0 0 4px #fff" }}>
                    Timeline
                </h1>
                <Animate>
                    <div className="w-full overflow-hidden">
                        <div id="timeline-cards-upper" className="flex translate-x-full opacity-0 backdrop-brightness-0 text-center">
                            {timelines.map((timeline, index) => {
                                if (index % 2 == 0) return null;
                                return (
                                    <div id={timeline.id} key={timeline.id} className="min-w-full border grid place-content-center p-4">
                                        {timeline.text}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div id="timeline-rocket" className="z-20 size-0 absolute top-0 left-0 place-self-center pointer-events-none">
                        <div className="-translate-x-1/3 size-80 z-20">
                            <Spline className="rotate-[90deg]" scene="https://prod.spline.design/DtEMAuHfazJNwid9/scene.splinecode" />
                        </div>
                    </div>
                    <div className="w-full place-self-center flex flex-col z-10 my-4">
                        <svg
                            id="timeline-progress-rect-max"
                            className="-z-10 w-full h-1.5 place-self-center -mb-3 px-8 translate-y-1/2"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="100%" height="6px" fill="white" />
                            <rect id="timeline-progress-rect" width="0" height="6px" fill="#4F46B3" />
                        </svg>
                        <div className="flex justify-between w-full">
                            {timelines.map((timeline) => (
                                <div id={timeline.id} key={timeline.id} className="timeline-progress w-fit flex flex-col items-center hover:cursor-pointer">
                                    <svg viewBox="0 0 28 28" style={{ width: "24px", height: "24px" }} xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14" cy="14" r="12" fill="white" stroke="#AE6EF1" strokeWidth="0" />
                                    </svg>
                                    <p>{timeline.id}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full overflow-hidden">
                        <div id="timeline-cards-lower" className="flex backdrop-brightness-0 text-center">
                            {timelines.map((timeline, index) => {
                                if (index % 2 != 0) return null;
                                return (
                                    <div id={timeline.id} key={timeline.id} className="min-w-full border grid place-content-center p-4">
                                        {timeline.text}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Animate>
            </div>
        </div>
    );
}
