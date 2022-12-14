const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Poppins", "sans-serif"],
      },
      animation: {
        buble: "buble 10s ease infinite",
      },
      keyframes: {
        buble: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.3)",
          },
          "45%": {
            transform: "translate(-20px,20px) scale(1.5)",
          },
          "66%": {
            transform: " translate(10px,-10px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
          scaling: {},
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
