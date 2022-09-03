const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'min-w': (value) => ({
          minWidth: `min(${value}, 100%)`,
        }),
      },
      { values: theme('minWidth') },
    )
  },
  {
    theme: {
      minWidth: {
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        prose: '65ch',
      },
    },
  },
)
