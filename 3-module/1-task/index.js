/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let arr =  Object.values(users)
  let arrOfNames = arr.map(value => value.name)
  return arrOfNames
}
