import Swiper from "swiper";

export class CardProductPageSliders {
  constructor() {

    this.optionsTest = {
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

   this.optionsAuxiliarySlider = {
      slidesPerView: 4,
      direction: 'vertical',
      spaceBetween: 5,
      on: {
        click: function(e) {
          if(this.clickedSlide) {
            const slideNumber = this.clickedSlide.getAttribute('aria-label').charAt(0)
            const a = +slideNumber + 3
            topSlider.slideTo(a)
          }
        },
      },

      loop: false,
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
      cssMode: true,
    }

    this.optionsTopSlider = {
      slidesPerView: 4,
      direction: 'vertical',
      loop: true,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      }
    }

    const topSlider = new Swiper('#view-big-photos-block-swiper-js', this.optionsTopSlider)
  }

  init() {
    const auxiliarySlider = new Swiper('#view-photos-block-swiper-js', this.optionsAuxiliarySlider)
    // this.topSlider = new Swiper('#view-big-photos-block-swiper-js', this.optionsTopSlider)

    new Swiper('.bestseller-product', this.optionsTest)
    new Swiper('.bestseller-product2', this.optionsTest)
  }
}
