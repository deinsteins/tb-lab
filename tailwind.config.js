/** @type {import('tailwindcss').Config} */

const fontSize = require("./styles/theme/fonts.json");

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize,
      boxShadow: {
        '3xl': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        sans: ["'Nunito'", "sans-serif"],
        nunito: ["'Nunito'", "sans-serif"],
        raleway: "Raleway, Arial, sans-serif",
      },
    },
  },
  plugins: [],
}
