/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../index.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bgVoid: '#040711',
        cardSurface: '#0B1120',
        neonCyan: '#00D2FF',
        neonGreen: '#00E599',
        neonRed: '#FF3366',
        warmGold: '#D3B49A',
      },
    },
  },
  plugins: [],
};
