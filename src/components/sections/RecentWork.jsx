import React from 'react';
import { ExternalLink, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import DashedFrame from '../ui/DashedFrame';
import { portfolioProjects } from '../../data/portfolio';

export default function RecentWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-dashed border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedWrapper variant="fadeUp">
          <SectionHeading
            badge="PRODUCTION SHOWCASE"
            title="Recent Works & Live"
            highlight="Client Deployments"
            description="Explore our recent custom website builds. Each platform was engineered from the ground up for high traffic, seamless responsiveness, and maximum conversion."
          />
        </AnimatedWrapper>

        {/* Portfolio Showcase Grid in Jet Black with White Dashed Frames */}
        <div className="space-y-16 lg:space-y-24">
          {portfolioProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <AnimatedWrapper
                key={project.id}
                variant="fadeUp"
                delay={index * 0.15}
              >
                <DashedFrame
                  crosshairs={true}
                  hover={true}
                  bg="bg-black"
                  className="rounded-3xl overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Visual Preview / Browser Mockup Panel */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-black border-b lg:border-b-0 ${
                        isEven ? 'lg:border-r' : 'lg:order-2 lg:border-l'
                      } border-dashed border-white/15`}
                    >
                      {/* Browser Chrome Frame with Dashed Line */}
                      <div className="rounded-2xl bg-neutral-950 border border-dashed border-white/20 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                        {/* Browser Top Navigation Bar */}
                        <div className="px-4 py-3 bg-neutral-900/90 border-b border-dashed border-white/15 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                          </div>

                          {/* URL Bar */}
                          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black border border-dashed border-white/15 text-[11px] font-mono text-neutral-300 max-w-xs sm:max-w-md w-full truncate">
                            <Shield className="w-3 h-3 text-neutral-400 shrink-0" />
                            <span className="text-neutral-500 select-none">https://</span>
                            <span className="text-neutral-200 font-medium">{project.domain}</span>
                          </div>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors p-1"
                            title="Open live site"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Interactive Styled Viewport Preview with Client Photo */}
                        <div className="relative min-h-[200px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden bg-black group/img">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover/img:scale-105"
                            loading="lazy"
                          />

                          {/* Jet Black Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />

                          {/* Content Layer Inside Mockup */}
                          <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full min-h-[200px] sm:min-h-[360px]">
                            {/* Top Badges */}
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 sm:px-3 rounded-full bg-black/90 text-white border border-dashed border-white/20 backdrop-blur-md">
                                {project.category}
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-neutral-300 bg-black/90 px-2 sm:px-2.5 py-1 rounded-full border border-dashed border-white/20 backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                Live Production
                              </span>
                            </div>

                            {/* Bottom Title & Stats Over Image (Desktop Only to keep Mobile ultra-clean) */}
                            <div className="hidden sm:block">
                              <div className="mb-4">
                                <div className="text-[11px] uppercase font-mono tracking-widest text-neutral-400 mb-1">
                                  // Client Deployment
                                </div>
                                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                                  {project.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-2 max-w-lg drop-shadow">
                                  {project.subtitle}
                                </p>
                              </div>

                              {/* Mini metrics bar */}
                              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-dashed border-white/20 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border">
                                {project.stats.map((st, sIdx) => (
                                  <div key={sIdx} className="text-center">
                                    <div className="text-xs sm:text-sm font-bold text-white font-mono">
                                      {st.value}
                                    </div>
                                    <div className="text-[10px] text-neutral-400 truncate font-mono">
                                      {st.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Details Panel */}
                    <div
                      className={`lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div>
                        {/* Category & Client */}
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <span className="text-xs font-mono font-medium text-white uppercase tracking-wider">
                            {project.client}
                          </span>
                          <span className="text-neutral-600">&bull;</span>
                          <span className="text-xs text-neutral-400 font-mono">Custom Website</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white leading-relaxed font-sans line-clamp-3 sm:line-clamp-none" style={{ color: '#ffffff' }}>
                          {project.description}
                        </p>

                        {/* Key Technical Highlights (Desktop Only for minimalism on mobile) */}
                        <div className="hidden sm:block mt-6 space-y-2.5">
                          <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider" style={{ color: '#ffffff' }}>
                            Deliverables & Architecture
                          </div>
                          {project.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-white font-sans" style={{ color: '#ffffff' }}>
                              <span className="text-white font-mono text-xs mt-0.5">+</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tag Pills */}
                        <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-950 border border-dashed border-white/20 text-neutral-200 ${
                                tIdx >= 2 ? 'hidden sm:inline-block' : 'inline-block'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Direct CTA Link Button */}
                      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-white/15 flex items-center justify-between">
                        <Button
                          href={project.url}
                          external={true}
                          variant="primary"
                          size="md"
                          className="w-full sm:w-auto"
                        >
                          Visit Live Website
                        </Button>
                      </div>
                    </div>
                  </div>
                </DashedFrame>
              </AnimatedWrapper>
            );
          })}
        </div>

        {/* Case Studies Link Banner */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-dashed border-white/30 max-w-3xl w-full text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                // In-Depth Engineering Breakdowns
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-1">
                Explore comprehensive case studies detailing architecture, technical hurdles, and commercial ROI.
              </p>
            </div>
            <Button href="/case-studies" variant="primary" size="md" className="shrink-0 w-full sm:w-auto">
              View All Case Studies
            </Button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-neutral-400">
            Have a custom website or automation challenge in mind?{' '}
            <a href="/#contact" className="text-white font-semibold underline decoration-dashed hover:text-neutral-200 inline-flex items-center gap-1">
              Let's build your platform together <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
