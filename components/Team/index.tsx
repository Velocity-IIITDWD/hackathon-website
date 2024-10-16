import React from 'react';
import TeamMate from './TeamMate';
import teamData from './TeamData'; // Import the JSON data
import { div } from 'framer-motion/client';

// Sort the teams and members alphabetically
const teams = teamData.map((team) => {
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
    <div className="mt-20 flex w-full flex-col items-center justify-center bg-[#070b0d] p-8">
      <div className="flex h-fit w-fit">
        <svg
          className="h-10 w-72"
          width="3476"
          height="177"
          viewBox="0 0 3476 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="87.5" cy="88.5" r="87.5" fill="white" />
          <rect
            x="3298.76"
            y="88.5"
            width="125"
            height="125"
            transform="rotate(-45 3298.76 88.5)"
            fill="white"
          />
          <rect x="87" y="75" width="3311" height="30" fill="white" />
        </svg>

        <div className="mx-7 h-fit text-4xl font-bold">Our Teams</div>

        <svg
          className="h-10 w-64"
          width="3476"
          height="177"
          viewBox="0 0 3476 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="87.5"
            cy="87.5"
            r="87.5"
            transform="matrix(-1 0 0 1 3475.53 1)"
            fill="white"
          />
          <rect
            width="125"
            height="125"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 176.777 88.5)"
            fill="white"
          />
          <rect
            width="3311"
            height="30"
            transform="matrix(-1 0 0 1 3388.53 75)"
            fill="white"
          />
        </svg>
      </div>
      <div className="m-7 flex w-4/5 cursor-pointer justify-between text-xl">
        {teams.map((team) => (
          <div key={team.name}> {team.name.split(' ')[0]} </div>
        ))}
      </div>
      <div className="mb-24 flex w-5/6 flex-wrap items-center justify-evenly gap-x-4 gap-y-8">
        {teams.map((team) =>
          team.members.map((member) => (
            <TeamMate
              key={member.name}
              photo={member.image}
              name={member.name}
              title={member.title}
              linkedinLink={member.linkedIn}
              githubLink={member.github}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Team;
