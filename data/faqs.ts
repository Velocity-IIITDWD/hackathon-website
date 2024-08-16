import { LuGoal } from "react-icons/lu";
import React from "react";
import { IoPeople, IoLogIn, IoInformationCircle } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { BiSolidDirections } from "react-icons/bi";
import { GiTargetPrize } from "react-icons/gi";
import { FaFileCircleQuestion } from "react-icons/fa6";

type FAQItem = {
  question: string;
  answer: string;
  icon: React.ReactNode; // Add an icon field
};
export const faqData: FAQItem[] = [
  {
    question: 'What is the objective of the "Hack to the Future" hackathon?',
    answer:
      "The hackathon aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving, fostering a supportive environment for learning and networking.",
    icon: React.createElement(LuGoal), // Create the icon element
  },
  {
    question: 'Who can participate in "Hack to the Future"?',
    answer:
      "The hackathon is open to all undergraduate students from across India.",
    icon: React.createElement(IoPeople), // Create the icon element
  },
  {
    question:
      "How can I register for the hackathon, and is there any registration fee?",
    answer:
      "Registration begins on August 15th, 2024, on our website. There is no registration fee for participating in round 1.",
    icon: React.createElement(IoLogIn), // Create the icon element
  },
  {
    question: "What are the important dates for the hackathon?",
    answer:
      "Key dates include: Hackathon Launch on August 10th, 2024, Registration from August 15st, 2024, Round 1 from September 1st - September 30th, 2024 (online), Round 1 results on October 6th, 2024, and the Final Round on October 19th-20th, 2024 (on-campus).",
    icon: React.createElement(CgCalendarDates), // Create the icon element
  },
  {
    question: "What are the tracks or themes for the hackathon?",
    answer:
      "Participants can choose from the following themes: FinTech, Healthcare and Bioinformatics, Supply Chain Management and Logistics, Sustainability and Disaster Management, and an Open Category.",
    icon: React.createElement(BiSolidDirections), // Create the icon element
  },
  {
    question: "What are the prizes for the hackathon?",
    answer:
      "Prizes include overall 1st, 2nd, and 3rd prizes, track-specific prizes, a People's Choice Award, and a prize for the best all-women's team.",
    icon: React.createElement(GiTargetPrize), // Create the icon element
  },
  {
    question: "What is the format of the hackathon?",
    answer:
      "The hackathon includes submission of ideas in the first round, an offline round for shortlisted teams, final presentations by top teams, and a People's Choice Award based on audience votes.",
    icon: React.createElement(IoInformationCircle), // Create the icon element
  },
  {
    question: "What is the Paperless Digital Token System?",
    answer:
      "The Paperless Digital Token System is an app-based system for participants to use digital tokens for food and entry purposes, aiming to make the hackathon paperless and technology-driven.",
    icon: React.createElement(FaFileCircleQuestion), // Create the icon element
  },
];
