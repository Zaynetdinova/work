import {popupQuick} from '../../components/common/popupQuick/popupQuick'
import Swiper from 'swiper'


export function quickView() {

	const $buttons = document.querySelectorAll('.quick-view-js')



	$buttons.forEach((button) => {
		button.addEventListener('click', openQuickView)
	})

}

// problem
function openQuickView(e) {
	e.preventDefault()


	const $body = document.querySelector('body')


	$body.insertAdjacentHTML('afterbegin', popupQuick());

	const test = document.querySelector('#Popup-quick-js')
	const close = document.querySelector('#close-popup')
	const $paranja = document.querySelector('#paranja-click-js')

	close.addEventListener('click', () => {
		test.remove()
	})
	$paranja.addEventListener('click', () => {
		test.remove()
	})

	const $el = document.querySelector('#popup-js')
	$el.setAttribute("style", `top: ${window.pageYOffset}px`);



	function initial() {
		new Swiper('#another-color-popup-js', {
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 5,
		})

		new Swiper('#view-photos-block-swiper-popup-js', {
			slidesPerView: 4,
			direction: 'vertical',
			observer: true,
			observeParents: true,
			spaceBetween: 5,
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},
		})

		new Swiper('#view-big-photos-block-swiper-popup-js', {
			slidesPerView: 1,
			direction: 'vertical',
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},
		})

	}

	initial()
}