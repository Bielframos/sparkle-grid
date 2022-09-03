export const mergeClass = (...classNames: (string | undefined)[]) =>
  classNames
    .filter((item) => !!item)
    .join(" ")
    .split(/ +/g)
    .filter((item, index, array) => array.indexOf(item) === index)
    .join(" ");
