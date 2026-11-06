import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Our Work', href: '/#work' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Process', href: '/#process' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-dashed border-white/15 py-4 shadow-2xl shadow-black'
          : 'bg-black/50 backdrop-blur-md border-b border-dashed border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white transition-opacity"
        >
          <img
            src="/images/logo.png"
            alt="Autoagenix Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(0,180,255,0.3)]"
          />
          <span className="tracking-tight font-mono">
            auto<span className="text-white font-bold">agenix</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-white font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 text-white hover:text-neutral-200 transition-colors duration-200 group"
              style={{ color: '#ffffff' }}
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:hello@autoagenix.com"
            className="text-xs font-mono text-white font-semibold hover:text-neutral-300 transition-colors hidden lg:inline-block underline decoration-dashed decoration-white/30"
            style={{ color: '#ffffff' }}
          >
            hello@autoagenix.com
          </a>
          <Button href="#contact" size="sm" variant="outline">
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-white border border-dashed border-white/20 font-mono"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors border border-dashed border-white/15"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-black/95 backdrop-blur-2xl border-b border-dashed border-white/15 px-6 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-sm font-mono text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white border border-dashed border-transparent hover:border-white/15 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-neutral-500 font-mono">/&gt;</span>
              </a>
            ))}
            <div className="pt-4 border-t border-dashed border-white/15 flex flex-col gap-3">
              <Button
                href="#contact"
                size="md"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                Book a Free Call
              </Button>
              <a
                href="mailto:hello@autoagenix.com"
                className="text-center text-xs font-mono text-neutral-400 hover:text-white py-2"
              >
                hello@autoagenix.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
