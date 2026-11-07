import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Shield, ArrowUpRight, CheckCircle2, Sparkles, Filter, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashedFrame from '../components/ui/DashedFrame';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import AnimatedWrapper from '../components/ui/AnimatedWrapper';
import Footer from '../components/layout/Footer';
import CookieConsent from '../components/ui/CookieConsent';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.service === activeFilter);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-dashed border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Back to Home & Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-neutral-300 transition-colors border border-dashed border-white/30 px-3 py-1.5 rounded-lg bg-neutral-950"
              style={{ color: '#ffffff' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <Link to="/" className="flex items-center gap-2 font-mono text-lg font-black text-white">
              <img
                src="/images/logo.png"
                alt="Autoagenix"
                className="w-7 h-7 object-contain drop-shadow-[0_0_12px_rgba(0,180,255,0.3)]"
              />
              <span className="hidden sm:inline">
                auto<span className="text-white font-bold">agenix</span>
              </span>
            </Link>
          </div>

          {/* Direct CTA */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@autoagenix.com"
              className="hidden md:inline-block text-xs font-mono text-neutral-300 hover:text-white"
            >
              hello@autoagenix.com
            </a>
            <Button href="/#contact" size="sm" variant="primary">
              Book a Call
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-16 sm:py-24 bg-black bg-dashed-grid">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Header Banner */}
          <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
            <div className="mb-4">
              <Badge variant="minimal">CASE STUDIES & PROOF</Badge>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Engineered Proof: How We Scale{' '}
              <span className="text-white underline decoration-dashed decoration-white/40 underline-offset-8">
                Modern Brands
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto">
              Architectural deep dives into our custom websites and autonomous workflow systems. Real engineering, sub-second latency, and measurable commercial results.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
              {['All', 'Custom Websites', 'Workflow Automation'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl border-2 border-dashed transition-all cursor-pointer font-bold ${
                    activeFilter === filter
                      ? 'bg-white text-black border-white shadow-lg shadow-white/10'
                      : 'bg-neutral-950 text-white border-white/30 hover:border-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies List */}
          <div className="space-y-16 sm:space-y-24">
            {filteredStudies.map((study, idx) => {
              const isExpanded = expandedId === study.id;

              return (
                <AnimatedWrapper key={study.id} variant="fadeUp" delay={idx * 0.1}>
                  <DashedFrame
                    crosshairs={true}
                    hover={true}
                    bg="bg-black"
                    className="rounded-3xl overflow-hidden group shadow-2xl"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Left: Media Preview Panel (6 cols) */}
                      <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-neutral-950 border-b lg:border-b-0 lg:border-r border-dashed border-white/20">
                        {/* Browser Chrome Header */}
                        <div className="rounded-2xl bg-black border border-dashed border-white/25 overflow-hidden shadow-2xl">
                          <div className="px-4 py-3 bg-neutral-900 border-b border-dashed border-white/15 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
                            </div>

                            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black border border-dashed border-white/20 text-[11px] font-mono text-white truncate max-w-xs w-full">
                              <Shield className="w-3 h-3 text-white shrink-0" />
                              <span className="text-neutral-500">https://</span>
                              <span className="font-bold">{study.domain}</span>
                            </div>

                            {study.url !== 'https://autoagenix.com' && (
                              <a
                                href={study.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-300 hover:text-white"
                                title="Open Live Website"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                          {/* Hero Screenshot */}
                          <div className="relative min-h-[220px] sm:min-h-[320px] overflow-hidden bg-black">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Corner Badges */}
                            <div className="absolute top-4 left-4 flex items-center gap-2">
                              <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/90 border border-dashed border-white/30 text-white backdrop-blur-md">
                                {study.category}
                              </span>
                            </div>

                            {/* Metric Badge Overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="p-3 rounded-xl bg-black/90 border border-dashed border-white/30 backdrop-blur-md flex items-center justify-between">
                                <span className="text-xs font-mono text-neutral-300">Primary Impact:</span>
                                <span className="text-sm font-mono font-bold text-white bg-neutral-900 px-3 py-1 rounded border border-dashed border-white/25">
                                  {study.metricHighlight}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 4-Stat Metric Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-dashed border-white/15">
                          {study.stats.map((st, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-black border border-dashed border-white/20 text-center">
                              <div className="text-base sm:text-lg font-black font-mono text-white">
                                {st.value}
                              </div>
                              <div className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate">
                                {st.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Technical Case Breakdown (6 cols) */}
                      <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          {/* Client & Service */}
                          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                            <span className="text-white font-bold uppercase tracking-wider">
                              {study.client}
                            </span>
                            <span className="text-neutral-500">&bull;</span>
                            <span className="text-neutral-300">{study.service}</span>
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            {study.title}
                          </h2>
                          <p className="text-xs sm:text-sm font-mono text-neutral-300 mt-1">
                            // {study.subtitle}
                          </p>

                          {/* Overview */}
                          <p className="mt-4 text-xs sm:text-sm text-white leading-relaxed font-sans" style={{ color: '#ffffff' }}>
                            {study.overview}
                          </p>

                          {/* Problem / Solution Grid */}
                          <div className="grid grid-cols-1 gap-4 mt-6 pt-6 border-t border-dashed border-white/15">
                            <div className="p-4 rounded-xl bg-neutral-950 border border-dashed border-white/20">
                              <div className="text-[11px] font-mono uppercase text-neutral-400 font-bold tracking-wider mb-1">
                                [!] The Challenge
                              </div>
                              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans">
                                {study.challenge}
                              </p>
                            </div>

                            <div className="p-4 rounded-xl bg-neutral-950 border border-dashed border-white/20">
                              <div className="text-[11px] font-mono uppercase text-white font-bold tracking-wider mb-1">
                                [✓] The Engineering Solution
                              </div>
                              <p className="text-xs sm:text-sm text-white leading-relaxed font-sans" style={{ color: '#ffffff' }}>
                                {study.solution}
                              </p>
                            </div>
                          </div>

                          {/* Expandable Deep-Dive Section */}
                          {isExpanded && (
                            <div className="mt-6 pt-6 border-t border-dashed border-white/20 space-y-4">
                              <div>
                                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                                  // Architecture & Implementation Details
                                </div>
                                <ul className="space-y-2 text-xs sm:text-sm text-white font-sans">
                                  {study.architecture.map((arch, aIdx) => (
                                    <li key={aIdx} className="flex items-start gap-2.5">
                                      <span className="text-white font-mono text-xs mt-0.5">+</span>
                                      <span>{arch}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                                  // Verified Commercial Impact
                                </div>
                                <ul className="space-y-2 text-xs sm:text-sm text-white font-sans">
                                  {study.results.map((res, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-2.5">
                                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                                      <span>{res}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Tag Chips */}
                          <div className="mt-6 flex flex-wrap gap-2">
                            {study.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-950 border border-dashed border-white/20 text-white"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div className="mt-8 pt-6 border-t border-dashed border-white/15 flex flex-wrap items-center justify-between gap-4">
                          <button
                            type="button"
                            onClick={() => toggleExpand(study.id)}
                            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-neutral-300 underline decoration-dashed underline-offset-4 cursor-pointer"
                          >
                            <span>{isExpanded ? '[- Hide Deep Dive]' : '[+ Read Technical Deep Dive]'}</span>
                          </button>

                          {study.url !== 'https://autoagenix.com' ? (
                            <Button
                              href={study.url}
                              external={true}
                              variant="primary"
                              size="sm"
                            >
                              Visit Live Platform
                            </Button>
                          ) : (
                            <Button
                              href="/#contact"
                              variant="primary"
                              size="sm"
                            >
                              Inquire Similar Build
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </DashedFrame>
                </AnimatedWrapper>
              );
            })}
          </div>

          {/* Bottom High-Impact Consultation Banner */}
          <div className="mt-20 sm:mt-28">
            <DashedFrame crosshairs={true} hover={true} bg="bg-neutral-950" className="rounded-3xl p-8 sm:p-12 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <Badge variant="minimal">READY TO SCALE?</Badge>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  Ready to Engineer Your Brand's Next Case Study?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-sans">
                  Whether you need an ultra-fast custom website or an autonomous 24/7 workflow automation engine, we deliver production-ready systems tailored to your ROI.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href="/#contact" size="lg" variant="primary">
                    Start Your Project
                  </Button>
                  <Button href="mailto:hello@autoagenix.com" size="lg" variant="outline" icon={false}>
                    <Mail className="w-4 h-4 mr-2" />
                    hello@autoagenix.com
                  </Button>
                </div>
              </div>
            </DashedFrame>
          </div>
        </div>
      </main>

      {/* Global Minimal Footer */}
      <Footer />

      {/* Cookie Consent Modal */}
      <CookieConsent />
    </div>
  );
}

