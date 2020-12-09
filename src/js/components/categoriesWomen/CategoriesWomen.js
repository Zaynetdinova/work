import {Component} from '../../core/Component'

import Swiper from 'swiper/bundle'
import img1 from '../../../images/bestsellers/1/img1.png'
import img2 from '../../../images/bestsellers/1/img2.png'
import img3 from '../../../images/bestsellers/1/img3.png'
import img4 from '../../../images/bestsellers/1/img4.png'
import img5 from '../../../images/bestsellers/1/img5.png'
import img6 from '../../../images/bestsellers/1/img6.png'
import {categoriesWomen} from './categoriesWomen.template'

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
				1921: {
					slidesPerView: 8,
					spaceBetween: 20,
				},
				1920: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				1025: {
					slidesPerView: 5,
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

		let womanSwiper = new Swiper('.bestseller-goods', options)
	}

	toHTML() {
		return categoriesWomen(woman)
	}
}



let woman =  {
	_id: 'goods',
	title: 'Категория',
	data: [
		{
			id: 'woman1',
			img: img1,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			banner: 'НОВИНКА',
			bannerPosition: 'bottom',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman2',
			img: img2,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman3',
			img: img3,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman4',
			img: img4,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman5',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman6',
			img: img6,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman7',
			img: img5,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},
		{
			id: 'woman8',
			img: img1,
			title: 'Vittoria Vicci',
			description: 'Наименование товара ',
			banner: 'НОВИНКА',
			bannerPosition: 'bottom',
			oldPrice: '1 234,00 &#8381',
			newPrice: '-234,00 &#8381;',
			price: '1 243,00 &#8381; ',
		},

	],
}