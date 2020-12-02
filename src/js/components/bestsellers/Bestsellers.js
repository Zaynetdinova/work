import {Component} from '../../core/Component'
import Swiper from 'swiper/bundle'
import {createBestsellers} from './bestsellers.template'
import {eventHover} from './js/viewMaterial'

import img1 from '../../../images/bestsellers/1/img1.png'
import img2 from '../../../images/bestsellers/1/img2.png'
import img3 from '../../../images/bestsellers/1/img3.png'
import img4 from '../../../images/bestsellers/1/img4.png'
import img5 from '../../../images/bestsellers/1/img5.png'
import img6 from '../../../images/bestsellers/1/img6.png'

import ch1 from '../../../images/children/img1.png'
import ch2 from '../../../images/children/img2.png'
import ch3 from '../../../images/children/img3.png'
import ch4 from '../../../images/children/img4.png'
import ch5 from '../../../images/children/img5.png'
import ch6 from '../../../images/children/img6.png'

import men1 from '../../../images/bestsellers/3/img1.png'
import men2 from '../../../images/bestsellers/3/img2.png'
import men3 from '../../../images/bestsellers/3/img3.png'
import men4 from '../../../images/bestsellers/3/img4.png'
import men5 from '../../../images/bestsellers/3/img5.png'
import men6 from '../../../images/bestsellers/3/img6.png'

import pil1 from '../../../images/bestsellers/4/img1.png'
import pil2 from '../../../images/bestsellers/4/img2.png'
import pil3 from '../../../images/bestsellers/4/img3.png'
import pil4 from '../../../images/bestsellers/4/img4.png'
import pil5 from '../../../images/bestsellers/4/img5.png'
import pil6 from '../../../images/bestsellers/4/img6.png'

import toy1 from '../../../images/bestsellers/5/img1.png'
import toy2 from '../../../images/bestsellers/5/img2.png'
import toy3 from '../../../images/bestsellers/5/img3.png'
import toy4 from '../../../images/bestsellers/5/img4.png'
import toy5 from '../../../images/bestsellers/5/img5.png'
import toy6 from '../../../images/bestsellers/5/img6.png'


export class Bestsellers extends Component {
  static className = 'Bestsellers'
  constructor($root) {
    super($root, {
      name: 'Bestsellers',
      listeners: []
    });


  }
  toHTML() {
    return createBestsellers(cards)
  }

  functionAfterContent() {
    eventHover()
  }



  slider() {
    const options = {
      slidesPerView: 1.8,
      spaceBetween: 15,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          centeredSlides: false,
          loop: false,
        },
        768: {
          slidesPerView: 4,
          centeredSlides: false,
          loop: false,
        },
        415: {
          slidesPerView: 3.3,
        },
        414: {
          slidesPerView: 2.5,

        }
      }
    }
    let womanSwiper = new Swiper('.bestseller-woman', options)
    let childSwiper = new Swiper('.bestseller-child', options)
    let manSwiper = new Swiper('.bestseller-man', options)
    let homeSwiper = new Swiper('.bestseller-home', options)
    let toySwiper = new Swiper('.bestseller-toy', options)
  }

}

const cards = {
  woman: {
    _id: 'woman',
    title: 'женщинам',
    data: [
      {
        id: 'woman1',
        img: img1,
        title: 'Vittoria Vicci',
        description: 'Наименование товара ',
        banner: 'НОВИНКА',
        bannerPosition: 'bottom',
      },
      {
        id: 'woman2',
        img: img2,
        title: 'Vittoria Vicci',
        description: 'Наименование товара '
      },
      {
        id: 'woman3',
        img: img3,
        title: 'Vittoria Vicci',
        description: 'Наименование товара '
      },
      {
        id: 'woman4',
        img: img4,
        title: 'Vittoria Vicci',
        description: 'Наименование товара ',
        banner: 'НОВИНКА',
        bannerPosition: 'bottom'
      },
      {
        id: 'woman5',
        img: img5,
        title: 'Vittoria Vicci',
        description: 'Наименование товара '
      },
      {
        id: 'woman6',
        img: img6,
        title: 'Vittoria Vicci',
        description: 'Наименование товара '
      },
      {
        id: 'woman7',
        img: img5,
        title: 'Vittoria Vicci',
        description: 'Наименование товара '
      },
      {
        id: 'woman8',
        img: img6,
        title: 'Vittoria Vicci',
        description: 'Наименование товара '
      }
    ],
  },
  child: {
    _id: 'child',
    title: 'детям',
    data: [

    {
      id: 'ch1',
      img: ch1,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00 &#8381;',
      bannerPosition: 'bottom'
    },
    {
      id: 'ch2',
      img: ch2,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00 &#8381; ',
      sale: true
    },
    {
      id: 'ch3',
      img: ch3,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      price: '1 243,00'
    },
    {
      id: 'ch4',
      img: ch4,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'ch5',
      img: ch5,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00',
      bannerPosition: 'bottom'
    },
    {
      id: 'ch6',
      img: ch6,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    }

    ]
  },
  man: {
    _id: 'man',
    title: 'МУЖЧИНАМ',
    data:   [
    {
      id: 'men1',
      img: men1,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'men2',
      img: men2,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'men3',
      img: men3,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00'
    },
    {
      id: 'men4',
      img: men4,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'men5',
      img: men5,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00'
    },
    {
      id: 'men6',
      img: men6,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    }
  ],

  },
  home: {
    _id: 'home',
    title: 'для дома',
    data:   [
    {
      id: 'pil1',
      img: pil1,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00'
    },
    {
      id: 'pil2',
      img: pil2,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'pil3',
      img: pil3,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      price: '1 243,00'
    },
    {
      id: 'pil4',
      img: pil4,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'pil5',
      img: pil5,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'pil6',
      img: pil6,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    }
    ]
  },
  toy: {
    _id: 'toy',
    title: 'игрушки',
    data:   [
      {
      id: 'toy1',
      img: toy1,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00'
    },
    {
      id: 'toy2',
      img: toy2,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'toy3',
      img: toy3,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      price: '1 243,00'
    },
    {
      id: 'toy4',
      img: toy4,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    },
    {
      id: 'toy5',
      img: toy5,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      banner: 'НОВИНКА',
      price: '1 243,00'
    },
    {
      id: 'toy6',
      img: toy6,
      title: 'Vittoria Vicci',
      description: 'Наименование товара ',
      oldPrice: '1 234,00',
      newPrice: '-234,00 &#8381;',
      price: '1 243,00',
      sale: true
    }
    ]
  }

}




