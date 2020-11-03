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
    if (this.position === 0) {
      this['hideArrowLeft']()
    } else {
      this.couruselArrowLeft.style.display = ''
    }
    // Скрытие правой стрелки переключения
    this.couruselArrowRight = this.elem.querySelector('.carousel__arrow_right') 
    let allSlides = this.elem.querySelectorAll('.carousel__slide')
    if (allSlides.length - 1) {
      this['hideArrowRight']()
    } else {
      this.couruselArrowRight.style.display = ''
    }
  }

  hideArrowRight() {
    this.couruselArrowRight.style.display = 'none'
  }

  hideArrowLeft() {
    this.couruselArrowLeft.style.display = 'none'
  }

  onClick(event) {
     // Обрабатываю событие при клике на кнопку и генерирую событие
     for (let slide of this.slides) {
      if (event.target.classList.contains('carousel__button')) {
        let event = new CustomEvent('product-add', {
          detail: slide.id, 
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
      let arrowRight = document.createElement('div')
      arrowRight.classList.add('carousel__arrow')
      arrowRight.classList.add('carousel__arrow_right')
        let imgArrrowRight = document.createElement('img')
        imgArrrowRight.src = '/assets/images/icons/angle-icon.svg'
        imgArrrowRight.alt = 'icon'
      arrowRight.append(imgArrrowRight)
    carousel.append(arrowRight)
      let arrowLeft = document.createElement('div')
      arrowLeft.classList.add('carousel__arrow')
      arrowLeft.classList.add('carousel__arrow_left')
        let imgArrrowLeft = document.createElement('img')
        imgArrrowLeft.src = '/assets/images/icons/angle-left-icon.svg'
        imgArrrowLeft.alt = 'icon'
      arrowLeft.append(imgArrrowLeft)
    carousel.append(arrowLeft)
      let carouselElem = document.createElement('div')
      carouselElem.className = 'carousel__inner'
      for (let slide of this.slides) {
        let firstDiv = document.createElement('div')
        firstDiv.className = 'carousel__slide'
        firstDiv['data-id'] = 'penang-shrimp'
          let firstImage = document.createElement('img')
          firstImage.src = `/assets/images/carousel/${slide.image}`
          firstImage.className = 'carousel__img'
          firstImage.alt = 'slide'
        firstDiv.append(firstImage)
          let secondDiv = document.createElement('div')
          secondDiv.className = 'carousel__caption'
            let span = document.createElement('span')
            span.className = 'carousel__price'
            span.textContent = `€${(slide.price).toFixed(2)}`
          secondDiv.append(span)
            let thirdDiv = document.createElement('div')
            thirdDiv.className = 'carousel__title'
            thirdDiv.textContent = `${slide.name}`
          secondDiv.append(thirdDiv)
            let button = document.createElement('button')
            button.type = 'button'
            button.className = 'carousel__button'
              let secondImage = document.createElement('img')
              secondImage.src = '/assets/images/icons/plus-icon.svg'
              secondImage.alt = 'icon'
            button.append(secondImage)
          secondDiv.append(button)
        firstDiv.append(secondDiv)
      carouselElem.append(firstDiv)
      }
    carousel.append(carouselElem)
    return carousel
  }
}
