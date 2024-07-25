"use client";
import React from "react";
import "./index.css";
import CountdownTimer from "@/components/About/CountdownTimer";

const AboutUs: React.FC = () => {
  const borderColors = [
    "border-red-500",
    "border-yellow-500",
    "border-green-500",
    "border-blue-500",
    "border-indigo-500",
    "border-purple-500",
    "border-pink-500",
  ];

  const hackathonStartDate = new Date("2024-11-20T00:00:00");

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b text-white overflow-hidden p-4">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-2"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        Hackathon will start in:
      </h1>
      <div className="flex justify-center items-center">
        <CountdownTimer endDate={hackathonStartDate} />
      </div>
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 sm:mt-12 mb-4"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        About the Hackathon:
      </h1>
      <div className="relative mt-2 sm:mt-2 max-w-full sm:max-w-3xl p-4 sm:p-8 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg">
        <div className="corner-decorator corner-top-left"></div>
        <div className="corner-decorator corner-bottom-right"></div>
        <p className="text-center text-sm sm:text-base md:text-lg">
          This event aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving. With a focus on fostering a supportive environment for learning and networking, the Hackathon will empower participants to develop prototypes and explore cutting-edge technologies.
          <br /><br />
          By leveraging the expertise of industry mentors and fostering cross-disciplinary collaboration, our proposal aims to create a stimulating environment where participants can unleash their creativity and make meaningful contributions to the tech community.
          <br /><br />
          We welcome undergraduate students from across India to participate and showcase their creativity. In the first round, participants are required to submit their ideas using a provided PowerPoint template, clearly and concisely articulating their concepts. Shortlisted teams advance to the offline round, where they further develop their ideas into tangible projects.
          <br /><br />
          This intense round takes place on-site at M-block, adding an element of excitement and real-time collaboration. Submissions for the offline round take place on Sunday morning, adding a sense of urgency and focus to the event. The top three teams from each track are selected based on the merit of their projects and presentations.
          <br /><br />
          These top teams then present their ideas and projects in front of a panel of esteemed judges. The top team from each track showcases their project to a general audience. After careful deliberation, the judges select the top three teams overall, awarding them the coveted 1st, 2nd, and 3rd prizes. The top two outsider teams from each track pitch to the audience, with the audience votes determining the winner.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
