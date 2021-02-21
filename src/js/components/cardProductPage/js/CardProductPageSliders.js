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

    this.mobileMainSlider = {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
      slidesOffsetAfter: 0,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
      breakpoints: {
        415: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 15,
          slidesOffsetAfter: 0,
        },
        376: {
          slidesPerView: 1.36,
          slidesPerGroup: 1,
          spaceBetween: 15,
          slidesOffsetAfter: 15,
        },
        321: {
          slidesPerView: 1.18,
          slidesPerGroup: 1,
          spaceBetween: 15,
          slidesOffsetAfter: 15,
        }
      }
    }

    const topSlider = new Swiper('#view-big-photos-block-swiper-js', this.optionsTopSlider)


  }

  init() {
    const auxiliarySlider = new Swiper('#view-photos-block-swiper-js', this.optionsAuxiliarySlider)


    new Swiper('.bestseller-product', this.optionsTest)
    new Swiper('.bestseller-product2', this.optionsTest)

    new Swiper('.test-mobile', this.mobileMainSlider)

    new Swiper('.another-photo-mobile',{
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 5,
      slidesOffsetAfter: 0,
      breakpoints: {
        768: {
          slidesPerView: 6,
          slidesPerGroup: 1,
          spaceBetween: 5,
          slidesOffsetAfter: 0,
        },
        525: {
          slidesPerView: 7,
          slidesPerGroup: 1,
          spaceBetween: 5,
          slidesOffsetAfter: 0,
        },
        500: {
          slidesPerView: 6,
          slidesPerGroup: 1,
          spaceBetween: 5,
          slidesOffsetAfter: 0,
        },
        375: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 5,
          slidesOffsetAfter: 0,
        },
        320: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 5,
          slidesOffsetAfter: 0,
        }
      }
    })
  }
}
