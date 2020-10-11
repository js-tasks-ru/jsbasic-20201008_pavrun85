/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  let arr = str.split(' ')
  
  let result = arr.reduce((trimmedStr, partialStr) => {
    if (trimmedStr.length <= maxlength) {
      return (trimmedStr.length === 0) ? trimmedStr + partialStr : trimmedStr + ' ' + partialStr
    }
      return trimmedStr.replace(trimmedStr[maxlength - 1], '…').slice(0, maxlength)
  }, '')
  
  return result
}
