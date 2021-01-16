import {popupPhotoTemplate} from './popupPhoto.template'
import Swiper from "swiper";

export class popupPhoto {

  constructor() {

  }


  toHTML() {
    return popupPhotoTemplate()
  }

  initialSlider() {
    new Swiper('#view-big-photos-popup-swiper-js', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
    })
  }

  eventClose() {
    const $close = document.querySelector('#close-popup-js')
    $close.addEventListener('click', this.close)
  }

  close() {
    const $el = document.querySelector('.view-big-photos-popup-block')
    $el.remove()
  }
}

