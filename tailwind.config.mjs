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

        // Strategic Transformations brand palette
        navy: {
          DEFAULT: '#064680',
          light: '#2A7CA3',
          dark: '#043058',
        },
        teal: {
          DEFAULT: '#0D9E8A',
          light: '#3DBBA8',
          dark: '#0A7A6A',
          glow: 'rgba(13,158,138,0.18)',
        },
        charcoal: {
          DEFAULT: '#2C3A4A',
          light: '#3F5266',
          dark: '#1D2733',
        },

        // Dark purple + gold: reserved for URI Formation's own identity.
        // Do not repoint these tokens without re-checking src/pages/uri/index.astro,
        // which is intentionally excluded from the ST rebrand.
        plum: {
          DEFAULT: '#31245A',
          light: '#AC6DBF',
          dark: '#221A3D',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0BB4A',
          dark: '#A6841C',
          glow: 'rgba(201,162,39,0.18)',
        },
      },
      fontFamily: {
        heading: ['"Lora"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'st-gradient': 'linear-gradient(135deg, #0f172a 0%, #0a2540 50%, #0d2d4a 100%)',
        'uri-gradient': 'linear-gradient(135deg, #0f172a 0%, #1a0a2e 50%, #1f0d30 100%)',
        'teal-glow': 'radial-gradient(ellipse at center, rgba(13,158,138,0.15) 0%, transparent 70%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(201,162,39,0.15) 0%, transparent 70%)',
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
