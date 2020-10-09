/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if(!str) return str
  return str
    .split('')
    .map (
      (letter, index) => (index === 0) ? letter.toUpperCase() : letter
    )
    .join('')
}
