import {Component} from "../../../core/Component";
import {basketTemplate} from "./basket.template";
import {deliveryPageTemplate} from "./view/deliveryPage.template";
import {paymentPageTemplate} from './view/paymentPage.template'
import {basketPageTemplate} from './view/basketPage.template'
import {ActiveRoute} from '../../../core/routes/ActiveRoute'
import {deliveryPage} from './js/deliveryPage'



export class Basket extends Component {
  static className = 'Basket'

  constructor($root) {
    super($root, {
      name: 'Basket',
      listeners: ['click']
    });
  }

  toHTML() {
    return basketTemplate()
  }

  afterInitComponent() {

  }

  showDeliverySection() {
    const $root = document.querySelector('#personal-area-content-js')
    const basketSection = document.querySelector('#basket-page-js')
    basketSection.remove()
    $root.insertAdjacentHTML('afterbegin', deliveryPageTemplate());
    initialRadioButtons()
    ///
    function initialRadioButtons() {
      const radioButtons = document.querySelectorAll('.radio-button-delivery-js')
      const parentBlocks = document.querySelectorAll('[data-parent-delivery-block-js]')

      radioButtons.forEach((radio) => {
        radio.addEventListener('click', (e) => {
          if(e.target.checked) {
            parentBlocks.forEach((block) => {
              block.classList.remove('active')
            })
            console.log(e.target)
            const thisParent = e.target.closest('[data-parent-delivery-block-js]')
            thisParent.classList.add('active')
          }
        })
      })
    }
  }

  showPaymentSection() {
    const $root = document.querySelector('#personal-area-content-js')
    const deliverySection = document.querySelector('#delivery-page-js')
    deliverySection.remove()
    $root.insertAdjacentHTML('afterbegin', paymentPageTemplate());
  }

  prevBasketSection() {
    console.log(ActiveRoute.path)
    const $root = document.querySelector('#personal-area-content-js')
    const deliverySection = document.querySelector('#delivery-page-js')
    deliverySection.remove()
    $root.insertAdjacentHTML('afterbegin', basketPageTemplate());
  }

  onClick(e) {
    if(e.target.closest('[data-delivery-page-event-js]')) {
      deliveryPage(e)
      return
    }

    if(e.target.closest('[data-parent-js]')) {
      const element = e.target.closest('[data-parent-js]');

      switch (element.id) {
        case 'checkout-order-delivery-js':
          this.showDeliverySection()
          break;
        case 'pagination-next-js':
          this.showPaymentSection()
          break;
        case 'pagination-prev-js':
          this.prevBasketSection()
          break
      }
    }
  }
}
