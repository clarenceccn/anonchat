/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    fontFamily: {
      'sans': ['"Bubble"', ...defaultTheme.fontFamily.sans],
      custom: ['Bubble', 'sans-serif'], // Add custom font family
    },
  },
 },
  plugins: [],
}



