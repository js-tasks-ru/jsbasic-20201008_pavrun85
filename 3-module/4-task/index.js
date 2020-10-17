/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let str = users.reduce((string, prop) => {
    if (prop.age <= age) {
    return  string + prop.name + ', ' + prop.balance + '\n'
    }
    return string
  }, '') 
  return str.slice(0, str.length - 1)
}
