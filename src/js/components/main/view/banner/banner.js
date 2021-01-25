import Swiper from 'swiper/bundle'
import {bannerTemplate} from './banner.template'

const cards = {
  first:  { title: 'BLACK FRIDAY<br> <span style="font-weight: normal">СКИДКИ ДО</span> 70%*',
    description: '*Акция продлится с 27 НОЯБРЯ по 23:59 30 НОЯБРЯ 2020 г.'},
  second:  { title: 'Сезонная распродажа поднимет вам настроение этой осенью',
    description: '*Дизайнеры Counte предлогают вам гамму которая добавит в вашу осень ярчайших цветов и приятных оттенков.'},
}

export class Banner {


  slider() {
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')
    let mySwiper = new Swiper('.swiper-container1', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2000,
      },
      on: {
        slideChange: function () {
          function textChange(previousIndex = 1) {
            let text
            switch (previousIndex) {
              case 0:
                text =  'first'
                break;
              case 1:
                text = 'second'
                break;
            }
            return text
          }
          const text = textChange(this.realIndex)
          if(text) {
            title.innerHTML = cards[text].title
            description.innerHTML = cards[text].description
          }
        },

        init: function () {
          title.innerHTML = cards.first.title
          description.innerHTML = cards.second.description
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
    return `
      <div class="Banner">
        ${bannerTemplate()}
      </div>
    `

  }

  onClick(e) {

  }

}

