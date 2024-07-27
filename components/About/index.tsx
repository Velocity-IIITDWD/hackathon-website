"use client";
import React from "react";
import "./index.css";
import CountdownTimer from "@/components/About/CountdownTimer";

const AboutUs: React.FC = () => {
  const hackathonStartDate = new Date("2024-11-20T00:00:00");

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white  p-4 min-h-screen">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mt-8 mb-6 text-center"
        style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
      >
        Hackathon will start in:
      </h1>
      <div className="flex justify-center items-center mb-12">
        <CountdownTimer endDate={hackathonStartDate} />
      </div>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
      >
        About the Hackathon
      </h2>
      <div className="relative max-w-4xl w-full">
        <svg className="absolute top-0 left-0 -mt-6 -ml-6 opacity-50" width="60" height="60" viewBox="0 0 97 95" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1V94H16.0456V17.5743H95.8707V1H1Z" stroke="#CEB7FF" stroke-width="2"/>
        </svg>
        
        <div className="bg-gray-800 bg-opacity-80 rounded-lg shadow-2xl p-8 backdrop-filter backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            This event aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving. With a focus on fostering a supportive environment for learning and networking, the Hackathon will empower participants to develop prototypes and explore cutting-edge technologies.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            By leveraging the expertise of industry mentors and fostering cross-disciplinary collaboration, our proposal aims to create a stimulating environment where participants can unleash their creativity and make meaningful contributions to the tech community.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            We welcome undergraduate students from across India to participate and showcase their creativity. In the first round, participants are required to submit their ideas using a provided PowerPoint template, clearly and concisely articulating their concepts. Shortlisted teams advance to the offline round, where they further develop their ideas into tangible projects.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            This intense round takes place on-site at M-block, adding an element of excitement and real-time collaboration. Submissions for the offline round take place on Sunday morning, adding a sense of urgency and focus to the event. The top three teams from each track are selected based on the merit of their projects and presentations.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            These top teams then present their ideas and projects in front of a panel of esteemed judges. The top team from each track showcases their project to a general audience. After careful deliberation, the judges select the top three teams overall, awarding them the coveted 1st, 2nd, and 3rd prizes. The top two outsider teams from each track pitch to the audience, with the audience votes determining the winner.
          </p>
        </div>
        
        <svg className="absolute bottom-0 right-0 -mb-6 -mr-6 opacity-50" width="60" height="60" viewBox="0 0 98 95" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M96.4961 94V1H81.4505V77.4257H1.62543V94H96.4961Z" stroke="#CEB7FF" stroke-width="2"/>
        </svg>
      </div>
    </div>
  );
};

export default AboutUs;