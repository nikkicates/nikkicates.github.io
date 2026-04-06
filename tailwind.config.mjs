/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Global base
        base: '#0f172a',
        surface: '#1e293b',
        border: '#334155',
        muted: '#94a3b8',
        light: '#f8fafc',

        // ST / Structural Burnout palette
        navy: {
          DEFAULT: '#0f4c7a',
          light: '#1d6aa6',
          dark: '#0a3356',
        },
        teal: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          dark: '#0a6e66',
          glow: 'rgba(13,148,136,0.18)',
        },

        // URI palette
        plum: {
          DEFAULT: '#6b21a8',
          light: '#9333ea',
          dark: '#4c1674',
        },
        gold: {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
          glow: 'rgba(217,119,6,0.18)',
        },
      },
      fontFamily: {
        heading: ['"Lora"', 'Georgia', 'serif'],
        body: ['"Urbanist"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'st-gradient': 'linear-gradient(135deg, #0f172a 0%, #0a2540 50%, #0d2d4a 100%)',
        'uri-gradient': 'linear-gradient(135deg, #0f172a 0%, #1a0a2e 50%, #1f0d30 100%)',
        'teal-glow': 'radial-gradient(ellipse at center, rgba(13,148,136,0.15) 0%, transparent 70%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(217,119,6,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
