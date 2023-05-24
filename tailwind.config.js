/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    borderRadius: {
      normal: "1.25rem",
      large: "150px",
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },

    fontFamily: {
      primary: ["Poppins"],
    },

    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        offBlack: "hsl(0, 0%, 8%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        lightGrey: "hsl(0, 0%, 86%)",
        offWhite: "hsl(0, 0%, 94%)",
      },

      width: {
        lineWidth: "36rem",
      },
    },
  },
  plugins: [],
};
