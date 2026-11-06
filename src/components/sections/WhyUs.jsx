import React from 'react';
import { Zap, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import DashedFrame from '../ui/DashedFrame';
import { trustHighlights, stats } from '../../data/stats';

export default function WhyUs() {
  const iconMap = {
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
    Sparkles: Sparkles,
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-dashed border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedWrapper variant="fadeUp">
          <SectionHeading
            badge="WHY AUTOAGENIX"
            title="The Engineering Standard"
            highlight="Modern Brands Require"
            description="We discard outdated templates and chaotic agency bureaucracy. Everything we build is precision-coded to increase speed, conversion, and reliability."
          />
        </AnimatedWrapper>

        {/* 4 Trust Feature Cards in Minimalist 2x2 Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {trustHighlights.map((item, index) => {
            const Icon = iconMap[item.icon] || Zap;

            return (
              <AnimatedWrapper
                key={index}
                variant="fadeUp"
                delay={index * 0.1}
                className="h-full"
              >
                <DashedFrame
                  crosshairs={true}
                  hover={true}
                  bg="bg-black"
                  className="h-full rounded-2xl p-3.5 sm:p-6 group text-left"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neutral-950 border border-dashed border-white/20 text-white flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-white group-hover:text-black transition-all">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-white font-mono leading-tight">
                    {item.title}
                  </h3>
                  <p className="hidden sm:block mt-2.5 text-xs sm:text-sm text-white leading-relaxed font-sans" style={{ color: '#ffffff' }}>
                    {item.description}
                  </p>
                </DashedFrame>
              </AnimatedWrapper>
            );
          })}
        </div>

        {/* Stats Grid Banner with Dashed Lines (Desktop Only to reduce mobile clutter) */}
        <AnimatedWrapper variant="fadeUp" delay={0.4} className="hidden sm:block mt-14">
          <DashedFrame crosshairs={true} hover={true} bg="bg-black" className="rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/15">
              {stats.map((stat, sIdx) => (
                <div key={sIdx} className={`pt-6 sm:pt-0 ${sIdx !== 0 ? 'sm:pl-8' : ''}`}>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-neutral-200 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-1">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </DashedFrame>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
