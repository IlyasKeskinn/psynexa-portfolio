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
        customGray: "#5F6377",
      },
      fontSize: {
        "4.5xl": ["2.5rem", { lineHeight: "3rem" }],
        "7.5xl": ["5rem", { lineHeight: "1" }],
        "8.5xl": ["6.5rem", { lineHeight: "1" }],
        "9.5xl": ["7.5rem", { lineHeight: "1" }],
        "10xl": ["9rem", { lineHeight: "1" }],
      },
      boxShadow: {
        "custom-inset": "inset -3px -3px 0px rgba(0, 0, 0, 0.3)",
        "custom-inset-hover": "inset -4px -4px 0px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
