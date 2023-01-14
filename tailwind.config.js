/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#FF8D3B",
      },
    },
  },
};
