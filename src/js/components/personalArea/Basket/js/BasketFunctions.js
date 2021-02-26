import {deliveryPageTemplate} from '../view/chooseDeliveryMethod/deliveryPage.template'
import {paymentPageTemplate} from '../view/payment/paymentPage.template'
import {basketPageTemplate} from '../view/goodsInBaskets/basketPage.template'
import {orderDoneTemplate} from "../view/payment/orderDone/orderDone.template";
import {toggleShowInformation} from '../../../../core/utils/utils'

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
      this.addComponent(orderDoneTemplate())
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

  deliveryHandleClick(e) {
    const element = e.target.closest('[data-open-section-js]');
    switch (element.id) {
      case 'delivery-page-1-js':
        toggleShowInformation('#data-content-1-js')
        break;
      case 'delivery-page-2-js':
        toggleShowInformation('#data-content-2-js')
        break;
      case 'delivery-page-3-js':
        toggleShowInformation('#data-content-3-js')
        break;
      case 'delivery-page-4-js':
        toggleShowInformation('#data-content-4-js')
        break;
    }
  }
}
