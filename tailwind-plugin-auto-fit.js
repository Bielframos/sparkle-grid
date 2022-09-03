const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'grid-auto-fit': (value) => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
        }),
      },
      { values: theme('gridAutoFit') },
    )
  },
  {
    theme: {
      gridAutoFit: {
        DEFAULT: '16rem',
        ...defaultTheme.spacing,
      },
    },
  },
)
