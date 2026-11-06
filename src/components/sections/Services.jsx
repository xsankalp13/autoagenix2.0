import React from 'react';
import { Layout, Cpu, CheckCircle, ArrowRight, Sparkles, Layers, Zap, Clock, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import DashedFrame from '../ui/DashedFrame';
import { services } from '../../data/services';

export default function Services() {
  const iconMap = {
    Layout: Layout,
    Cpu: Cpu,
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-dashed border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedWrapper variant="fadeUp">
          <SectionHeading
            badge="ENGINEERING DOMAINS"
            title="Specialized Systems Engineered for"
            highlight="Real Commercial Scale"
            description="We focus strictly on two high-leverage domains: bespoke custom websites that elevate market authority, and intelligent workflow automations that eliminate manual overhead."
          />
        </AnimatedWrapper>

        {/* Two Grand Service Cards in Jet Black with White Dashed Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Layout;

            return (
              <AnimatedWrapper
                key={service.id}
                variant="fadeUp"
                delay={index * 0.15}
                className="h-full"
              >
                <DashedFrame
                  crosshairs={true}
                  hover={true}
                  bg="bg-black"
                  className="rounded-2xl overflow-hidden h-full flex flex-col justify-between group"
                >
                  {/* Top Image Showcase */}
                  <div className="relative h-44 sm:h-72 w-full overflow-hidden bg-neutral-950 border-b border-dashed border-white/15">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Floating Service Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black border border-dashed border-white/20 text-neutral-200 backdrop-blur-md">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 flex items-center gap-2.5 sm:gap-3">
                      <div className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-black border border-dashed border-white/25 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                          Domain
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white font-mono">
                          {service.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-mono text-white mb-2" style={{ color: '#ffffff' }}>
                        // {service.tagline}
                      </p>
                      <p className="text-white text-xs sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none" style={{ color: '#ffffff' }}>
                        {service.description}
                      </p>

                      {/* Key Deliverables / Features Grid */}
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-dashed border-white/10">
                        <div className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-white font-semibold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: '#ffffff' }}>
                          <span className="text-white font-mono">[::]</span>
                          Architecture & Deliverables
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white">
                          {service.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className={`items-start gap-2 sm:gap-2.5 ${fIdx >= 3 ? 'hidden sm:flex' : 'flex'}`}
                              style={{ color: '#ffffff' }}
                            >
                              <span className="text-white font-mono text-xs mt-0.5">+</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action & Metric Footer */}
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] sm:text-xs text-neutral-400 font-mono">Benchmark:</span>
                        <span className="text-[11px] sm:text-xs font-mono text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-neutral-950 border border-dashed border-white/20">
                          {service.metric}
                        </span>
                      </div>

                      <Button
                        href="#contact"
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto"
                      >
                        Inquire About {service.title}
                      </Button>
                    </div>
                  </div>
                </DashedFrame>
              </AnimatedWrapper>
            );
          })}
        </div>

        {/* Synergy Banner with White Dashed Border */}
        <AnimatedWrapper variant="fadeUp" delay={0.3} className="mt-12">
          <DashedFrame crosshairs={true} hover={true} bg="bg-black" className="rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neutral-950 text-white border border-dashed border-white/20 hidden sm:flex font-mono">
                  &lt;/&gt;
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-mono">
                    Integrated Custom Frontend + Autonomous Backend
                  </h4>
                  <p className="text-sm text-neutral-400 mt-1">
                    We frequently combine high-converting custom frontends with automated backend pipelines (lead routing, CRM sync, instant notifications).
                  </p>
                </div>
              </div>
              <Button href="#contact" variant="primary" size="md" className="shrink-0">
                Schedule Architecture Call
              </Button>
            </div>
          </DashedFrame>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
