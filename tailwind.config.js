/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primaryText: "#0E0F1B",
      },
      keyframes: {
        circleFadeOut: {
          "0%": { clipPath: "circle(150% at center)", opacity: "1" },
          "100%": { clipPath: "circle(0% at center)", opacity: "0" },
        },
      },
      animation: {
        circleFadeOut: "circleFadeOut 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};