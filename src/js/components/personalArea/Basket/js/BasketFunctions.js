import {deliveryPageTemplate} from '../view/chooseDeliveryMethod/deliveryPage.template'
import {paymentPageTemplate} from '../view/payment/paymentPage.template'
import {basketPageTemplate} from '../view/goodsInBaskets/basketPage.template'
import {orderDone} from "../view/payment/orderDone";

export class BasketFunctions {
  constructor() {
    this.$root = document.querySelector('#personal-area-content-js')
    this.stateComponent = this.$root.querySelector('[data-parent-basket-component-js]')
  }

  addComponent(component) {
    this.stateComponent.remove()
    this.$root.insertAdjacentHTML('afterbegin', component);
    this.initialRadioButtons()
    this.stateComponent = this.$root.querySelector('[data-parent-basket-component-js]')
  }

  showDeliverySection() {
    this.addComponent(deliveryPageTemplate())
  }

  showPaymentSection() {
    if(this.stateComponent.id === 'personal-area-basket-payment-js' ) {
      this.addComponent(orderDone())
      return
    }
    this.addComponent(paymentPageTemplate())
  }

  prevBasketSection() {
    if(this.stateComponent.id === 'delivery-page-js') {
      this.addComponent(basketPageTemplate())
    } else {
      this.addComponent(deliveryPageTemplate())
    }
  }

  initialRadioButtons() {
    const radioButtons = this.$root.querySelectorAll('.radio-button-delivery-js')
    const parentBlocks = this.$root.querySelectorAll('[data-personal-checked-options]')
    if(radioButtons && parentBlocks) {
      radioButtons.forEach((radio) => {
        radio.addEventListener('click', (e) => {
          if(e.target.checked) {
            parentBlocks.forEach((block) => {
              block.classList.remove('active')
            })

            const thisParent = e.target.closest('[data-personal-checked-options]')
            thisParent.classList.add('active')
          }
        })
      })
    }
  }
}
