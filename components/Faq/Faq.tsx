'use client';

import React, { useState } from 'react';
import DropdownIcon from './DropdownIcon';
import './FaqComponent.css';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What is the objective of the "Hack to the Future" hackathon?',
    answer: 'The hackathon aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving, fostering a supportive environment for learning and networking.',
  },
  {
    question: 'Who can participate in "Hack to the Future"?',
    answer: 'The hackathon is open to all undergraduate students from across India.',
  },
  {
    question: 'How can I register for the hackathon, and is there any registration fee?',
    answer: 'Registration begins on August 1st, 2024, on our website. There is no registration fee.',
  },
  {
    question: 'What are the important dates for the hackathon?',
    answer: 'Key dates include: Hackathon Launch on July 24th, 2024, Registration from August 1st, 2024, Round 1 from August 15th-17th, 2024 (online), Round 1 results on August 24th, 2024, and the Final Round from September 13th-15th, 2024 (on-campus).',
  },
  {
    question: 'What are the tracks or themes for the hackathon?',
    answer: 'Participants can choose from the following themes: FinTech, Healthcare and Bioinformatics, Supply Chain Management and Logistics, Sustainability and Disaster Management, and an Open Category.',
  },
  {
    question: 'What are the prizes for the hackathon?',
    answer: 'Prizes include overall 1st, 2nd, and 3rd prizes, track-specific prizes, a People’s Choice Award, and a prize for the best all-women’s team.',
  },
  {
    question: 'What is the format of the hackathon?',
    answer: 'The hackathon includes submission of ideas in the first round, an offline round for shortlisted teams, final presentations by top teams, and a People’s Choice Award based on audience votes.',
  },
  {
    question: 'What is the Paperless Digital Token System?',
    answer: 'The Paperless Digital Token System is an app-based system for participants to use digital tokens for food and entry purposes, aiming to make the hackathon paperless and technology-driven.',
  },
];

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white">
      <div className="w-full max-w-6xl p-4">
        <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item mb-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg transition-all duration-300 ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-lg">{item.question}</span>
                <span className="transform transition-transform duration-200">
                  <DropdownIcon
                    rotated={openIndex === index}
                    className={`dropdown-icon ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </span>
              </div>
              <div className={`faq-answer mt-2 ${openIndex === index ? 'block' : 'hidden'}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
