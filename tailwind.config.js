/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        display: ['Roboto Condensed', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};