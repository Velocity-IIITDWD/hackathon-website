'use client';
import React from 'react';

interface QuestionProps {
  title: string;
  description: string;
  link: string;
}

function Question({ title, description, link }: QuestionProps) {
  return (
    <div className="my-8 w-full max-w-3xl overflow-hidden rounded-lg bg-[#1b1e24] px-10 shadow-lg">
      <div className="mb-6 mt-6 flex w-full items-center justify-center">
        <div className="relative flex flex-grow items-center">
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute left-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
          <hr className="border-teamBorderLine flex-grow border-t-2" />
        </div>
        <h1 className="font-anton mx-4 whitespace-nowrap text-center text-xl uppercase text-white md:text-2xl">
          {title}
        </h1>
        <div className="relative flex flex-grow items-center">
          <hr className="border-teamBorderLine flex-grow border-t-2" />
          <svg
            width={'10px'}
            height={'10px'}
            className="fill-teamBorderLine absolute right-0 top-[-4px] rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={'10px'} height={'10px'} />
          </svg>
        </div>
      </div>
      <div className="px-6 pb-6">
        <p className="text-gray-200">{description}</p>
      </div>
      <div className="px-6 pb-6">
        {link !== '#' && (
          <button
            onClick={() => {
              window.open(link, '_blank');
            }}
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
          >
            More Details
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
