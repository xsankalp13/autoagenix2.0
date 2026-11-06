import React from 'react';
import { Mail, ArrowUpRight, Cookie } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const openCookiePreferences = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <footer className="relative bg-black text-neutral-200 border-t border-dashed border-white/20 pt-12 sm:pt-20 pb-8 sm:pb-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-dashed border-white/15">
          {/* Brand info */}
          <div className="col-span-2 lg:col-span-2 space-y-4 sm:space-y-5">
            <a href="#" className="flex items-center gap-2.5 text-2xl font-black text-white font-mono">
              <img
                src="/images/logo.png"
                alt="Autoagenix Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_0_15px_rgba(0,180,255,0.3)]"
              />
              <span>
                auto<span className="text-white font-bold">agenix</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
            </a>
            <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-sm" style={{ color: '#e5e5e5' }}>
              We design and engineer bespoke custom websites and autonomous workflow systems that transform operations and drive measurable business scale.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@autoagenix.com"
                className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-lg bg-neutral-950 hover:bg-neutral-900 text-white border border-dashed border-white/25 transition-colors font-medium"
                style={{ color: '#ffffff' }}
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                hello@autoagenix.com
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-2 rounded-lg bg-neutral-950 text-white border border-dashed border-white/25 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Accepting New Projects
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              // Services
            </h4>
            <ul className="space-y-3 text-xs font-mono text-neutral-200">
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Custom Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Conversion Funnels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  API & Webhook Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Core Web Vitals Tuning
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation / Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              // Explore
            </h4>
            <ul className="space-y-3 text-xs font-mono text-neutral-200">
              <li>
                <a href="#work" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Recent Works
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Our 5-Step Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Why Autoagenix
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Works */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              // Client Showcases
            </h4>
            <ul className="space-y-3 text-xs font-mono text-neutral-200">
              <li>
                <a
                  href="https://restaurantsandbars.accor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  style={{ color: '#e5e5e5' }}
                >
                  Accor Restaurants
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehogarth.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  style={{ color: '#e5e5e5' }}
                >
                  The Hogarth Club
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://247.fitness/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  style={{ color: '#e5e5e5' }}
                >
                  24/7 Fitness
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:text-white transition-colors" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://autoagenix.com"
                  className="text-xs text-white underline decoration-dashed hover:text-neutral-300 font-bold"
                  style={{ color: '#ffffff' }}
                >
                  autoagenix.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-300">
          <p>
            © {currentYear} Autoagenix (autoagenix.com). Jet Black Minimal Engineering.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-white transition-colors inline-flex items-center gap-1 underline decoration-dashed underline-offset-4 text-white font-medium"
              style={{ color: '#ffffff' }}
            >
              <Cookie className="w-3 h-3" />
              Cookie Preferences
            </button>
            <a href="#services" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>Privacy</a>
            <a href="#contact" className="hover:text-white transition-colors" style={{ color: '#e5e5e5' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
