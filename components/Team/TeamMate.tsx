'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './index.css';

const TeamMate = ({ photo, name, githubLink, linkedinLink, title }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="perspective-1000 relative z-20 h-52 w-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute h-full w-full transition-all duration-500 ${
          isHovered ? 'rotateY-180' : ''
        }`}
      >
        <div className="bg-teamBackground backface-hidden border-teamBorderLine absolute h-full w-full rounded-lg border-2 shadow-lg" />
        <div className="backface-hidden rotateY-180 absolute h-full w-full rounded-lg bg-blue-300 shadow-lg" />
      </div>

      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div
          className={`relative transition-all duration-500 ${
            isHovered ? '-translate-y-12 transform' : ''
          }`}
        >
          <div
            className={`relative z-20 flex translate-y-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-md transition-all duration-500 ${
              isHovered ? 'size-24' : 'size-32'
            }`}
          >
            {photo ? (
              <Image
                src={photo}
                alt={name}
                className="h-full w-full rounded-full object-cover"
                width={128}
                height={128}
              />
            ) : (
              <svg
                className={`text-white transition-all duration-500 ${
                  isHovered ? 'h-10 w-10' : 'h-16 w-16'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-3.314 0-6 2.686-6 6v1h12v-1c0-3.314-2.686-6-6-6z"
                />
              </svg>
            )}
          </div>
          <div
            className={`absolute -left-7 top-4 z-10 w-20 transition-all delay-100 duration-1000 ${
              isHovered
                ? '-translate-x-4 translate-y-6 rotate-12 transform opacity-100'
                : '-translate-x-8 translate-y-20 -rotate-12 transform opacity-0'
            }`}
          >
            <Image
              src={'/astronaut.png'}
              height={48}
              width={96}
              alt="Astronaut image"
              className="transform transition-all duration-500 hover:rotate-6"
            />
          </div>
        </div>

        <div
          className={`mt-4 transition-all delay-100 duration-500 ${
            isHovered
              ? 'translate-y-0 transform opacity-100'
              : 'translate-y-8 transform opacity-0'
          }`}
        >
          <p className="text-center text-sm font-semibold text-white">{name}</p>
          <p className="text-center text-xs text-white">{title}</p>
          <div className="mt-2 flex justify-center space-x-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.481 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.909-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.086 2.91.83.091-.647.35-1.086.636-1.336-2.22-.252-4.555-1.11-4.555-4.943 0-1.092.39-1.987 1.03-2.687-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.563 9.563 0 0112 6.806c.851.004 1.705.115 2.505.338 1.91-1.295 2.75-1.026 2.75-1.026.545 1.376.202 2.393.099 2.646.64.7 1.029 1.595 1.029 2.687 0 3.841-2.339 4.687-4.566 4.934.359.31.678.922.678 1.857 0 1.341-.012 2.42-.012 2.751 0 .267.181.577.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.789-1.5-1.5s.534-1.5 1.5-1.5c.966 0 1.5.789 1.5 1.5s-.534 1.5-1.5 1.5zm13.5 11.5h-3v-5c0-1.206-.794-1.5-1.232-1.5-.792 0-1.268.618-1.268 1.5v5h-3v-10h3v1.5c.37-.556 1.045-1.5 2.5-1.5 1.786 0 3 1.211 3 3.5v6.5z" />
                </svg>
              </a>
            )}
            {!githubLink && !linkedinLink && (
              <div className="size-5 bg-transparent" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMate;
