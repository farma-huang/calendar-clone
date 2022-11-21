/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        "1/7": "14.2857%",
      },
    },
  },
  plugins: [],
}
