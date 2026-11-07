import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  icon = true,
  external = false,
  className = '',
  style = {},
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none select-none group font-mono cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 gap-2',
    lg: 'text-sm sm:text-base px-7 py-3.5 sm:px-8 sm:py-4 gap-2.5',
  };

  const isPrimary = variant === 'primary';

  const variantClasses = {
    primary:
      'bg-white text-black hover:bg-neutral-200 border-2 border-white shadow-lg shadow-white/10',
    outline:
      'bg-neutral-950 text-white border-2 border-dashed border-white/70 hover:border-white hover:bg-neutral-900 shadow-md shadow-white/5',
    secondary:
      'bg-neutral-900 hover:bg-neutral-800 text-white border border-dashed border-white/40 hover:border-white',
    ghost:
      'text-white hover:bg-white/10 border border-dashed border-transparent hover:border-white/20',
  };

  const textColor = isPrimary ? '#000000' : '#ffffff';

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
    variantClasses[variant] || variantClasses.primary
  } ${className}`;

  const renderIcon = () => {
    if (!icon) return null;
    const iconClasses = `w-4 h-4 transition-transform duration-300 ${
      isPrimary ? 'text-black' : 'text-white'
    }`;

    if (external) {
      return (
        <ArrowUpRight
          className={`${iconClasses} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
          style={{ color: textColor }}
        />
      );
    }
    return (
      <ArrowRight
        className={`${iconClasses} group-hover:translate-x-1`}
        style={{ color: textColor }}
      />
    );
  };

  const buttonStyle = {
    color: textColor,
    ...style,
  };

  const destination =
    to ||
    (href &&
    !external &&
    typeof href === 'string' &&
    href.startsWith('/') &&
    !href.startsWith('/#') &&
    !href.startsWith('//')
      ? href
      : null);

  if (destination) {
    return (
      <Link
        to={destination}
        className={combinedClasses}
        style={buttonStyle}
        onClick={onClick}
        {...props}
      >
        <span
          className={`font-bold ${isPrimary ? 'text-black' : 'text-white'}`}
          style={{ color: textColor }}
        >
          {children}
        </span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        style={buttonStyle}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        <span
          className={`font-bold ${isPrimary ? 'text-black' : 'text-white'}`}
          style={{ color: textColor }}
        >
          {children}
        </span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      style={buttonStyle}
      {...props}
    >
      <span
        className={`font-bold ${isPrimary ? 'text-black' : 'text-white'}`}
        style={{ color: textColor }}
      >
        {children}
      </span>
      {renderIcon()}
    </button>
  );
}
