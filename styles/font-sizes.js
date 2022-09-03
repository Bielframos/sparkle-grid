const typography = [
  ['title-1', 56, 64],
  ['title-2', 48, 56],
  ['title-3', 40, 48],
  ['headline', 32, 48],
  ['subtitle-1', 24, 32],
  ['callout', 18, 26],
  ['body', 16, 24],
  ['caption-1', 14, 22],
  ['caption-2', 12, 20],
]
function toRem(px) {
  return px / 16 + 'rem'
}
function parseFontSize(name, fontSize, lineHeight) {
  return {
    [name]: [toRem(fontSize), toRem(lineHeight)],
  }
}
const parsedFontSizes = typography.reduce(
  (acc, [name, fontSize, lineHeight]) =>
    Object.assign(acc, parseFontSize(name, fontSize, lineHeight)),
  {}
)
module.exports = parsedFontSizes
