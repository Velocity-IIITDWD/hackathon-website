import React from 'react';
import Accordion from '@/components/Accordion';
import { faqData } from '@/data/faqs';

export default function FAQs() {
  return (
    <section className="w-full py-28">
      <h1 className="font-anton relative left-8 z-[2] w-full text-[3rem] uppercase leading-[1] sm:left-20 md:text-[90px]">
        FAQs
        <span className="font-anton absolute -bottom-3 -left-2 z-[-1] text-[6rem] text-[#1b1e24] md:-left-8 md:text-[200px]">
          FAQs
        </span>
      </h1>

      <div className="mx-auto mt-20 max-w-4xl px-4">
        {faqData?.map((item, index) => (
          <Accordion
            question={item?.question}
            response={item?.answer}
            icon={item?.icon} // Pass the icon prop
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
