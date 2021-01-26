import Swiper from 'swiper/bundle'

export function initialSliders() {
	initialSliderChildrenPage()
	initialSliderCatalog()
	cardProductPage()

	new Swiper('.photos-block-common-block-js', {
		slidesPerView: 4,
		direction: 'vertical',
		observer: true,
		observeParents: true,
		spaceBetween: 5,
		navigation: {
			nextEl: '.swiper-button-next-main-au',
			prevEl: '.swiper-button-prev-main-au',
		},
		on: {
			click: function (e) {
			}
		}
	})

	new Swiper('.test-Ilmira', {
		slidesPerView: 5,
		spaceBetween: 10,
		slidesOffsetAfter: 0,
		breakpoints: {
			600: {
				slidesPerView: 6,
				slidesOffsetAfter: 0,
			},
			485: {
				slidesOffsetAfter: 0,
			},
			411: {
				slidesPerView: 4.5,
				spaceBetween: 10,
				slidesOffsetAfter: 10,
			},
			350: {
				slidesPerView: 3.9,
				spaceBetween: 10,
				slidesOffsetAfter: 15,
			},
			320: {
				slidesPerView: 3.5,
				spaceBetween: 10,
				slidesOffsetAfter: 15
			}
		}
	})

	new Swiper('.test-mobile', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 15,
		slidesOffsetAfter: 0,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
		breakpoints: {
			415: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 15,
				slidesOffsetAfter: 0,
			},
			376: {
				slidesPerView: 1.36,
				slidesPerGroup: 1,
				spaceBetween: 15,
				slidesOffsetAfter: 15,
			},
			321: {
				slidesPerView: 1.18,
				slidesPerGroup: 1,
				spaceBetween: 15,
				slidesOffsetAfter: 15,
			}
		}
	})

	new Swiper('.another-photo-mobile',{
		slidesPerView: 6,
		slidesPerGroup: 1,
		spaceBetween: 5,
		slidesOffsetAfter: 0,
		breakpoints: {
			768: {
				slidesPerView: 6,
				slidesPerGroup: 1,
				spaceBetween: 5,
				slidesOffsetAfter: 0,
			},
			525: {
				slidesPerView: 7,
				slidesPerGroup: 1,
				spaceBetween: 5,
				slidesOffsetAfter: 0,
			},
			500: {
				slidesPerView: 6,
				slidesPerGroup: 1,
				spaceBetween: 5,
				slidesOffsetAfter: 0,
			},
			375: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				spaceBetween: 5,
				slidesOffsetAfter: 0,
			},
			320: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 5,
				slidesOffsetAfter: 0,
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
	let childrenSwiper2 = new Swiper('.bestseller-children2', options)

}

function initialSliderCatalog() {
	(function test() {
		const options = {
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
		new Swiper('.bestseller-catalog', options)

	}())
}

function cardProductPage() {
	const options = {
		slidesPerView: 4,
		direction: 'vertical',
		spaceBetween: 5,
		on: {
			slideChange: function () {
				// console.log(this.slides)
			},
			click: function (e){
				if(this.clickedSlide.dataset.swiperSlideIndex) {
					const test = this.clickedSlide.dataset.swiperSlideIndex
					// починить
					const a = +test + 4
					console.log(a)
					topSlider.slideTo(a)
				}
			},
		},

		loop: true,
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
		cssMode: true,
	}
	const test = new Swiper('#view-photos-block-swiper-js', options)
	const test2 = new Swiper('#view-photos-block-swiper-js-2', options)

	const topSlider = new Swiper('#view-big-photos-block-swiper-js', {
		slidesPerView: 4,
		direction: 'vertical',
		loop: true,
		spaceBetween: 5,
		on: {
			slideChange: function () {
				console.log(this.activeIndex)
			}
		},
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
	})
	const topSlider2 = new Swiper('#view-big-photos-block-swiper-js-2', {
		slidesPerView: 1,
		direction: 'vertical',
		loop: true,
		on: {
			slideChange: function () {
				console.log(this.activeIndex)
			}
		},
		navigation: {
			nextEl: '.swiper-button-next-main',
			prevEl: '.swiper-button-prev-main',
		},
	})
}



