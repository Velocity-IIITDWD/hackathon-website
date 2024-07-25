import React from 'react';
import Image from 'next/image';

const TeamMate = ({ photo, name = 'John Doe' } : any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-purple-300 p-1 rounded-lg">
        <div className="bg-indigo-900 p-6 rounded-lg flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            {photo ? (
              <Image
                src={photo}
                alt={name}
                className="rounded-full object-cover"
                width={128} // w-32 is 128px
                height={128} // h-32 is 128px
              />
            ) : (
              <svg
                className="w-16 h-16 text-gray-400"
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
        </div>
      </div>
      <p className="mt-2 text-center text-white">{name}</p>
    </div>
  );
};

export default TeamMate;
