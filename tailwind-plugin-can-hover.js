const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant }) {
  addVariant('can-hover', '@media (pointer: fine)')
})

