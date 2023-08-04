/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0b0713",
        background: "#f3f0fa",
        primary: "#6f42bd",
        secondary: "#dbcdee",
        accent: "#261640",
        textDark: "#f3f0fa",
        backgroundDark: "#0b0713",
        primaryDark: "#6f42bd",
        secondaryDark: "#10091a",
        accentDark: "#6a3db2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
