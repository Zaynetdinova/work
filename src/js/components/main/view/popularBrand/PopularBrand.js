
import img1 from '../../../../../images/popular-brand/1.png'
import img2 from '../../../../../images/popular-brand/2.png'
import img3 from '../../../../../images/popular-brand/3.png'
import img4 from '../../../../../images/popular-brand/4.png'
import Swiper from 'swiper/bundle'
import {popularBrandTemplate} from './popularBrand.template'


export class PopularBrand  {

  slider() {
    let popularBrand = new Swiper('.swiper-container2', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
      breakpoints: {
        414: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        }
      }
    })
  }

  toHTML() {
    return `
      <div class="PopularBrand">
       ${popularBrandTemplate(cards)}
      </div>
    `
  }
}

const cards = [
  {
    id: '',
    img: img1,
    title: 'Lorem ipsum dolor sit amet, consectetuer',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    id: '',
    img: img2,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean adipiscing elit. Aeneanadipiscing elit. Aenean'
  },
  {
    id: '',
    img: img3,
    title: 'Lorem ipsum dolor sit amet, consectetuer',
    description: 'Lorem ipsum dolor sit amet, consectetuer'
  },
  {
    id: '',
    img: img4,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetuer'
  }
]
