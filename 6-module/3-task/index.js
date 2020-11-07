import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    // Создаю карусель
    this.elem = this['createCarouselDom']()
    this.elem.addEventListener('click', event => this['onClick'](event))
    // Скрытие правой стрелки переключения
    let allSlides = this.elem.querySelectorAll('.carousel__slide')
    let couruselArrowRight = this.elem.querySelector('.carousel__arrow_right')
    if (allSlides.length - 1)  {
      couruselArrowRight.style.display = 'none'
    } else {
      couruselArrowRight.style.display = ''
    }
    // Скрытие левой стрелки переключения
    this.position = 0
    let couruselArrowLeft = this.elem.querySelector('.carousel__arrow_left') 
    if (this.position === 0) {
      couruselArrowLeft.style.display = 'none'
    } else {
      couruselArrowLeft.style.display = ''
    }
  }

  onClick(event) {
    // Генерация события при клике на кнопку
    let target = event.target
    if (target.tagName === 'BUTTON') {
      let slide = target.closest('.carousel__slide')
      let event = new CustomEvent('product-add', {
        detail: slide.dataset.id, 
        bubbles: true
        })
      slide.dispatchEvent(event)
    }
     // Переключение слайдов
     let carouselInner = this.elem.querySelector('.carousel__inner')
     let width = carouselInner.offsetWidth
     if (target.classList.contains('carousel__arrow_right')) {
       this.position -= width
       carouselInner.style.transform = `translateX(${this.position}px)`
     } else if (target.classList.contains('carousel__arrow_left')) {
       this.position += width
       carouselInner.style.transform = `translateX(${this.position}px)`
    }
  }

  createCarouselDom() {
    let carousel = document.createElement('div')
    carousel.className = 'carousel'
    carousel.innerHTML = `
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
  
        <div class="carousel__inner">`
        let count = 1
        for (let slide of this.slides) {
          carousel.innerHTML += `
          <!--Верстка ${count++} слайда-->
          <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>`
        }
    carousel.innerHTML += `
        </div>
      </div>`
    return carousel
  }
}
