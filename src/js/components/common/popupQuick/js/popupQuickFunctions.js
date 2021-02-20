import {popupQuick} from '../popupQuick'
import Swiper from 'swiper'
import {ChangeSizeCount} from '../../js/changeSizeCount'
import {ChangeFavoritesProduct} from '../../../../core/utils/utils'

export class PopupQuick {
	constructor() {
		this.$body = document.querySelector('body')
		this.$buttons = document.querySelectorAll('.quick-view-js')
		this.size = new ChangeSizeCount()
		this.$popup = null
		this.close = null
		this.$paranja = null
		this.$closeButton = null
		this.$colorCard = null
		this.$countSize = null
		this.$like = null
		this.$rootPopup = null
		this.sliders = new PopupInitialSliders()
	}

	init() {
		this.$buttons.forEach((button) => {
			button.addEventListener('click', (event) => this.openQuickView(event))
		})
	}


	openQuickView(event) {
		event.preventDefault()
		console.log(event.target)
		this.$body.insertAdjacentHTML('afterbegin', popupQuick());
		this.findAllElementsPopup()
		this.initialEvent()
		this.positionPopup()
		this.sliders.init()
		new ChangeFavoritesProduct().init()
	}

	findAllElementsPopup() {
		this.$popup = document.querySelector('#Popup-quick-js')
		this.$rootPopup = this.$popup.querySelector('#popup-js')
		this.close = this.$popup.querySelector('#close-popup')
		this.$paranja = this.$popup.querySelector('#paranja-click-js')
		this.$closeButton = this.$popup.querySelector('#close-popup-quick-button-js')
		this.$colorCard = this.$popup.querySelector('#popup-another-color-js-test')
		this.$countSize = this.$popup.querySelector('#info-table')
		this.$like = this.$popup.querySelector('#favorites-product-js')
	}

	initialEvent() {
		this.close.addEventListener('click', () => this.closePopupQuick())
		this.$paranja.addEventListener('click',() =>  this.closePopupQuick())
		this.$closeButton.addEventListener('click',() => this.closePopupQuick())
		this.$colorCard.addEventListener('click', (event) => this.anotherColorButton(event))
		this.$countSize.addEventListener('click', (event) => this.size.init(event))
	}

	positionPopup() {
		const scroll = document.documentElement.scrollHeight
		const popupHeight = this.$rootPopup.clientHeight
		const viewWindow = window.pageYOffset + popupHeight

		if (scroll < viewWindow) {
			const number = scroll - popupHeight
			this.$rootPopup.setAttribute("style", `top: ${number}px`);
			window.scrollTo({top: number})
			return
		}

		this.$rootPopup.setAttribute("style", `top: ${window.pageYOffset}px`);
	}

	closePopupQuick() {
		this.$popup.remove()
	}

	anotherColorButton(e) {
		if(e.target.dataset.color) {
			document.querySelectorAll('.color-card-product-js').forEach((item) => {
				item.classList.remove('active-color')
			})
			const $el = e.target
			$el.classList.add('active-color')
		}
	}

}

class PopupInitialSliders {
	constructor() {
		this.colorOptions = {
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 5,
		}

		this.verticalPhotoOptions = {
			slidesPerView: 4,
			direction: 'vertical',
			observer: true,
			observeParents: true,
			spaceBetween: 5,
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},
		}

		this.verticalBigPhotoOptions = {
			slidesPerView: 1,
			direction: 'vertical',
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},
		}
	}

	init() {
		new Swiper('#another-color-popup-js', this.colorOptions)
		new Swiper('#view-photos-block-swiper-popup-js', this.verticalPhotoOptions)
		new Swiper('#view-big-photos-block-swiper-popup-js', this.verticalBigPhotoOptions)
	}
}


