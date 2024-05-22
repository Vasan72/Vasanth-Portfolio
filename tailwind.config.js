/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      "mainFont" : "#ff4321",
    },
    fontFamily: {
      'vasanth-font': "Sriracha"
    }
  },
  plugins: [],
}

