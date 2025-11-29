/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#00f2ff',
        secondary: '#bc13fe',
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#111827',
          card: 'rgba(17, 24, 39, 0.7)',
        },
        light: {
          DEFAULT: '#f8fafc',
          muted: '#94a3b8',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px -10px #00f2ff' },
          'to': { boxShadow: '0 0 20px 5px #00f2ff' },
        }
      }
    },
  },
  plugins: [],
}

