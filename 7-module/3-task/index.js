export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.value = value
    
    this.elem = this['createSlider']()
    this.slider = this.elem.querySelector('.slider')
     // Добавляю спаны в верстку
    this.slider.innerHTML += `
    <span></span>
    <span></span>`
    this.elem.addEventListener('click', event => this['onClick'](event))
  }

  onClick(event) {
    let left = event.clientX - this.slider.getBoundingClientRect().left
    let leftRelative = left /this.slider.offsetWidth
    let segments = this.steps - 1
    let approximateValue = leftRelative * segments
    let currentValue = Math.round(approximateValue)
    let valuePercents = currentValue  / segments * 100
    // Записываю новое значение внутрь элемента с классом slider__value
    let sliderValue = this.slider.querySelector('.slider__value')
    sliderValue.textContent = null
    sliderValue.textContent = currentValue 
    // Генерирую пользовательское событие
    if (this.value !== currentValue) {
      this.value = currentValue 
      let event = new CustomEvent('slider-change', { 
      detail: this.value, 
      bubbles: true 
      })
      this.slider.dispatchEvent(event)
    }
    // Визуально выделяю шаг на слайдере
    let spans = this.slider.querySelectorAll('span')
    let selected = this.slider.querySelector('.slider__step-active')
    if (selected) {
      selected.classList.remove('slider__step-active')
    } 
    spans[currentValue].classList.add('slider__step-active')
    // Меняю положение ползунка
    let thumb = this.slider.querySelector('.slider__thumb')
    thumb.style.left = `${valuePercents}%`
    // Расширяю закрашенную область до ползунка
    let progress = this.slider.querySelector('.slider__progress')
    progress.style.width = `${valuePercents}%`
  }

  createSlider() {
    let container = document.createElement('div')
    container.className = 'container'
    container.style = 'left: 50%;'
    container.innerHTML = `
      <!--Корневой элемент слайдера-->
      <div class="slider">
    
        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb">
          <span class="slider__value">0</span>
        </div>
    
        <!--Полоска слайдера-->
        <div class="slider__progress"></div>
    
        <!-- Шаги слайдера (вертикальные чёрточки) -->
        <div class="slider__steps">
          <!-- текущий выбранный шаг выделен этим классом -->
          <span class="slider__step-active"></span>
          <span></span>
          <span></span>
        </div>
      </div>`
    return container
  }
}
