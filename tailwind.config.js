const defaultTheme = require('tailwindcss/defaultTheme')
const parsedFontSizes = require('./styles/font-sizes')
const colors = require('./styles/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/contents/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: { ...colors },
      fontSize: {
        ...parsedFontSizes,
      },
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('./tailwind-plugin-auto-fit'),
    require('./tailwind-plugin-auto-fill'),
    require('./tailwind-plugin-can-hover'),
    require('./tailwind-plugin-safe-min-width'),
  ],
}
