import Swiper from 'swiper'

export function initialSlider() {
	new Swiper('#view-big-photos-popup-swiper-js', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
	})
}