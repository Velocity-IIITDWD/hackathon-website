import React from 'react';
import Question from './Question';

interface ProblemData {
  title: string;
  description: string;
  link: string;
}

const problem_data: ProblemData[] = [
  {
    title: 'SKILLSDA - INGUS KNOWLEDGE ACADEMY',
    description:
      'Develop an immersive virtual lab for cybercrime investigations, focusing on cloud breaches, cryptocurrency fraud, and blockchain anomalies. Create customizable environments where students can simulate real-world forensic scenarios. The solution must include a detailed lab manual with step-by-step instructions and pre-configured setups, providing an interactive and hands-on experience for solving modern digital crimes.',
    link: 'https://docs.google.com/document/d/1YUllCpQJT1luTo8udgUSR46xLmrP-SN-QJD-Cz-Ljvo/edit',
  },
  {
    title: 'INFOKALASH',
    description:
      'Develop a scalable AutoML-MLOps platform prototype with the following requirements: integrate an end-to-end ML workflow using open-source AutoML tools, and design intuitive UI wireframes that ensure a seamless user journey. The solution should focus on scalability and ease of use, providing a fully functional prototype that streamlines the machine learning lifecycle from data ingestion to deployment.',
    link: 'https://docs.google.com/document/d/1rOiZUC9y77u_pa135wPBYiKU-4bdgwGj2LRFvrbMeoQ/edit',
  },
  {
    title: 'AEQUS',
    description:
      'Develop a method to predict tool wear or failure in a machining center based on vibrational data from the machine',
    link: 'https://docs.google.com/document/d/1h96o9HlmUYNMeL43r3lEH6xxCyuDZILAeiqAAsGp3sU/edit',
  },
  {
    title: 'ZEBU STATEMENT 1',
    description:
      'A standalone path tracing renderer is a software application that uses the path tracing algorithm to generate photorealistic images. By simulating the physics of light, path tracing can produce highly accurate and visually stunning renderings. Integrating AI into this process can enhance the capabilities of the renderer and provide additional benefits.',
    link: 'https://docs.google.com/document/d/1uTu2Z6X_ADfhlfqnYkcwudpIMVXQRUYnd9d0YqCudDc/edit',
  },
  {
    title: 'ZEBU STATEMENT 2',
    description:
      'Upscaling involves increasing the resolution of an image or video sequence, making it appear larger or sharper. Traditional upscaling methods often result in artifacts and blurriness. AI-based upscaling techniques leverage advanced machine learning algorithms to produce higher-quality results.',
    link: 'https://docs.google.com/document/d/1TWxgeeEgjLl2QRJuFyTsbBBvR7MrtMHFi4Bp4OO7-Qs/edit',
  },
];

function ProblemStatements() {
  return (
    <section
      data-idx="1"
      id="problem"
      className="flex h-fit w-full scroll-mt-12 flex-col items-center bg-[#070b0d] px-2 pb-20 pt-16 text-white"
    >
      <h1 className="font-anton relative left-8 z-[2] mb-8 mt-28 w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]">
        Problems
        <span className="font-anton absolute -bottom-4 -left-2 z-[-1] text-[5rem] text-[#1b1e24] md:-left-8 md:text-[150px]">
          Problems
        </span>
      </h1>
      {problem_data.map((problem, index) => (
        <Question
          key={index}
          title={problem.title}
          description={problem.description}
          link={problem.link}
        />
      ))}
    </section>
  );
}

export default ProblemStatements;
