import {sharesBlockTemplate} from './sharesBlock.template'
import img1 from '../../../../../images/shares/img1.png'
import img2 from '../../../../../images/shares/img2.png'
import img3 from '../../../../../images/shares/img3.png'
import Swiper from 'swiper/bundle'


export class SharesBlock  {
  static className = 'Shares-block'

  slider() {
    let sharesBlock = new Swiper('.swiper-container3', {
      slidesPerView: 1,
      slidesPerGroup: 1,
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
      <div class="Shares-block">
        ${sharesBlockTemplate(cards)}
      </div>
    `
  }

}

const cards = [
  {
    id: '',
    img: img1,
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    description: 'Lorem ipsum dolor sit amet',
    banner: true,
  },
  {
    id: '',
    img: img2,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean adipiscing elit. Aeneanadipiscing elit. Aenean',
    banner: true
  },
  {
    id: '',
    img: img3,
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    description: 'Lorem ipsum dolor sit amet, consectetuer'
  },
]
