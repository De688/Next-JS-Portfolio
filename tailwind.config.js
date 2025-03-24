const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        day: "url('../public/bgpic2.jpg')",
        night: "url('../public/bgnight.jpg')",
      },
      fontFamily: {
        abc: ["Poppins", "sans-serif"],
      },
      animation: {
        buble: "buble 10s ease infinite",
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        buble: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "45%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "66%": {
            transform: " translate(0px,0px) scale(1)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
          scaling: {},
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
