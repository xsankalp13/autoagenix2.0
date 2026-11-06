import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import { faqItems } from '../../data/stats';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-dashed border-white/15">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedWrapper variant="fadeUp">
          <SectionHeading
            badge="FAQ"
            title="Common Questions &"
            highlight="Clear Answers"
            description="Everything you need to know about our custom website builds, automation architecture, timelines, and handover."
          />
        </AnimatedWrapper>

        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900 border-dashed border-white/60 shadow-2xl'
                    : 'bg-neutral-950 border-dashed border-white/25 hover:border-white/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none text-white group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-mono tracking-tight group-hover:text-neutral-100 transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-lime-400' : 'text-neutral-300 group-hover:text-white'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-3 text-sm sm:text-base text-white font-mono leading-relaxed border-t border-dashed border-white/20"
                    style={{ color: '#ffffff' }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
