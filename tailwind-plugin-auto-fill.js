const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'grid-auto-fill': (value) => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
        }),
      },
      { values: theme('gridAutoFill') },
    )
  },
  {
    theme: {
      gridAutoFill: {
        DEFAULT: '16rem',
        ...defaultTheme.spacing,
      },
    },
  },
)
