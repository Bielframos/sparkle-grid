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

function toRem(px: number) {
  return px / 16 + 'rem'
}

function parseFontSize(name: any, fontSize: any, lineHeight: any) {
  return {
    [name]: { fontSize: toRem(fontSize), lineHeight: toRem(lineHeight) },
  }
}

export const fontSizes = typography.reduce(
  (acc, [name, fontSize, lineHeight]) =>
    Object.assign(acc, parseFontSize(name, fontSize, lineHeight)),
  {}
)
