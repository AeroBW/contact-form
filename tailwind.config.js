/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "green-200": "hsl(148, 38%, 91%)",
      "green-600": "hsl(169, 82%, 27%)",
      red: "hsl(0, 66%, 54%)",
      white: "hsl(0, 0%, 100%)",
      "grey-500": "hsl(186, 15%, 59%)",
      "grey-900": "hsl(187, 24%, 22%)",
    },
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "0.95", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
