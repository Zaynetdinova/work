import {basketTemplate} from './basket.template'
import {Component} from '../../../core/Component'
import {BasketFunctions} from './js/BasketFunctions'


export class Basket extends Component {
  static className = 'Basket'

  constructor($root) {
    super($root, {
      name: 'Basket',
      listeners: ['click']
    });
    this.basket = null
    this.link = [
      {
        title: 'Корзина',
        link: '/#personal-area/basket'
      }
    ]
  }

  toHTML() {
    return basketTemplate(this.link)
  }

  afterInitComponent() {
    this.basket = new BasketFunctions()
  }


  // showPaymentSection() {
  //   const $root = document.querySelector('#personal-area-content-js')
  //   const deliverySection = document.querySelector('#delivery-page-js')
  //   deliverySection.remove()
  //   $root.insertAdjacentHTML('afterbegin', paymentPageTemplate());
  // }


  onClick(e) {
    // if(e.target.closest('[data-delivery-page-event-js]')) {
    //   this.basket.deliveryHandleClick(e)
    //   return
    // }

    // if(e.target.closest('[data-parent-js]')) {
    //   const element = e.target.closest('[data-parent-js]');
    //
    //   switch (element.id) {
    //     case 'checkout-order-delivery-js':
    //       this.basket.showDeliverySection()
    //       break;
    //     case 'pagination-next-js':
    //       this.basket.showPaymentSection()
    //       break;
    //     case 'pagination-prev-js':
    //       this.basket.prevBasketSection()
    //       break;
    //   }
    // }
  }
}
