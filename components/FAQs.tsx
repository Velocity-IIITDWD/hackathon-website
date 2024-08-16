import React from "react";
import Accordion from "@/components/Accordion";
import { faqData } from "@/data/faqs";

export default function FAQs() {
  return (
    <section className="w-full py-28">
      <h1 className="text-[3rem] left-8 sm:left-20 w-full relative md:text-[90px] leading-[1] z-[2] uppercase font-anton">
        FAQs
        <span className="absolute -left-2 md:-left-8 font-anton -bottom-3 z-[-1] text-[6rem] md:text-[200px] text-[#1b1e24]">
          FAQs
        </span>
      </h1>

      <div className="max-w-4xl mx-auto mt-20 px-4">
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
