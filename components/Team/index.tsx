import React from "react";
import Image from "next/image";
import TeamMate from "./TeamMate";

const Team: React.FC = () => {
  return (
    <div
      className="mt-20 p-8 text-center"
      style={{
        background: "linear-gradient(180deg, #1D2948 0%, #050A16 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center mb-16">
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
            Crewmates not found
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-14">
        <hr className="flex-grow border-t-2 border-teamBorderLine" />
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold z-10"
          style={{ textShadow: "0 0 4px #fff" }}
        >
          Technical Team
        </h1>
        <hr className="flex-grow border-t-2 border-teamBorderLine" />
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
        <hr className="flex-grow border-t-2 border-teamBorderLine" />
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold z-10"
          style={{ textShadow: "0 0 4px #fff" }}
        >
          Designer Team
        </h1>
        <hr className="flex-grow border-t-2 border-teamBorderLine" />
      </div>
      <div className="flex justify-evenly items-center space-x-4 mb-24">
        {/* Designer team members can be added here */}
      </div>
    </div>
  );
};

export default Team;
