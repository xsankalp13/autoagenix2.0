import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import RecentWork from '../components/sections/RecentWork';
import HowWeWork from '../components/sections/HowWeWork';
import WhyUs from '../components/sections/WhyUs';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import CookieConsent from '../components/ui/CookieConsent';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow bg-black">
        {/* Hero Section */}
        <Hero />

        {/* Core Services: Custom Websites & Workflow Automation */}
        <Services />

        {/* Portfolio Showcase: Accor, The Hogarth, 247 Fitness */}
        <RecentWork />

        {/* 5-Step Execution Methodology */}
        <HowWeWork />

        {/* Why Autoagenix: Standards & Metrics */}
        <WhyUs />

        {/* FAQ */}
        <FAQ />

        {/* Inquiries & Direct Contact to hello@autoagenix.com */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Minimal Aesthetic Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
