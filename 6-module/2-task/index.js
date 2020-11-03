import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product
    this.elem = this['createDomElement']()
    this.elem.addEventListener('click', event => this['onClick'](event))
  }

  onClick(event) {
    if (event.target.classList.contains('card__button')) {
      let event = new CustomEvent('product-add', {
        detail: this.product.id, 
        bubbles: true
      })
      this.elem.dispatchEvent(event)
    }
  }

  createDomElement() {
    let firstDiv = document.createElement('div')
    firstDiv.className = 'card'
      let secondDiv = document.createElement('div')
      secondDiv.className = 'card__top'
        let firstImage = document.createElement('img')
        firstImage.src = `/assets/images/products/${this.product.image}`
        firstImage.className = 'card__image'
        firstImage.alt = 'product'
      secondDiv.append(firstImage)
        let span = document.createElement('span')
        span.className = 'card__price'
        span.textContent = `€${(this.product.price).toFixed(2)}`
      secondDiv.append(span)
    firstDiv.append(secondDiv)
      let thirdDiv = document.createElement('div')
      thirdDiv.className = 'card__body'
        let fourthDiv = document.createElement('div')
        fourthDiv.className = 'card__title'
        fourthDiv.textContent = `${this.product.name}`
      thirdDiv.append(fourthDiv)
        let button = document.createElement('button')
        button.className = 'card__button'
          let secondImage = document.createElement('img')
          secondImage.src = '/assets/images/icons/plus-icon.svg'
          secondImage.alt = 'icon'
        button.append(secondImage)
      thirdDiv.append(button)
    firstDiv.append(thirdDiv)
    return firstDiv
  }
}
