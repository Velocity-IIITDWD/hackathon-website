import React from "react";
import "./index.css"; // Assuming this contains the styles for .corner-decorator and other custom styles

const AboutUs: React.FC = () => {
  const borderColors = [
    "border-red-500",
    "border-yellow-500",
    "border-green-500",
    "border-blue-500",
    "border-indigo-500",
    "border-purple-500",
    "border-pink-500",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b text-white overflow-hidden p-4">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 sm:mt-16"
        style={{ textShadow: "0 0 4px #fff" }}
      >
        About Us
      </h1>
      <div className="relative mt-4 sm:mt-8 w-full overflow-hidden">
        <div className="flex animate-move-cards space-x-1">
          {Array.from({ length: 11 }).map((_, index) => (
            <div
              key={index}
              className={`w-1/2 sm:w-1/4 md:w-1/5 h-24 sm:h-32 bg-gray-200 rounded-lg shadow-lg border-2 ${
                borderColors[index % borderColors.length]
              } ${index % 2 === 0 ? "mt-2 sm:mt-4" : ""}`}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-8 sm:mt-16 max-w-full sm:max-w-2xl p-4 sm:p-8 bg-gray-700 bg-opacity-75 rounded-lg shadow-lg">
        {/* <div className="corner-decorator corner-top-left"></div> */}
        <div className="absolute -left-4 -top-4 w-10 aspect-square border-violet-500 border">
          <div className="absolute bottom-0 right-0 bg-transparent w-8 aspect-square border-b-0 border-r-0 border-violet-500 border"></div>
        </div>
        <div className="corner-decorator corner-bottom-right"></div>
        <p className="text-center text-sm sm:text-base md:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
