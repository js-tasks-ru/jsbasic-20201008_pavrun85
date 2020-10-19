/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let arr = []
  for (let value of Object.values(users)) {
    arr.push(value.name)
  }
  return arr
}
