import React from 'react';

export default function Badge({
  children,
  variant = 'minimal',
  dot = true,
  className = '',
}) {
  const variants = {
    minimal:
      'bg-neutral-950 text-white border-dashed border-white/40 hover:border-white/70 shadow-sm',
    accent:
      'bg-neutral-950 text-lime-400 border-dashed border-lime-400/50',
    white:
      'bg-white text-black border-white font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-full border tracking-wider uppercase transition-colors select-none font-semibold ${
        variants[variant] || variants.minimal
      } ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      )}
      {children}
    </span>
  );
}
