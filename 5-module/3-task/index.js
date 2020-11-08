function initCarousel() {
  // ваш код...
  let container = document.querySelector('[data-carousel-holder]')
  let elem = container.querySelector('.carousel__inner')
  let slides = container.querySelectorAll('.carousel__slide')
  let couruselArrowLeft = container.querySelector('.carousel__arrow_left')
  let couruselArrowRight = container.querySelector('.carousel__arrow_right')
  
  let width = elem.offsetWidth
  let position = 0
  
  if (position === 0) {
    couruselArrowLeft.style.display = 'none'
  } else {
    couruselArrowLeft.style.display = ''
  }

  if (slides.length - 1) {
    couruselArrowRight.style.display = 'none'
  } else {
    couruselArrowRight.style.display = ''
  }
  
  container.addEventListener('click', event => {
    if (event.target.classList.contains('carousel__arrow_right')) {
      position -= width
      elem.style.transform = `translateX(${position}px)`
    } else if (event.target.classList.contains('carousel__arrow_left')) {
      position += width
      elem.style.transform = `translateX(${position}px)`
    }
  })
}


