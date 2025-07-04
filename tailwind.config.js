/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#24282b",
        red: "#ff3131",
        pink: "#efe8dd",
      },
      fontFamily: {
        inria: ['"Inria Serif"', "serif"],
        abidik: ['"Kaushan Script"', "cursive"],
      },
      zIndex: {
        60: "60",
        999: "999",
        9999: "9999",
      },
    },
  },
  plugins: [],
};
