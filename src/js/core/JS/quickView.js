import {popupQuick} from '../../components/common/popupQuick/popupQuick'
import Swiper from 'swiper'
import {infoTable} from '../../components/cardProductPage/js/infoTable'
import {favoritesProduct} from '../../components/cardProductPage/js/favoritesProduct'
import {changeSizeCount} from '../../components/common/js/changeSizeCount'
import {changeFavoritesProduct} from '../../components/common/js/changeFavoritesProduct'


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

	const $popup = document.querySelector('#Popup-quick-js')
	const close = $popup.querySelector('#close-popup')
	const $paranja = $popup.querySelector('#paranja-click-js')
	const $closeButton = $popup.querySelector('#close-popup-quick-button-js')
	const $colorCard = document.querySelector('#popup-another-color-js-test')
	const $countSize = document.querySelector('#info-table')
	const $like = $popup.querySelector('#favorites-product-js')


	// problem удаление прослушки событий
	close.addEventListener('click', closePopupQuick)
	$paranja.addEventListener('click', closePopupQuick)
	$closeButton.addEventListener('click', closePopupQuick)
	$colorCard.addEventListener('click', anotherColorButton)
	$countSize.addEventListener('click', changeSizeCount)
	$like.addEventListener('click', () => changeFavoritesProduct($like))

	positionPopup()

	initialSlider()






	function anotherColorButton(e) {
		if(e.target.dataset.color) {
			document.querySelectorAll('.color-card-product-js').forEach((item) => {
				item.classList.remove('active-color')
			})
			const $el = e.target
			$el.classList.add('active-color')
		}
	}

	function closePopupQuick() {
		$popup.remove()
	}

	function positionPopup() {
		$popup.setAttribute("style", `top: ${window.pageYOffset}px`);
	}

	function initialSlider() {
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

}