/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d3434a",

          secondary: "#b9c2f7",

          accent: "#b25d2c",

          neutral: "#17171C",

          "base-100": "#F1F2F4",

          info: "#4A81E8",

          success: "#1CAB8C",

          warning: "#F08A24",

          error: "#F55C82",
        },
      },
    ],
  },
};
