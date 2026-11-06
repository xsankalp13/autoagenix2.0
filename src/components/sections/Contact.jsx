import React, { useState } from 'react';
import { Mail, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import AnimatedWrapper from '../ui/AnimatedWrapper';
import DashedFrame from '../ui/DashedFrame';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Website',
    budget: '$3k - $10k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:hello@autoagenix.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-dashed border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <AnimatedWrapper variant="fadeUp">
          <SectionHeading
            badge="INITIATE PROJECT"
            title="Let's Build Something"
            highlight="Extraordinary"
            description="Have a custom website build or workflow automation project in mind? Let's discuss your specifications and deliver an actionable execution roadmap."
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <AnimatedWrapper variant="fadeUp" delay={0.1}>
              <DashedFrame crosshairs={true} hover={true} bg="bg-black" className="rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-6">
                <div>
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                    Direct Inquiry
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                    Start the conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-1 sm:mt-2 font-sans">
                    Send us an email or fill out the form. You'll hear back directly from a senior engineer within 24 hours.
                  </p>
                </div>

                <div className="pt-1 sm:pt-2">
                  <a
                    href="mailto:hello@autoagenix.com"
                    className="inline-flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-neutral-950 border border-dashed border-white/20 hover:border-white text-white transition-all w-full group"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black border border-dashed border-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] sm:text-[11px] text-neutral-300 font-mono">Direct Communication</div>
                      <div className="text-xs sm:text-base font-bold text-white font-mono truncate">
                        hello@autoagenix.com
                      </div>
                    </div>
                  </a>
                </div>

                <div className="hidden sm:block space-y-3.5 pt-4 border-t border-dashed border-white/10 text-xs text-neutral-200 font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-white">+</span>
                    <span>Guaranteed response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white">+</span>
                    <span>100% intellectual property ownership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white">+</span>
                    <span>Free architectural review & technical scope</span>
                  </div>
                </div>
              </DashedFrame>
            </AnimatedWrapper>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <AnimatedWrapper variant="fadeUp" delay={0.2}>
              <DashedFrame crosshairs={true} hover={true} bg="bg-black" className="rounded-2xl p-5 sm:p-10 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-neutral-900 border border-dashed border-white/30 text-white mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-mono">Inquiry Initialized</h4>
                    <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-sans">
                      Your default mail client has opened addressed to{' '}
                      <span className="text-white font-mono underline decoration-dashed">hello@autoagenix.com</span>. We will review your specs promptly!
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Note
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-white text-xs font-mono transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-white text-xs font-mono transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                        Service of Interest
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Custom Website', 'Workflow Automation', 'Both / Full Stack'].map((srv) => (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => setFormData({ ...formData, service: srv })}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-mono border-2 border-dashed text-center transition-all ${
                              formData.service === srv
                                ? 'bg-white text-black border-white font-bold'
                                : 'bg-black border-white/30 text-white hover:border-white hover:bg-neutral-950'
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2">
                        Project Overview & Goals
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, current bottlenecks, desired timeline, or any reference websites you admire..."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-dashed border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-white text-xs font-mono transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Send Inquiry to hello@autoagenix.com
                      </Button>
                      <p className="text-[10px] font-mono text-center text-neutral-500 mt-3">
                        Direct communication to hello@autoagenix.com. Zero spam policy.
                      </p>
                    </div>
                  </form>
                )}
              </DashedFrame>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
