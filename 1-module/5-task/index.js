/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  let arr = str.split('').slice(0, maxlength)
  let trimmedStr = arr.join('')
  return trimmedStr.replace(trimmedStr[maxlength - 1], "…")
}
