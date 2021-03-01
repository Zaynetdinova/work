import {popupPhoto} from '../../common/popupPhoto/popupPhoto'

export class UtilsCardProductPage {

	constructor() {
		this.$body = document.querySelector('body')
		this.$form = document.querySelector('#regulate-form-and-statistics-js')
		this.$transitionTitle = document.querySelector('[data-transition-title-js]')
	}

	infoProductShow(className) {
		const $mainElem = document.querySelector(className)
		$mainElem.classList.toggle('show-info')
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

	openForm(element) {
		if(element.closest('form')) {
			const $el = element.closest('form')
			$el.classList.toggle('open-form')
		}
	}

	popupPhotos() {
		const $popup = new popupPhoto()

		this.$body.insertAdjacentHTML('afterbegin', $popup.toHTML());
		$popup.initialSlider()
		$popup.eventClose()

	}

	// Form
	showForm() {
		this.$form.classList.add('show-form')
		this.$form.classList.remove('gratitude-form')
	}

	cancelForm() {
		this.$form.classList.remove('show-form')

	}

	sendForm() {
		this.$form.classList.add('gratitude-form')
		this.$form.classList.remove('show-form')
	}

	transitionTitleScroll() {
		if(this.$transitionTitle) {
			this.$transitionTitle.scrollLeft = this.$transitionTitle.scrollWidth
		}
	}

	star(quantityStars = 5) {
		if(quantityStars > 5) {
			return
		}
		const maxCount = 5
		const star = document.querySelector('#card-product-page-star-js')
		for(let i = 0; i < quantityStars; i++) {
			star.insertAdjacentHTML('afterbegin', '<span class="active"></span>')
		}

		for(let i = 0; i < maxCount - quantityStars; i++) {
			star.insertAdjacentHTML('beforeend', '<span class="inactive"></span>')
		}
	}
}
