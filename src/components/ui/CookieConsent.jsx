import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, Check, X, Settings2 } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if user already set preferences
    const saved = localStorage.getItem('autoagenix_cookie_consent');
    if (!saved) {
      // Delay showing slightly for a smooth entrance
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom trigger from footer
  useEffect(() => {
    const handleOpen = () => setVisible(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'autoagenix_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, timestamp: Date.now() })
    );
    setVisible(false);
  };

  const handleRejectOrEssential = () => {
    localStorage.setItem(
      'autoagenix_cookie_consent',
      JSON.stringify({ necessary: true, analytics: false, timestamp: Date.now() })
    );
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'autoagenix_cookie_consent',
      JSON.stringify({ necessary: true, analytics: analyticsEnabled, timestamp: Date.now() })
    );
    setVisible(false);
    setPreferencesOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 max-w-lg w-[calc(100vw-2rem)] sm:w-full"
        >
          {/* Jet black container with white dashed border and corner crosshairs */}
          <div className="relative bg-black/95 backdrop-blur-xl border-2 border-dashed border-white/40 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black text-left">
            {/* Corner Crosshairs */}
            <span className="absolute -top-2.5 -left-2.5 text-white/70 font-mono text-sm font-bold select-none pointer-events-none">
              +
            </span>
            <span className="absolute -top-2.5 -right-2.5 text-white/70 font-mono text-sm font-bold select-none pointer-events-none">
              +
            </span>
            <span className="absolute -bottom-2.5 -left-2.5 text-white/70 font-mono text-sm font-bold select-none pointer-events-none">
              +
            </span>
            <span className="absolute -bottom-2.5 -right-2.5 text-white/70 font-mono text-sm font-bold select-none pointer-events-none">
              +
            </span>

            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-dashed border-white/30 text-white flex items-center justify-center shrink-0">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5 font-mono">
                    Cookie & Privacy Settings
                  </h4>
                  <span className="text-[11px] text-white font-mono">
                    autoagenix.com / minimal telemetry
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleRejectOrEssential}
                className="text-neutral-300 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main message */}
            {!preferencesOpen ? (
              <>
                <p className="text-xs text-white leading-relaxed mb-4 font-mono" style={{ color: '#ffffff' }}>
                  We use strictly essential cookies and anonymous analytics to monitor Core Web Vitals and ensure frictionless site delivery. No invasive ad trackers.
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-dashed border-white/20">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 min-w-[120px] px-4 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors shadow-md"
                  >
                    Accept All
                  </button>

                  <button
                    type="button"
                    onClick={handleRejectOrEssential}
                    className="px-4 py-2.5 rounded-xl bg-neutral-950 border-2 border-dashed border-white/50 text-white hover:border-white font-bold text-xs transition-colors"
                  >
                    Essential Only
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferencesOpen(true)}
                    className="px-2.5 py-2.5 text-white hover:text-neutral-200 text-xs font-mono transition-colors flex items-center gap-1 border border-dashed border-white/20 rounded-xl"
                    title="Customize"
                  >
                    <Settings2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-dashed border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Strictly Necessary</div>
                    <div className="text-[10px] text-neutral-400">Security & routing</div>
                  </div>
                  <span className="text-[10px] font-mono text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded border border-lime-400/20">
                    Always Active
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-neutral-950 border border-dashed border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Performance Analytics</div>
                    <div className="text-[10px] text-neutral-400">Anonymous speed metrics</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="w-4 h-4 accent-lime-400 cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="flex-1 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
                  >
                    Save Preferences
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferencesOpen(false)}
                    className="px-3 py-2 rounded-xl border border-dashed border-white/20 text-neutral-300 text-xs hover:text-white"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

