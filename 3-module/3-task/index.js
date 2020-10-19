/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let arr = str.split('-')
  let camelizedStr = arr.reduce((string, word, index) => {
    if (index === 0) {
    return string + word
    }
    return string + word[0].toUpperCase() + word.slice(1)
  }, '')
  return camelizedStr
}
