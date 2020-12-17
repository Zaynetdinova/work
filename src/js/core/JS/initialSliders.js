import Swiper from 'swiper/bundle'

export function initialSliders() {
	mainPageInitialSlider()
	initialSliderWomanPage()
	initialSliderChildrenPage()
	initialSliderCatalog()
}

function mainPageInitialSlider() {
	(function bestsellers() {
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
		let womanSwiper = new Swiper('.bestseller-woman', options)
		let childSwiper = new Swiper('.bestseller-child', options)
		let manSwiper = new Swiper('.bestseller-man', options)
		let homeSwiper = new Swiper('.bestseller-home', options)
		let toySwiper = new Swiper('.bestseller-toy', options)
	}())
}


function initialSliderWomanPage() {
	const options = {
		slidesPerView: 1.9,
		spaceBetween: 15,
		centeredSlides: false,
		loop: false,
		slidesOffsetAfter: 16,

		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
		breakpoints: {

			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
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

	let womanSwiper = new Swiper('.bestseller-goods', options)
	let womenSwiper2 = new Swiper('.bestseller-goods22', options)
	let bannerBlock = new Swiper('.swiper-container4', {
		slidesPerView: 1.9,
		slidesPerGroup: 1,
		centeredSlides: true,
		loop: true,
		initialSlide: 1,

		breakpoints: {
			321: {
				slidesPerView: 2.5,
			},
			415: {
				slidesPerView: 3,
			}
		}
	})
}

function initialSliderChildrenPage() {
	const options = {
		slidesPerView: 1.9,
		spaceBetween: 15,
		centeredSlides: false,
		loop: false,
		slidesOffsetAfter: 16,

		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
		breakpoints: {

			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
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

	let childrenSwiper = new Swiper('.bestseller-children', options)
}

function initialSliderCatalog() {
	(function test() {
		const options = {
			slidesPerView: 5,
			spaceBetween: 15,
			slidesOffsetAfter: 16,

			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next-main',
				prevEl: '.swiper-button-prev-main',
			},

		}
		new Swiper('.bestseller-catalog', options)
	}())
}