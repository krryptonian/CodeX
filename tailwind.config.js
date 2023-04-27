const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '3rem',
    },
    extend: {
      colors: {
        primary: {
          light: colors.blue['500'],
          dark: colors.yellow['200'],
        },
      },
      fontFamily: {
        sans: ['var(--font-rubik)', fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
