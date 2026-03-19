/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // <--- đây là font-inter
      },
    },
  },
  plugins: [],
};
