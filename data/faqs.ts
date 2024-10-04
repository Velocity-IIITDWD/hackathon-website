import {LuGoal} from "react-icons/lu";
import React from "react";
import {IoInformationCircle, IoLocation, IoLogIn, IoPeople} from "react-icons/io5";
import {CgCalendarDates} from "react-icons/cg";
import {BiSolidDirections} from "react-icons/bi";
import {GiChoice, GiTargetPrize} from "react-icons/gi";
import {IoIosPeople} from "react-icons/io";
import {FaQuestionCircle} from "react-icons/fa";
import {GrTechnology} from "react-icons/gr";
import {FaLocationCrosshairs, FaPersonCircleQuestion} from "react-icons/fa6";

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
            "If you're a student from India with a passion for innovation, you're in! Come join us and turn your ideas into reality.",
        icon: React.createElement(IoPeople), // Create the icon element
    },
    {
        question:
            "Team Size",
        answer:
            "2 - 4 , All the team members to be present offline if shortlisted!",
        icon: React.createElement(IoIosPeople), // Create the icon element
    },
    {
        question:
            "What are the judging criteria?",
        answer:
            "Wow us with your innovation, functionality, design, and presentation. Impress the judges with your creativity and make your project the star of the show!",
        icon: React.createElement(GiChoice), // Create the icon element
    },
    {
        question: "Can we submit our project in multiple tracks?",
        answer:
            "No, you can only choose on track and submit your project",
        icon: React.createElement(FaQuestionCircle), // Create the icon element
    },
    {
        question: "What technologies and tools can we use for our project?",
        answer:
            "Bring your tech toolkit! Use any technology or tools you like, but make sure to pack all the essentials for your coding adventure.",
        icon: React.createElement(GrTechnology), // Create the icon element
    },
    {
        question: "Where would the final round be held?",
        answer:
            "At our campus! IIIT Dharwad, located in the northern part of karnataka",
        icon: React.createElement(IoLocation), // Create the icon element
    },
    {
        question: "Can participants from different colleges form a team?",
        answer:
            "Absolutely! Teams can mix and match members from different colleges. We love diverse squads—it’s all about bringing fresh perspectives and unique skills to the table!",
        icon: React.createElement(FaLocationCrosshairs), // Create the icon element
    },
    {
      question: "I have a question and it isnt listed above. What do I do?",
      answer:
        "Feel free to contact us at hackathon@iiitdwd.ac.in or give a call to 8870040108 for any queries!",
      icon: React.createElement(FaQuestionCircle), // Create the icon element
    },
    {
        question: "Why should I participate in this hackathon?",
        answer:
            "You’ll get a chance to flex your skills, earn a certificate (yes, bragging rights included), score some cool goodies, and connect with industry experts who could open doors to future internships.",
        icon: React.createElement(FaPersonCircleQuestion), // Create the icon element
    },
];
