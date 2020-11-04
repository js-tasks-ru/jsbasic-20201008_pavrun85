import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    // Создаю карусель
    this.elem = this['createCarouselDom']()
    this.elem.addEventListener('click', event => this['onClick'](event))
    this.position = 0
    // Скрытие левой стрелки переключения
    this.couruselArrowLeft = this.elem.querySelector('.carousel__arrow_left')
    if (this.position === 0) this['hideArrowLeft']()
    // Скрытие правой стрелки переключения
    this.couruselArrowRight = this.elem.querySelector('.carousel__arrow_right') 
    this.allSlides = this.elem.querySelectorAll('.carousel__slide')
    if (this.allSlides.length - 1) this['hideArrowRight']()
  }

  hideArrowRight() {
    this.couruselArrowRight.style.display = 'none'
  }

  hideArrowLeft() {
    this.couruselArrowLeft.style.display = 'none'
  }

  onClick(event) {
     // Обрабатываю событие при клике на кнопку и генерирую событие
     for (let slide of this.allSlides ) {
      if (event.target.classList.contains('carousel__button')) {
        let event = new CustomEvent('product-add', {
          detail: slide.dataset.id, 
          bubbles: true
        })
        this.elem.dispatchEvent(event)
      }
    }
     // Переключение слайдов
     let carouselInner = this.elem.querySelector('.carousel__inner')
     let width = carouselInner.offsetWidth
     if (event.target.classList.contains('carousel__arrow_right')) {
       this.position -= width
       carouselInner.style.transform = `translateX(${this.position}px)`
     } else if (event.target.classList.contains('carousel__arrow_left')) {
       this.position += width
       carouselInner.style.transform = `translateX(${this.position}px)`
    }
  }

  createCarouselDom() {
    let carousel = document.createElement('div')
    carousel.className = 'carousel'
    carousel.innerHTML = `
      <!--Корневой элемент карусели-->
      <div class="carousel">
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
