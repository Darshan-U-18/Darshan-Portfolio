/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolioBg: '#120D0A',
        cardBg: '#1C1510',
        brandOrange: '#FF5722',
        brandOrangeLight: '#FF7043',
      },
    },
  },
  plugins: [],
}