/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mob: "375px",
      desk: "1440px",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
        darkNavy: "#1F314F",
      },
      fontFamily: {
        outfit: ['Outfit', "sans-serif"],
      },
    },
  },
  plugins: [],
};
