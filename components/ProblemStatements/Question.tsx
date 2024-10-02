"use client";
import React from 'react';

interface QuestionProps {
  title: string;
  description: string;
  link: string;
}

function Question({ title, description, link }: QuestionProps) {
  return (
    <div className='my-8 max-w-3xl w-full bg-[#1b1e24] rounded-lg shadow-lg overflow-hidden px-10'>
      <div className='flex w-full justify-center items-center mb-6 mt-6'>
        <div className="relative flex-grow flex items-center">
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-teamBorderLine absolute top-[-4px] left-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
        </div>
        <h1 className="text-xl md:text-2xl font-anton uppercase text-center mx-4 text-white whitespace-nowrap">
          {title}
        </h1>
        <div className="relative flex-grow flex items-center">
          <hr className="flex-grow border-t-2 border-teamBorderLine" />
          <svg
            width={"10px"}
            height={"10px"}
            className="fill-teamBorderLine absolute top-[-4px] right-0 rotate-45"
            viewBox="0 0 10 10"
          >
            <rect width={"10px"} height={"10px"} />
          </svg>
        </div>
      </div>
      <div className='px-6 pb-6'>
        <p className='text-gray-200'>{description}</p>
      </div>
      <div className='px-6 pb-6'>
        {link !== '#' && (
          <button
            onClick={() => {
              window.open(link, "_blank");
            }}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            More Details
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
