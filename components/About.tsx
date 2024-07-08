import React from 'react';

const AboutUs: React.FC = () => {
  const borderColors = [
    'border-red-500',
    'border-yellow-500',
    'border-green-500',
    'border-blue-500',
    'border-indigo-500',
    'border-purple-500',
    'border-pink-500'
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <h1 className="text-6xl font-bold mt-16">About Us</h1>
      <div className="relative mt-8 w-full overflow-hidden">
        <div className="flex animate-move-cards space-x-0"> 
          {Array.from({ length: 11 }).map((_, index) => (
            <div
              key={index}
              className={`w-1/5 h-32 bg-gray-200 rounded-lg shadow-lg border-2 ${borderColors[index % borderColors.length]} ${
                index % 2 === 0 ? 'mt-4' : ''
              }`}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-16 max-w-2xl p-8 bg-gray-700 bg-opacity-75 rounded shadow-lg">
        <p className="text-center text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
