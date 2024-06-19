/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0E0D",
        buttonCollor: "#A73848",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url(/src/img/bg-hero.png)",
      },
      height: {
        622: "622px",
      },
      padding: {
        120: "120px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
