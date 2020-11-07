import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this['createRibbonMenu']()
    this.elem.addEventListener('click', event => this['onClick'](event))
    this.ribbonInner = this.elem.querySelector('.ribbon__inner')
    // Скрытие кнопки "назад"
    let scrollLeft = this.ribbonInner.scrollLeft
    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left')
    if (scrollLeft === 0) {
      arrowLeft.classList.remove('ribbon__arrow_visible')
    } else {
      arrowLeft.classList.add('ribbon__arrow_visible')
    }
    // Скрытие кнопки "вперед"
    let scrollWidth = this.ribbonInner.scrollWidth
    let clientWidth = this.ribbonInner.clientWidth
    let scrollRight = scrollWidth - scrollLeft - clientWidth
    let arrowRight = this.elem.querySelector('.ribbon__arrow_right')
    if (scrollRight === 0) {
      arrowRight.classList.remove('ribbon__arrow_visible')
    } else {
      arrowRight.classList.add('ribbon__arrow_visible')
    }
  }

  onClick(event) {
    // Прокрутка меню
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('ribbon__arrow_right')) {
      this.ribbonInner.scrollBy(350, 0)
    } else if (event.target.tagName === 'BUTTON' && event.target.classList.contains('ribbon__arrow_left')) {
      this.ribbonInner.scrollBy(-350, 0)
    }
    // После клика создаю событие
    if (event.target.tagName === 'A') {
      event.preventDefault()
      let selected = this.elem.querySelectorAll('.ribbon__item_active')
      for(let a of selected) {
        a.classList.remove('ribbon__item_active')
      }
      event.target.classList.add('ribbon__item_active')

      let customEvent = new CustomEvent('ribbon-select', { 
        detail: event.target.dataset.id, 
        bubbles: true 
      })
      this.elem.dispatchEvent(customEvent)
    }
  }

  createRibbonMenu() {
    let ribbon = document.createElement('div')
    ribbon.className = 'ribbon'
    ribbon.innerHTML = `
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>`
      for (let i = 1; i < this.categories.length; i++) {
        ribbon.innerHTML += `
        <a href="#" class="ribbon__item" data-id=${this.categories[i].id}>${this.categories[i].name}</a>`
      }
      ribbon.innerHTML += `
      </nav>

      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>`
    return ribbon
  }
}
