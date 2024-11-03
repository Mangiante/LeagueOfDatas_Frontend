/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      fontFamily: {
        display: ['BeaufortForLOL', 'serif'],
        sans: ['Spiegel', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};