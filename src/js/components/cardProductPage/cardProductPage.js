import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import {inputFile} from '../catalog/js/inputFile'
import {anotherColorButton} from './js/anotherColorBorder'
import {infoProductShow, testInfo} from './js/infoProductShow'
import {favoritesProduct} from './js/favoritesProduct'
import {openForm} from './js/openForm'
import {viewPhotoZoom} from './js/viewPhotoZoom'
import {showForm} from './js/showForm'
import {popupSliderPhoto} from './js/popupSliderPhoto'
import {changeSizeCount} from '../common/js/changeSizeCount'
import {changeFavoritesProduct} from '../common/js/changeFavoritesProduct'
import Swiper from 'swiper'

export class CardProductPage extends Component {
	static className = 'Card-product-page'

	constructor($root) {
		super($root, {
			name: 'CardProductPage',
			listeners: ['click']
		});
	}

	toHTML() {
		return cardProductPageTemplate()
	}

	slider() {
		const options = {
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

		new Swiper('.bestseller-product',options)
		new Swiper('.bestseller-product2',options)
	}

	afterInitComponent() {
		viewPhotoZoom()
		inputFile()
	}

	//переделать
	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'info-table':
					changeSizeCount(e)
					break;
				case 'another-color-js':
					anotherColorButton(e)
					break;
				case 'title-description-js':
					infoProductShow(element, e)
					break;
				case 'title-dop-info-js':
					testInfo(element, e)
					break;
				case 'favorites-product-js':
					changeFavoritesProduct(element)
					break;
				case 'form-js':
					openForm(element)
					break
				case 'show-form-js':
					showForm()
					break
				case 'cancel-form-js':
					showForm('cancel')
					break
				case 'send-form-js':
					showForm('send')
					break
				case 'zoom-photo-js':
					popupSliderPhoto()
					break
        case 'zoom-photo-js-mobile':
          popupSliderPhoto()
          break
				case 'close-popup-js':
					popupSliderPhoto('close')
					break
			}
		}
	}
}
