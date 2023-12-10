/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '240px',   // Extra small screens
      'sm': '640px',    // Small screens
      'md': '768px',    // Medium screens
      'lg': '980px',   // Large screens
    },
    extend: {
      fontFamily: {
        mukta: ['Mukta', 'sans-serif']
      }
    },
  },
  plugins: [],
}