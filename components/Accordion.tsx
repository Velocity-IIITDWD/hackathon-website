'use client';
import React, { useState } from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';

export default function Accordion({
  question,
  response,
  icon,
}: {
  question: string;
  response: string;
  icon: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          className="rounded-t-1 text-dark-500 group relative flex w-full cursor-pointer items-center p-4 text-left font-semibold text-slate-100 transition-all duration-500 ease-in"
          onClick={toggleAccordion}
        >
          <span className="mr-3 rounded border border-white p-2 text-xl">
            {icon}
          </span>{' '}
          {/* Render the icon here */}
          <span>{question}</span>
          <i
            className={`absolute right-0 pt-1 text-base transition-transform duration-500 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <MdOutlineExpandMore />
          </i>
        </button>
      </h6>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 text-sm leading-normal text-slate-400">
          {response}
        </div>
      </div>
    </div>
  );
}
