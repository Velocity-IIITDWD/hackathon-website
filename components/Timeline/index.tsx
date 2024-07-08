import Spline from "@splinetool/react-spline/next";
import Animate from "./Animate";
import { MessageBox } from "./MessageBox";
import Image from "next/image";

export default function Timeline() {
  const timelines = [
    {
      id: "Timeline1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, exercitationem?",
    },
    {
      id: "Timeline2",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: "Timeline3",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum ut corporis ratione sit voluptatem velit, architecto consectetur illo dicta!",
    },
    {
      id: "Timeline4",
      text: "adipisicing elit. Repudiandae ipsum ut corporis ratione sit voluptatem velit, architecto consectetur illo dicta!",
    },
  ];
  return (
    <div className="p-4 h-fit w-full flex">
      <div
        className="bg-fuchsia-900/5 grow rounded-xl backdrop-blur-lg flex flex-col items-center gap-8 p-8"
        style={{ boxShadow: "inset 0 0 50px 20px rgba(255,255,255,0.15)" }}
      >
        <p className="text-3xl" style={{ textShadow: "0 0 4px #fff" }}>
          Timeline
        </p>
        <Animate>
          <div className="h-fit flex w-full sticky top-0">
            <div id="timeline-cards" className="h-[424px] relative grow">
              {timelines.map((timeline, index) => (
                <MessageBox id={timeline.id} key={timeline.id} index={index} text={timeline.text} />
              ))}
            </div>
            <div
              id="timeline-rocket"
              className="-order-1 size-0 relative place-self-center"
            >
              <div className="top-1/2 -translate-x-1/2 -translate-y-[65%] size-80 absolute z-10">
                <Spline
                  className="rotate-[215deg]"
                  scene="https://prod.spline.design/DtEMAuHfazJNwid9/scene.splinecode"
                />
              </div>
            </div>
          </div>
          <div
            className="h-fit w-fit flex justify-between z-10 max-w-96 self-center p-2 pr-4 relative"
          >
            <div className="h-[424px] place-self-center flex flex-col justify-between -mr-[15px] z-10">
              {timelines.map((timeline) => (
                <div
                  id={timeline.id}
                  key={timeline.id}
                  className="timeline-progress w-full flex items-center justify-end gap-2 hover:cursor-pointer"
                >
                  <p>{timeline.id}</p>
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: "24px", height: "24px" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                  </svg>
                </div>
              ))}
            </div>
            <Image id="satellite" src="/satellite.svg" width="35" height="35" alt="satellite" className="absolute right-[5px] top-0 z-10" />
            <svg
              className="place-self-center"
              viewBox="0 0 10 400"
              style={{ width: "6x", height: "400px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="6" height="400" fill="white" />
              <rect
                id="timeline-progress-rect"
                width="6"
                height="0"
                fill="#4F46B3"
              />
            </svg>
          </div>
        </Animate>
      </div>
    </div>
  );
}
