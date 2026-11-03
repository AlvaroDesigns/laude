"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  label?: string;
  title: string;
  faqs: FaqItem[];
}

export function ServiceFaqAccordion({
  label,
  title,
  faqs,
}: ServiceFaqAccordionProps) {
  // First item open by default like in reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      style={{ backgroundColor: "rgba(226, 224, 215, 0.34)" }}
      className="mx-4 sm:mx-5 rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden text-left"
    >
      {label && (
        <p className="text-[11px] sm:text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F] mb-3">
          {label}
        </p>
      )}

      <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#676767] font-normal leading-[1.2] mb-8 sm:mb-10 max-w-4xl">
        {title}
      </h2>

      <div className="divide-y divide-stone-200/90 border-t border-b border-stone-200/90">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4 sm:py-5">
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#676767] group-hover:text-stone-900 transition-colors">
                  {faq.question}
                </span>

                <span className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 shrink-0 group-hover:border-stone-500 group-hover:text-stone-700 transition-colors">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 stroke-[1.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="pt-3 pb-1 text-xs sm:text-sm text-[#4a4a4a] font-light leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
