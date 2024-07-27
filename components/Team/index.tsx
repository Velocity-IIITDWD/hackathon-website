import React from "react";
import Image from "next/image";
import TeamMate from "./TeamMate";

const Team: React.FC = () => {
  return (
    <div
      className="mt-20 p-8 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1D2948 0%, #050A16 100%)",
      }}
    >
      {/* Enhanced color patches */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/4 right-[-50px] w-[250px] h-[250px] bg-blue-500 opacity-30 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-100px] left-1/4 w-[350px] h-[350px] bg-indigo-500 opacity-30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-cyan-400 opacity-20 rounded-full blur-[70px]"></div>

      <div className="flex flex-col items-center justify-center mb-16 relative">
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
      </div>

      <div className="flex items-center space-x-4 mb-14">
        <div className="relative flex grow">
          <svg width={'10px'} height={'10px'} className="fill-teamBorderLine absolute top-[-4px] left-0 rotate-45" viewBox="0 0 10 10">
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold z-10"
          style={{ textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
        >
          Technical Team
        </h1>
        <div className="relative flex grow">
          <svg width={'10px'} height={'10px'} className="fill-teamBorderLine absolute top-[-4px] right-0 rotate-45" viewBox="0 0 10 10">
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
      </div>
      <div className="flex justify-evenly items-center space-x-4 mb-24">
        <TeamMate
          photo="/Team/dummyPhoto.png"
          name="Arsalan Shaikh"
          githubLink="https://github.com/your-github"
          linkedinLink="https://linkedin.com/in/your-linkedin"
        />
      </div>
      <div className="flex items-center space-x-4 mb-12">
      <div className="relative flex grow">
          <svg width={'10px'} height={'10px'} className="fill-teamBorderLine absolute top-[-4px] left-0 rotate-45" viewBox="0 0 10 10">
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold z-10"
          style={{ textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
        >
          Designer Team
        </h1>
        <div className="relative flex grow">
          <svg width={'10px'} height={'10px'} className="fill-teamBorderLine absolute top-[-4px] right-0 rotate-45" viewBox="0 0 10 10">
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
      </div>
      <div className="flex justify-evenly items-center space-x-4 mb-24">
        {/* Designer team members can be added here */}
      </div>
    </div>
  );
};

export default Team;