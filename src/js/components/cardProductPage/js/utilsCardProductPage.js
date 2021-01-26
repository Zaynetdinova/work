import {popupPhoto} from '../../common/popupPhoto/popupPhoto'

export class UtilsCardProductPage {

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
		const $body = document.querySelector('body')

		const $popup = new popupPhoto()

		$body.insertAdjacentHTML('afterbegin', $popup.toHTML());
		$popup.initialSlider()
		$popup.eventClose()

	}

	viewPhotoZoom() {
		const $zoomContent = document.querySelector('#zoom-photo-js')

		$zoomContent.addEventListener('mousemove', moveZoom)

		function moveZoom(event) {
			const imgWrapper = event.target.closest('[data-zoom-js]')
			const $img = imgWrapper.querySelector('.zoom-img-js')
			const bounds = imgWrapper.getBoundingClientRect();
			const x = event.clientX - bounds.left;
			const y = event.clientY - bounds.top;
			$img.setAttribute("style", `top: -${y}px; left: -${x}px;`);
		}


	}
}