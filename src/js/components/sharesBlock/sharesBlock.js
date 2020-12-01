import {Component} from '../../core/Component'
import {sharesBlock} from './sharesBlock.template'
import img1 from '../../../images/shares/img1.png'
import img2 from '../../../images/shares/img2.png'
import img3 from '../../../images/shares/img3.png'
import Swiper from 'swiper/bundle'


export class SharesBlock extends Component {
  static className = 'Shares-block'
  constructor($root) {
    super($root, {
      name: 'SharesBlock',
      listeners: ['click']
    });


  }
  slider() {
    let sharesBlock = new Swiper('.swiper-container3', {
      slidesPerView: 1,
      slidesPerGroup: 1,
    })
  }
  toHTML() {
    return sharesBlock(cards)
  }

  onClick(e) {

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
