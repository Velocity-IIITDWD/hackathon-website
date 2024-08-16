import React from "react";
import Image from "next/image";
import TeamMate from "./TeamMate";

const Team: React.FC = () => {
  return (
    <div className="mt-20 p-8 text-center bg-[#070b0d]">
      {/* <div className="flex flex-col items-center justify-center mb-16">
        <div className="relative">
          <Image
            src={"/404_Crewmates.png"}
            width={300}
            height={200}
            alt="No crewmates found"
            className="mb-0"
          />
          <p
            className="text-2xl font-bold absolute bottom-0 transform left-10"
            style={{ color: "#4D3E8C" }}
          >
            Crewmates Found
          </p>
        </div>
      </div> */}

      <div className="flex items-center space-x-4 mb-14">
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-slate-200 absolute top-[-4px] left-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-slate-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase font-bold z-10">
          Technical Team
        </h1>
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-slate-200 absolute top-[-4px] right-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-slate-400" />
        </div>
      </div>
      <div className="flex justify-evenly items-center space-x-4 mb-24">
        <TeamMate
          photo="/Team/dummyPhoto.png"
          name="Aayush Kumar"
          githubLink="https://github.com/Aayush-Kr-13"
          linkedinLink="https://www.linkedin.com/in/aayush-kumar-904967218/"
        />
      </div>
      <div className="flex items-center space-x-4 mb-12">
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-slate-200 absolute top-[-4px] left-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-slate-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase font-anton font-bold z-10">
          Designer Team
        </h1>
        <div className="relative flex grow">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-slate-200 absolute top-[-4px] right-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-slate-400" />
        </div>
      </div>
      <div className="flex justify-evenly items-center space-x-4 mb-24">
        {/* Designer team members can be added here */}
      </div>
    </div>
  );
};

export default Team;
