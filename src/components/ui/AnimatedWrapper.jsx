import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedWrapper({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  className = '',
  viewportOnce = true,
}) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0.2, y: 16 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0.2 },
      visible: { opacity: 1 },
    },
    scaleUp: {
      hidden: { opacity: 0.2, scale: 0.98 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0.2, x: -16 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0.2, x: 16 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: '0px', amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants[variant] || variants.fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
