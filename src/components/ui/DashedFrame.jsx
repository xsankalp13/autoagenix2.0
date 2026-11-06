import React from 'react';

export default function DashedFrame({
  children,
  className = '',
  crosshairs = true,
  hover = true,
  bg = 'bg-black',
}) {
  return (
    <div
      className={`relative border border-dashed border-white/30 ${bg} ${
        hover ? 'transition-all duration-300 hover:border-white/60' : ''
      } ${className}`}
    >
      {crosshairs && (
        <>
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
        </>
      )}
      {children}
    </div>
  );
}
