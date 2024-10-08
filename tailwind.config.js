/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        corinthia: ["Corinthia", "serif"],
        clashDisplay: ["Clash Display", "sans-serif"],
      },
      colors: {
        background: "#000000",
        customYellow: "#FFEB5C",
        customPink: "#CB75BD",
        customGreen: "#5DBE8C",
        customPurple: "#5D6CBE",
      },
    },
  },
  plugins: [],
};
