/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows
    this.table = document.createElement('table')
    // Создаю "шапку" таблицы
    this.tHead = '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody><tr>'
    // Вызываю метод, чтобы создать таблицу 
    this.elem = this['makeTable']()
    // На созданную таблицу устанавливаю слушатель событий, чтобы при клике на кнопку удалить строку
    this.table.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        let target = event.target.closest('tr')
        target.remove()
      }
    })
  }

  makeTable() {
    let value = this.rows.reduce((string, user) => {
      if (user.length - 1) {
        return string + '<td>' + user.name + '</td>' + '<td>' + user.age + '</td>' + '<td>' + user.salary + '</td>' + '<td>' + user.city + '</td>' + '<td>' + '<button>' + 'X' + '</button>' + '</td>' + '</tr>' + '</tbody>'
      }
     return string + '<td>' + user.name + '</td>' + '<td>' + user.age + '</td>' + '<td>' + user.salary + '</td>' + '<td>' + user.city + '</td>' + '<td>' + '<button>' + 'X' + '</button>' + '</td>' + '</tr>'  
    }, this.tHead)
    this.table.innerHTML = value
    return this.table
  }
}
