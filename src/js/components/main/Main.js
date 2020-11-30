import {Component} from '../../core/Component'
import {createMain} from './main.template'
import Swiper from 'swiper/bundle'

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
      speed: 800,
      autoplay: {
        delay: 2000,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
    })
  }

  toHTML() {
    return createMain()
  }

  onClick(e) {
    console.log('Main', e)
  }

}
