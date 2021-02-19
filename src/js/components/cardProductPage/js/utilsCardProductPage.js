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

	changeFavoritesProduct(element) {
		element.classList.toggle('favorite-product-active')
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


	viewPhotoZoom() {
		const $zoomContent = document.querySelector('#zoom-photo-js')

		$zoomContent.addEventListener('mousemove', moveZoom)

		function moveZoom(event) {
			const imgWrapper = event.target.closest('[data-zoom-js]')
			const $img = imgWrapper.querySelector('.zoom-img-js')
			const bounds = imgWrapper.getBoundingClientRect();
			const x = event.clientX - bounds.left;
			const y = event.clientY - bounds.top

			const topSize = defineSize($img.clientHeight, bounds.height, y)
			const leftSize = defineSize($img.clientWidth, bounds.width, x)

			$img.setAttribute("style", `top: -${topSize}px; left: -${leftSize}px; height: ${imgWrapper.clientHeight * 2}px;`);
		}

		function defineSize(img, wrapper, type) {
			const difference = img - wrapper
			const size = type * 100 / wrapper
			return  size * difference / 100
		}
	}
}