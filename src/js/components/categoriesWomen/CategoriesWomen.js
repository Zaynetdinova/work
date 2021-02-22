import {Component} from '../../core/Component'
import Swiper from 'swiper/bundle'

import {categoriesWomen} from './categoriesWomen.template'

import img1 from '../../../images/categories/woman/img1.svg'
import img2 from '../../../images/categories/woman/img2.svg'
import img3 from '../../../images/categories/woman/img3.svg'
import img4 from '../../../images/categories/woman/img4.svg'
import img5 from '../../../images/categories/woman/img5.svg'
import img6 from '../../../images/categories/woman/img6.svg'
import img7 from '../../../images/categories/woman/img7.svg'
import img8 from '../../../images/categories/woman/img8.svg'
import img9 from '../../../images/categories/woman/img9.svg'
import img10 from '../../../images/categories/woman/img10.svg'
import img11 from '../../../images/categories/woman/img11.svg'
import img12 from '../../../images/categories/woman/img12.svg'
import img13 from '../../../images/categories/woman/img13.svg'
import img14 from '../../../images/categories/woman/img14.svg'
import img15 from '../../../images/categories/woman/img15.svg'
import img16 from '../../../images/categories/woman/img16.svg'
import img17 from '../../../images/categories/woman/img17.svg'

import {testDataCategoriesWomen} from '../../../testData/testDataCategoriesWomen'


export class CategoriesWomen extends Component {

	static className = 'CategoriesWomen'

	constructor($root) {
		super($root, {
			name: 'CategoriesWomen',
			listeners: []
		});
	}

	slider() {
		const options = {
			slidesPerView: 1.9,
			spaceBetween: 15,
			centeredSlides: false,
			loop: false,
			slidesOffsetAfter: 16,

			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},
			breakpoints: {

				1200: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 20,
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
    const partnerOptions = {
      slidesPerView: 1.9,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
      initialSlide: 1,

      breakpoints: {
        321: {
          slidesPerView: 2.5,
        },
        415: {
          slidesPerView: 3,
        }
      }
    }


		new Swiper('[data-common-card-slider-goods]', options)
    new Swiper('[data-slider-partner-js]',  partnerOptions)
	}

	toHTML() {
		return categoriesWomen(testDataCategoriesWomen, item, pageForWomen)
	}
}

let pageForWomen = [
	{
		link: '/#categories',
		title: 'Женщинам',
		value: '1000 товаров'
	}
]

let item = [
	{
		img: img1,
		title: 'Платья',
		link: '/#catalog',
	},
	{
		img: img2,
		title: 'Трикотаж',
		link: '/#catalog',
	},
	{
		img: img3,
		title: 'ВЕРХА',
		link: '/#catalog',
	},
	{
		img: img4,
		title: 'НИЗЫ',
		link: '/#catalog',
	},
	{
		img: img5,
		title: 'ЮБКИ',
		link: '/#catalog',
	},
	{
		img: img6,
		title: 'ВЕРХНЯЯ ОДЕЖДА',
		link: '/#catalog',
	},
	{
		img: img7,
		title: 'костюмы',
		link: '/#catalog',
	},
	{
		img: img8,
		title: 'для дома',
		link: '/#catalog',
	},
	{
		img: img9,
		title: 'спорт',
		link: '/#catalog',
	},
	{
		img: img10,
		title: 'Нижнее белье',
		link: '/#catalog',
	},
	{
		img: img11,
		title: 'купальники',
		link: '/#catalog',
	},
	{
		img: img12,
		title: 'КОЛГОТКИ И НоСКИ',
		link: '/#catalog',
	},
	{
		img: img13,
		title: 'аксессуары',
		link: '/#catalog',
	},
	{
		img: img14,
		title: 'большие размеры',
		link: '/#catalog',
	},
	{
		img: img15,
		title: 'новинки',
		link: '/#catalog',
	},
	{
		img: img16,
		title: 'скидки',
		link: '/#catalog',
	},
	{
		img: img17,
		title: 'акции',
		link: '/#catalog',
	}
]


