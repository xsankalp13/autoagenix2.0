import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const alignmentClass =
    align === 'center'
      ? 'text-center mx-auto items-center'
      : align === 'right'
      ? 'text-right ml-auto items-end'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-14 md:mb-20 ${alignmentClass} ${className}`}>
      {badge && (
        <div className="mb-3 sm:mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-white underline decoration-dashed decoration-white/30 underline-offset-4 sm:underline-offset-8">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-5 text-xs sm:text-base text-neutral-300 font-normal leading-relaxed max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
