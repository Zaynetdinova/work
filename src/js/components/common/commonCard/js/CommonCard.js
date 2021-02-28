import {commonCardStorage} from '../../../../core/storage/storages'
import Swiper from 'swiper'

export class CommonCard {
	constructor() {
		this.minWidthNotSlider = '1025'
		this.clientWidth = document.documentElement.clientWidth
		this.cards = document.querySelectorAll('[data-common-card-js]')

		this.eventInitial()
		this.size = commonCardStorage.sizeCommonCard()
		this.size.init(this.cards)
		new SliderCommonCard().init()

    this.stateShowInformation = true
	}

	eventInitial() {
		this.enterMouse()
		this.leaveMouse()
		this.windowResize()
	}

	leaveMouse() {
		this.cards.forEach((item) => {
			item.addEventListener('mouseleave', (event) => this.closeCard(event) )
		})
	}

	enterMouse() {
		if(this.clientWidth < this.minWidthNotSlider) {
			return
		} else {
			this.cards.forEach((item) => {
				item.addEventListener('mouseenter', (event) => this.showCard(event))
			})
		}
	}

	showCard(event) {
		let elem = event.target.closest('[data-common-card-js]');
		if(elem) {
			this.viewMaterial(elem.dataset.id)
		}
	}

	closeCard(event) {
		let elem = event.target.closest('[data-common-card-js]');
		const id = elem.dataset.id
		const card = document.querySelector(`#${id}`)

		const parent = card.closest('[data-parent-common-cards-js]')
		card.classList.remove('additional-information-open')
		card.classList.remove('additional-information-open-left')
		parent.classList.remove('Com-super-z-index')
	}

	windowResize() {
		window.addEventListener('resize', () => {
			const clientWidth = document.documentElement.clientWidth
			console.log(clientWidth)
				if(clientWidth < this.minWidthNotSlider) {
					this.stateShowInformation = false
				} else {
			this.stateShowInformation = true
				}
			})
	}

	viewMaterial(id) {
		if(!this.stateShowInformation) {
		return
    	}
		const comWidth = document.documentElement.clientWidth
		const card = document.querySelector(`#${id}`)
		const parent = card.closest('[data-parent-common-cards-js]')
		const cardСoordinate = card.getBoundingClientRect()

		this.changeMainPhoto(card)

		if(comWidth/2 < cardСoordinate.left) {
      	this.onResizeCard(card, true)
			card.classList.add('additional-information-open-left')
			parent.classList.add('Com-super-z-index')

		} else {
      	this.onResizeCard(card)
			card.classList.add('additional-information-open')
			parent.classList.add('Com-super-z-index')
		}
	}

	onResizeCard(card, left) {
    if(card) {
		function resizeCard() {
			const  mainImg = card.querySelector('[data-common-card-main-img-js]')
			const  photos = card.querySelector('[data-photos-block-js]')

			const heightPhotosBlock = mainImg.clientHeight + 160

			photos.style.height = `${heightPhotosBlock}px`

			const blockUnderImage = card.querySelector('[data-block-under-image-js]')
			blockUnderImage.style.width = `${heightPhotosBlock/6}px`

			const rightImages = card.querySelector('[data-images-js]')

			if(left) {
			  blockUnderImage.style.left = `-${heightPhotosBlock/6}px`
			  rightImages.setAttribute('style', `width: ${heightPhotosBlock/6}px; left: -${heightPhotosBlock/6}px`)
			} else {
			  rightImages.setAttribute('style', `width: ${heightPhotosBlock/6}px; right: -${heightPhotosBlock/6}px`)
			}
		}

		resizeCard()

		window.addEventListener('resize', (event) => {
		resizeCard()
		})
    }
  	}

	changeMainPhoto(card) {
		const mainImg = card.querySelector('[data-common-card-main-img-js]')
		card.onmouseover = function (event) {
			if(event.target.closest('[data-common-card-main-secondImg-js]')) {
				mainImg.setAttribute("style", `background-image: ${event.target.style.backgroundImage}`);
			}
		}
	}
}

export class SizeCommonCard {

	init(cards) {
		this.eventInitial(cards)
	}

	eventInitial(cards) {
		cards.forEach((item) => {
			const $activeSize = item.querySelector('#size-active-js')
			$activeSize.addEventListener('click', (event) => this.chooseSizes(event))
		})
	}

	chooseSizes(event) {
		event.preventDefault()
		const $el = event.target
		$el.classList.toggle('active')
	}
}

export class SliderCommonCard {

	constructor() {
		this.cardsOptions = {
			slidesPerView: 1.9,
			spaceBetween: 15,
			centeredSlides: false,
			loop: false,
			slidesOffsetAfter: 15,
			slidesOffsetBefore: 15,

			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},
			breakpoints: {
				2400: {
					slidesPerView: 11,
					spaceBetween: 20,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				2100: {
					slidesPerView: 10,
					spaceBetween: 20,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				1601: {
					slidesPerView: 7,
					spaceBetween: 20,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				1040: {
					slidesPerView: 5,
					spaceBetween: 20,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 20,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				960: {
					slidesPerView: 6,
					centeredSlides: false,
					loop: false,
					spaceBetween: 15,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				700: {
					slidesPerView: 4,
					centeredSlides: false,
					loop: false,
					slidesOffsetAfter: 0,
					slidesOffsetBefore: 0,
				},
				411: {
					slidesOffsetAfter: 15,
					slidesPerView: 2.5,
				},
				374: {
					slidesPerView: 2.27,
					slidesOffsetAfter: 15,
				}
			}
		}

		this.cardsPhotoOptions = {
			slidesPerView: 4,
			direction: 'vertical',
			observer: true,
			observeParents: true,
			spaceBetween: 5,
			navigation: {
				nextEl: '.swiper-button-next-main-au',
				prevEl: '.swiper-button-prev-main-au',
			},
		}
	}

	init() {
		new Swiper('.photos-block-common-block-js', this.cardsPhotoOptions)
		new Swiper('.bestseller-catalog', this.cardsOptions)
	}
}
