import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import Swiper from 'swiper'
import {ChangeSizeCount} from '../common/js/changeSizeCount'
import {UtilsCardProductPage} from './js/utilsCardProductPage'
import {inputFile} from './js/inputFile'
import {TestDataCardProductPage} from './js/testDataCardProductPage'

export class CardProductPage extends Component {
	static className = 'Card-product-page'

	constructor($root) {
		super($root, {
			name: 'CardProductPage',
			listeners: ['click']
		});
		this.utils
		this.testData = new TestDataCardProductPage()
	}

	toHTML() {
		return cardProductPageTemplate(
			this.testData.cards(),
			this.testData.cards2(),
			this.testData.color(),
			this.testData.info())
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
		this.utils = new UtilsCardProductPage()
		this.utils.viewPhotoZoom()
		inputFile()
	}

	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'info-table':
					const size = new ChangeSizeCount()
					size.init(e, true)
					break;
				case 'another-color-js':
					this.utils.anotherColorButton(e)
					break;
				case 'title-description-js':
					this.utils.infoProductShow('.description-module-js')
					break;
				case 'title-dop-info-js':
					this.utils.infoProductShow('.dop-info-js')
					break;
				case 'favorites-product-js':
					this.utils.changeFavoritesProduct(element)
					break;
				case 'form-js':
					this.utils.openForm(element)
					break;
				case 'show-form-js':
					this.utils.showForm()
					break;
				case 'cancel-form-js':
					this.utils.cancelForm()
					break;
				case 'send-form-js':
					this.utils.sendForm()
					break;
				case 'zoom-photo-js':
					this.utils.popupPhotos()
					break;
        case 'zoom-photo-js-mobile':
					this.utils.popupPhotos()
          break;
			}
		}
	}
}
