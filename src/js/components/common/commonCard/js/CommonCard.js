import {commonCardStorage} from '../../../../core/storage/storages'

export class CommonCard {
	constructor() {
		this.minWidthNotSlider = '1025'
		this.clientWidth = document.documentElement.clientWidth
		this.cards = document.querySelectorAll('[data-common-card-js]')

		this.eventInitial()
		this.size = commonCardStorage.sizeCommonCard()
		this.size.init(this.cards)


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
				console.log('clientWidth')
				this.cards.forEach((item) => {
					item.removeEventListener('mouseenter', () => this.showCard())
				})
				return
			} else {
				console.log('none')
				this.cards.forEach((item) => {
					item.addEventListener('mouseenter', (event) => this.showCard(event))
				})
			}
		})
	}

	viewMaterial(id) {
		const comWidth = document.documentElement.clientWidth
		const card = document.querySelector(`#${id}`)
		const parent = card.closest('[data-parent-common-cards-js]')
		const cardСoordinate = card.getBoundingClientRect()

		this.changeMainPhoto(card)

		if(comWidth/2 < cardСoordinate.left) {
			card.classList.add('additional-information-open-left')
			parent.classList.add('Com-super-z-index')
		} else {
			card.classList.add('additional-information-open')
			parent.classList.add('Com-super-z-index')
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

export class ChangePhotoCommonCard {

}
