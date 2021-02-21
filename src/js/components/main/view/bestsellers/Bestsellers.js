import {bestsellersTemplate} from './bestsellers.template'

import Swiper from 'swiper'
import {testDataBestsellers} from "../../../../../testData/testDataBestsellers";


export class Bestsellers  {

  slider() {
    const options = {
      slidesPerView: 1.9,
      spaceBetween: 15,
      centeredSlides: false,
      loop: false,
      slidesOffsetAfter: 16,

      on: {
        slideChange: function () {

        },

        init: function () {

          if(this.slides.length >= 8) {

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
      breakpoints: {
        1025: {
          spaceBetween: 20,
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 6,
          centeredSlides: false,
          loop: false,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          centeredSlides: false,
          loop: false,
          slidesOffsetAfter: 0,
        },
        700: {
          slidesPerView: 3,
          slidesOffsetAfter: 0,
        },
        600: {
          slidesPerView: 2.5,
        },
        374: {
          slidesPerView: 2.27,
        }
      }
    }

    new Swiper('[data-common-card-slider-main-woman]', options)
    new Swiper('[data-common-card-slider-main-child]', options)
    new Swiper('[data-common-card-slider-main-man]', options)
    new Swiper('[data-common-card-slider-main-home]', options)
    new Swiper('[data-common-card-slider-main-toy]', options)
  }

  toHTML() {
    return `
    <div class="Bestsellers">
        ${bestsellersTemplate(testDataBestsellers)}
    </div>
    `
  }
}






