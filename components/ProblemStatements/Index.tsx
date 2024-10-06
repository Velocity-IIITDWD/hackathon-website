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
      className="px-2 scroll-mt-12 text-white pt-16 pb-20 bg-[#070b0d] h-fit w-full flex flex-col items-center"
    >
      <h1 className="text-[3rem] left-8 mt-28 mb-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
        Problems
        <span className="absolute -left-2 md:-left-8 font-anton -bottom-4 z-[-1] text-[5rem] md:text-[150px] text-[#1b1e24]">
          Problems
        </span>
      </h1>
      {problem_data.map((problem, index) => (
        <Question key={index} title={problem.title} description={problem.description} link={problem.link} />
      ))}
    </section>
  );
}

export default ProblemStatements;