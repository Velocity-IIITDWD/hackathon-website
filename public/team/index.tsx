import React from "react";
import TeamMate from "./TeamMate";
import teamData from "./TeamData"; // Import the JSON data

// Sort the teams and members alphabetically
const teams = teamData
  .sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase()
      ? 1
      : a.name.toUpperCase() < b.name.toUpperCase()
      ? -1
      : 0
  )
  .map((team) => {
    team.members.sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase()
        ? 1
        : a.name.toUpperCase() < b.name.toUpperCase()
        ? -1
        : 0
    );
    return team;
  });

const Team: React.FC = () => {
  return (
    <div className="mt-20 p-8 text-center bg-[#070b0d]">
      {teams.map((team) => (
        <div key={team.name}>
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
              {team.name}
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
          <div className="flex justify-evenly flex-wrap gap-y-8 gap-x-4 items-center mb-24">
            {team.members.map((member) => (
              <TeamMate
                key={member.name}
                photo={member.image}
                name={member.name}
                title={member.title}
                linkedinLink={member.linkedIn}
                githubLink={member.github}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
