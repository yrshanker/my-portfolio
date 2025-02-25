/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cmuRed: "#A6192E",
        cmuDarkGray: "#333F48",
        cmuLightGray: "#D6D6D6",
      }
    }
  },
  plugins: [],
};
