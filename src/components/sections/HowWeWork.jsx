import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import DashedFrame from '../ui/DashedFrame';
import { processSteps } from '../../data/process';

export default function HowWeWork() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-dashed border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedWrapper variant="fadeUp">
          <SectionHeading
            badge="EXECUTION FRAMEWORK"
            title="The 5-Step Engineering"
            highlight="Methodology"
            description="A systematic, transparent process engineered to eliminate surprises, deliver projects on time, and build high-performance systems from day one."
          />
        </AnimatedWrapper>

        {/* 5-Step Process Timeline with White Dashed Frames */}
        <div className="space-y-6 lg:space-y-8">
          {processSteps.map((step, index) => {
            return (
              <AnimatedWrapper
                key={step.step}
                variant="fadeUp"
                delay={index * 0.1}
              >
                <DashedFrame
                  crosshairs={true}
                  hover={true}
                  bg="bg-black"
                  className="rounded-2xl p-4 sm:p-8 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-center">
                    {/* Big Step Number */}
                    <div className="lg:col-span-2 flex items-baseline gap-2">
                      <span className="text-2xl sm:text-4xl font-black font-mono text-white">
                        [{step.step}]
                      </span>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-widest">
                        Phase
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="lg:col-span-4">
                      <h3 className="text-base sm:text-xl font-bold text-white font-mono group-hover:text-neutral-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-mono text-neutral-400 mt-0.5 sm:mt-1">
                        // {step.subtitle}
                      </p>
                    </div>

                    {/* Description & Deliverables (Desktop Only for minimal mobile layout) */}
                    <div className="hidden sm:block lg:col-span-6 space-y-3">
                      <p className="text-xs sm:text-sm text-white leading-relaxed font-sans" style={{ color: '#ffffff' }}>
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {step.points.map((pt, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-neutral-950 border border-dashed border-white/20 text-white"
                            style={{ color: '#ffffff' }}
                          >
                            <span className="text-white">+</span>
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DashedFrame>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
