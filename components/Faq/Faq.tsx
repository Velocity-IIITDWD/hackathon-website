"use client";

import React, { useState } from "react";
import DropdownIcon from "./DropdownIcon";
import "./FaqComponent.css";
import clsx from "clsx";

type FAQItem = {
    id: string;
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        id: "faq-1",
        question:
            'What is the objective of the "Hack to the Future" hackathon?',
        answer: "The hackathon aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving, fostering a supportive environment for learning and networking.",
    },
    {
        id: "faq-2",
        question: 'Who can participate in "Hack to the Future"?',
        answer: "The hackathon is open to all undergraduate students from across India.",
    },
    {
        id: "faq-3",
        question:
            "How can I register for the hackathon, and is there any registration fee?",
        answer: "Registration begins on August 1st, 2024, on our website. There is no registration fee.",
    },
    {
        id: "faq-4",
        question: "What are the important dates for the hackathon?",
        answer: "Key dates include: Hackathon Launch on July 24th, 2024, Registration from August 1st, 2024, Round 1 from August 15th-17th, 2024 (online), Round 1 results on August 24th, 2024, and the Final Round from September 13th-15th, 2024 (on-campus).",
    },
    {
        id: "faq-5",
        question: "What are the tracks or themes for the hackathon?",
        answer: "Participants can choose from the following themes: FinTech, Healthcare and Bioinformatics, Supply Chain Management and Logistics, Sustainability and Disaster Management, and an Open Category.",
    },
    {
        id: "faq-6",
        question: "What are the prizes for the hackathon?",
        answer: "Prizes include overall 1st, 2nd, and 3rd prizes, track-specific prizes, a People’s Choice Award, and a prize for the best all-women’s team.",
    },
    {
        id: "faq-7",
        question: "What is the format of the hackathon?",
        answer: "The hackathon includes submission of ideas in the first round, an offline round for shortlisted teams, final presentations by top teams, and a People’s Choice Award based on audience votes.",
    },
    {
        id: "faq-8",
        question: "What is the Paperless Digital Token System?",
        answer: "The Paperless Digital Token System is an app-based system for participants to use digital tokens for food and entry purposes, aiming to make the hackathon paperless and technology-driven.",
    },
];

const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const faqOpened = {
        true: "h-fit mt-2",
        false: "h-0",
    };

    const FAQItem = (item: (typeof faqData)[0], index: number) => (
        <div
            key={item.id}
            className={`group text-left w-full h-fit p-4 bg-gray-700 bg-opacity-50 rounded-lg transition-all duration-300`}
            onClick={() => toggleFAQ(item.id)}
        >
            <div className="flex justify-between items-center cursor-pointer">
                <span className="text-lg mr-1">{item.question}</span>
                <span className="transform transition-transform duration-200">
                    <DropdownIcon
                        rotated={openIndex === item.id}
                    />
                </span>
            </div>
            <div
                className={clsx(
                    "overflow-hidden",
                    openIndex === item.id ? "h-fit mt-2" : "h-0"
                )}
            >
                <p>{item.answer}</p>
            </div>
        </div>
    );

    return (
        <div id="faqs" className="flex justify-center items-center h-fit pb-16 text-white [&_*]:transition-all [&_*]:duration-200">
            <div className="w-full max-w-6xl p-4 text-center flex flex-col gap-8">
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-8"
                    style={{ textShadow: "0 0 4px #fff" }}
                >
                    Frequently Asked Questions
                </h1>
                <div className="w-full flex flex-wrap gap-4">
                    <div className="flex flex-col gap-4 shrink-0 w-full lg:max-w-[calc(50%-10px)]">
                        {faqData.slice(0, faqData.length / 2).map(FAQItem)}
                    </div>
                    <div className="flex flex-col gap-4 shrink-0 w-full lg:max-w-[calc(50%-10px)]">
                        {faqData.slice(faqData.length / 2).map(FAQItem)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqComponent;
