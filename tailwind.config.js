/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ethnocentric": ["Ethnocentric", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      }
    },
    screens: {
      'xs': '280px',
      ...defaultTheme.screens,
    }
  },
  variants: {
    extend: {
      opacity: ["group-hover"],
    },
  },
  plugins: [
    require("tailwind-scrollbar")({nocompatible: true}),
  ],
}
