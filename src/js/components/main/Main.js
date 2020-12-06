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
            const title = document.querySelector('#title')
            const description = document.querySelector('#description')
            title.innerHTML = 'Сезонная распродажа поднимет вам настроение этой осенью'
            description.innerHTML = 'Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.'

          } else if(this.previousIndex === 2) {
            const title = document.querySelector('#title')
            const description = document.querySelector('#description')
            title.innerHTML = 'BLACK FRIDAY<br> <span style="font-weight: normal">СКИДКИ ДО</span> 70%*'
            description.innerHTML = '*Акция продлится с 27 НОЯБРЯ по 23:59 30 НОЯБРЯ 2020 г.'
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

