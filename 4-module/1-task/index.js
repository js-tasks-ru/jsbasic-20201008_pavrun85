/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  let str = ''
  for (let name of friends) {
    str += '<li>' + name.firstName + ' ' + name.lastName + '</li>'
  }
  let list = document.createElement('ul')
  list.innerHTML = str
  return list
}
