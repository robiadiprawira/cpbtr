/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0E0D",
      },
      fontFamily:{
        'sans': ['Roboto Condensed', 'sans-serif'], 
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
