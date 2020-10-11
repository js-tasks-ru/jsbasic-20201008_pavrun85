/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let lowerStr = str.toLowerCase()
  let arr = lowerStr.split(' ')

  for (let word of arr) {
    if (word.includes('1xbet') || word.includes('xxx')) {
      return true
    }
  }
  return false
}
