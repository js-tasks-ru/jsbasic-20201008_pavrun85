/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  let filteredArr = arr.reduce((array, number) => {
    if (number >= a && number <= b) {
    array.push(number)
    }
    return array
  }, [])
  return filteredArr
}
