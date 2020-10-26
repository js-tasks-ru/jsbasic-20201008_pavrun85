/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 1; i < table.rows.length; i++) {
        // Проставляю класс available/unavailable в зависимости от значения атрибута data-available
        if (table.rows[i].cells[3].getAttribute('data-available') === 'true') {
            table.rows[i].classList.add("available")  
        } else if (table.rows[i].cells[3].getAttribute('data-available') === 'false') {
            table.rows[i].classList.add("unavailable")
        // Проставляю атрибут hidden, если атрибута data-available нет вообще 
        } else {
            table.rows[i].setAttribute('hidden', true)
        }
        // Проставляю класс male/female в зависимости от содержимого ячейки Gender
        if (table.rows[i].cells[2].innerHTML === 'm') {
            table.rows[i].classList.add("male")  
        } else {
            table.rows[i].classList.add("female")
        }
        // Добавляю inline-стиль, если значение ячейки Age меньше 18
        if (table.rows[i].cells[1].innerHTML <= 18) {
            table.rows[i].style.cssText = `text-decoration: line-through`
        }
    }  
}
