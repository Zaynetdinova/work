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
    let mySwiper = new Swiper('.swiper-container1', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2000,
      },
      on: {
        slideChange: function () {
          console.log(this.previousIndex)
          if(this.previousIndex === 1) {
            const test = document.querySelector('#test')
            test.innerHTML = 'Сезонная распродажа поднимет вам настроение этой осенью'
          } else if(this.previousIndex === 2) {
            const test = document.querySelector('#test')
            test.innerHTML = 'Hello'
          }

        }
      },
      pagination: {
        el: '.swiper-pagination',
      },
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
