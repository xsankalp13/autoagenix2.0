import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap, Terminal, Code2, Cpu, Activity, Play } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import DashedFrame from '../ui/DashedFrame';

export default function Hero() {
  const heroBadges = [
    'Custom Websites',
    'Workflow Automation',
    'Sub-Second Performance',
    'Scalable Growth Systems',
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-black bg-dashed-grid">
      {/* Delicate center container border lines with dashed lines */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl border-x border-dashed border-white/10 pointer-events-none" />

      {/* Radial fade mask to blend dashed grid smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-950 border border-dashed border-white/40 hover:border-white/70 transition-colors shadow-2xl backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
            <span className="text-xs font-mono font-medium text-white">
              Architecture &bull;
            </span>
            <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
              autoagenix.com
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08]"
        >
          Turn Digital Ideas Into{' '}
          <span className="text-white underline decoration-dashed decoration-white/40 underline-offset-8">
            Autonomous Growth
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto font-normal leading-relaxed"
          style={{ color: '#ffffff' }}
        >
          We engineer high-converting <span className="text-white font-bold underline decoration-dashed decoration-white/40">Custom Websites</span> and autonomous <span className="text-white font-bold underline decoration-dashed decoration-white/40">Workflow Automations</span> that eliminate bottlenecks and scale operations.
        </motion.p>

        {/* Service tags pill bar with high-contrast white dashed borders */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono"
        >
          {heroBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-neutral-950 border border-dashed border-white/40 text-white hover:border-white/70 transition-colors font-medium shadow-sm ${
                idx > 1 ? 'hidden sm:inline-flex' : 'inline-flex'
              }`}
              style={{ color: '#ffffff' }}
            >
              <span className="text-white font-bold">[+]</span>
              <span>{badge}</span>
            </span>
          ))}
        </motion.div>

        {/* Dual CTAs - Both 100% High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Button href="#contact" size="lg" variant="primary" className="w-full sm:w-auto">
            Start Your Project
          </Button>
          <Button href="#work" size="lg" variant="outline" className="w-full sm:w-auto">
            View Recent Works
          </Button>
        </motion.div>

        {/* Hero Visual 3D Showcase in a White Dashed Frame with Corner Crosshairs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 sm:mt-20 relative max-w-5xl mx-auto"
        >
          <DashedFrame crosshairs={true} hover={true} bg="bg-black" className="rounded-2xl p-2 sm:p-3">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-neutral-950 border border-dashed border-white/20">
              <img
                src="/images/hero-visual.jpg"
                alt="Autoagenix Autonomous Systems & Custom Web Architecture"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-[1.03]"
                loading="eager"
              />

              {/* Minimal Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

              {/* Minimal Floating Status 1 */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-2 rounded-lg bg-black/95 backdrop-blur-md border border-dashed border-white/40 text-left hidden sm:flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono text-white font-medium">
                  Performance: 100/100 Core Web Vitals
                </span>
              </div>

              {/* Minimal Floating Status 2 */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3.5 py-2 rounded-lg bg-black/95 backdrop-blur-md border border-dashed border-white/40 text-left hidden sm:flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
                <span className="text-xs font-mono text-white font-medium">
                  Pipeline Status: 24/7 Automated Sync
                </span>
              </div>

              {/* Minimal Center Pill */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="px-4 py-2 rounded-lg bg-black/95 border border-dashed border-white/40 backdrop-blur-xl flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-white font-bold tracking-widest">
                    Autoagenix 3.0 System Engine
                  </span>
                </div>
              </div>
            </div>
          </DashedFrame>
        </motion.div>

        {/* Minimalist Stats Ribbon with High-Contrast White Dashed Cells */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 sm:mt-18 pt-8 sm:pt-10 border-t border-dashed border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto"
        >
          <div className="p-3 sm:p-4 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-left hover:border-white/60 transition-colors">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
              &lt; 0.8s
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-white font-semibold mt-1">First Contentful Paint</div>
            <div className="text-[11px] text-neutral-300 font-mono hidden sm:block">Sub-second rendering</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-left hover:border-white/60 transition-colors">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
              100%
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-white font-semibold mt-1">Custom Architecture</div>
            <div className="text-[11px] text-neutral-300 font-mono hidden sm:block">Zero template bloat</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-left hover:border-white/60 transition-colors">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
              24 / 7
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-white font-semibold mt-1">Autonomous Workflows</div>
            <div className="text-[11px] text-neutral-300 font-mono hidden sm:block">Automated data routing</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-left hover:border-white/60 transition-colors">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight">
              Top 1%
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-white font-semibold mt-1">Core Web Vitals</div>
            <div className="text-[11px] text-neutral-300 font-mono hidden sm:block">SEO & speed validated</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
