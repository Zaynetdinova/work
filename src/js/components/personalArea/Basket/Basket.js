import {basketTemplate} from './basket.template'
import {Component} from '../../../core/Component'


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

  }

  onClick(e) {

  }
}
