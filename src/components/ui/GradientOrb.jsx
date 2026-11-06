import React from 'react';

export default function GradientOrb({
  className = '',
  position = 'top-center',
  color = 'lime',
  size = 'lg',
}) {
  const positions = {
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-left': 'top-10 -left-40',
    'top-right': 'top-10 -right-40',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };

  const sizes = {
    sm: 'w-[320px] h-[320px] blur-[80px]',
    md: 'w-[450px] h-[450px] blur-[110px]',
    lg: 'w-[650px] h-[500px] blur-[140px]',
    xl: 'w-[850px] h-[650px] blur-[160px]',
  };

  const colors = {
    lime: 'bg-gradient-to-tr from-lime-500/15 via-emerald-500/10 to-transparent',
    emerald: 'bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent',
    cyan: 'bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent',
    amber: 'bg-gradient-to-tr from-amber-500/15 via-yellow-500/10 to-transparent',
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full select-none ${
        positions[position] || positions['top-center']
      } ${sizes[size] || sizes.lg} ${colors[color] || colors.lime} ${className}`}
    />
  );
}

