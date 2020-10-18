/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let arr = str.split(',')
  let strSpace = arr.join(' ')
  let arrSpace = strSpace.split(' ')
  // C помощью цикла создаю массив из всех чисел в строке
   let numberArr = []
  for (let prop of arrSpace) {
    if (isFinite(prop)) {
      let number = +prop
      numberArr.push(number)
    }
  }
  // C помощью математических функций и оператора расширения нахожу минимальное и максимальное число
  let minNumber = Math.min(...numberArr)
  let maxNumber = Math.max(...numberArr)
  // Создаю объект и присваиваю ему свойства, затем его возвращаю
  let result = {}
  result.min = minNumber
  result.max = maxNumber
  return result
}
