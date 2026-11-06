/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#000000',
          50: '#030303',
          100: '#080808',
          200: '#0f0f0f',
          card: '#050505',
          subtle: '#0d0d0d',
        },
        surface: {
          DEFAULT: '#080808',
          hover: '#111111',
          border: 'rgba(255, 255, 255, 0.15)',
          'border-hover': 'rgba(255, 255, 255, 0.35)',
        },
        accent: {
          DEFAULT: '#a3e635', // lime-400
          light: '#bef264',   // lime-300
          dark: '#65a30d',    // lime-600
          glow: 'rgba(163, 230, 53, 0.15)',
          emerald: '#10b981',
          green: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(163, 230, 53, 0.15)',
        'glow-md': '0 0 30px rgba(163, 230, 53, 0.2)',
        'glow-lg': '0 0 50px rgba(163, 230, 53, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
