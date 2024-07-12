"use client";

import { useState } from 'react';
import DropdownIcon from './DropdownIcon';
import './FaqComponent.css'; 
type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'When and where will "Hack to the Future" take place?',
    answer: 'Hack to the Future will take place from September 13th to September 15th, 2024, at IIIT Dharwad.',
  },
  {
    question: 'Who can participate in "Hack to the Future"?',
    answer: 'The hackathon is open to all undergraduate students from across India.',
  },
  {
    question: 'How can I register for the hackathon, and is there any registration fee?',
    answer: 'You can register on our website starting from August 1st, 2024. There is no registration fee.',
  },
  {
    question: 'What are the tracks or themes available for the hackathon?',
    answer: 'Participants can choose from the following themes: FinTech, Healthcare and Bioinformatics, Supply Chain Management and Logistics, Sustainability and Disaster Management, and an Open Category.',
  },
];

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-6xl p-4">
        <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full h-20 text-left px-4 py-2 bg-transparent rounded-lg focus:outline-none focus:ring focus:ring-purple-500 hover:bg-gray-700 hover:bg-opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg">{item.question}</span>
                  <span className="transform transition-transform duration-200">
                    <DropdownIcon rotated={openIndex === index} />
                  </span>
                </div>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="mt-2 px-4 py-2 bg-gray-700 bg-opacity-50 rounded-lg">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
