import {Component} from '../../core/Component'
import {popularBrand} from './popularBrand.template'
import img1 from '../../../images/popular-brand/1.png'
import img2 from '../../../images/popular-brand/2.png'
import img3 from '../../../images/popular-brand/3.png'
import img4 from '../../../images/popular-brand/4.png'

export class PopularBrand extends Component {
  static className = 'Popular-brand'
  constructor($root) {
    super($root, {
      name: 'PopularBrand',
      listeners: ['click']
    });


  }
  toHTML() {
    return popularBrand(cards)
  }

  onClick(e) {
  }
}

const cards = [
  {
    id: '',
    img: img1,
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
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
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    description: 'Lorem ipsum dolor sit amet, consectetuer'
  },
  {
    id: '',
    img: img4,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetuer'
  }
]
