import {Component} from '../../core/Component'
import {createMain} from './main.template'
import Swiper from 'swiper/bundle';

export class Main extends Component {
  static className = 'Main'
  constructor($root) {
    super($root, {
      name: 'Main',
      listeners: ['click']
    });
  }

  slider() {
    let mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      autoplay: {
        delay: 2000,
      },
    })
    console.log('header Slider')
  }

  toHTML() {
    return createMain()
  }

  onClick(e) {
    console.log('Main', e)
  }

}
