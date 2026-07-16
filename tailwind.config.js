/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.18)',
      },
    },
  },
  plugins: [],
};