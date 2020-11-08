import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.container = this['createContainer']()
    this.modalTitle = this.container.querySelector('.modal__title')
    this.modalBody = this.container.querySelector('.modal__body') 
    document.addEventListener('click', event => this['onClick'](event))
    document.addEventListener('keydown', event => this['escape'](event))
  }

  escape(event) {
    if (event.code === 'Escape') {
      this['close']()
    }
  }

  onClick(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('modal__close')) {
      this['close']()
    }
  }

  createContainer() {
    let container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <!--Корневой элемент Modal-->
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
  
        <div class="modal__inner">
         <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
  
            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
  
          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>
  
      </div>`
    return container
  }

  open() {
    document.body.classList.add('is-modal-open')
    document.body.prepend(this.container)
  }

  setTitle(title) {
    this.modalTitle.textContent = title
    return this.modalTitle
  }

  setBody(node) {
    this.modalBody.textContent = null
    this.modalBody.append(node)
    return this.modalBody
  }

  close() {
    document.body.classList.remove('is-modal-open')
    let firstContainer = document.querySelector('.container') 
    firstContainer.innerHTML = null
  }
}
