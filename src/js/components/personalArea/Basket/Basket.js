import {Component} from "../../../core/Component";
import {basketTemplate} from "./basket.template";
import {deliveryPageTemplate} from "./view/deliveryPage.template";



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

  testF() {
    console.log('super')
    const $root = document.querySelector('#personal-area-content-js')
    const basket = document.querySelector('#basket-page-js')
    basket.remove()
    $root.insertAdjacentHTML('afterbegin', deliveryPageTemplate());
  }

  onClick(e) {
    if(e.target.closest('article')) {
      const element = e.target.closest('article');

      switch (element.id) {
        case 'test-js':
          this.testF()
          break;
        case 'mobile-search-js':

          break;
      }
    }
  }
}
