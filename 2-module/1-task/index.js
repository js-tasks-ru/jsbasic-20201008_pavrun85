/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let sum = 0
  for (let value in salaries) {
    if (typeof salaries[value] === 'number') {
      sum += salaries[value]
    }
  }
  return sum
}
