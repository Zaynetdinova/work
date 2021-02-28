import testBig1 from '../../../../../images/cardProduct/test-big1.png'
import testBig2 from '../../../../../images/cardProduct/test-big2.png'
import testBig3 from '../../../../../images/cardProduct/test-big3.png'
import testBig4 from '../../../../../images/cardProduct/test-big4.png'

export function viewPhotosBlockPopup() {
    return `
	<div class="View-photos-block-popup">
		<section id="view-photos-block-swiper-popup-js" class="swiper-container view-photos-block">
			<div class="swiper-wrapper">
				${photos()}
			</div>
			
			${buttonPhotos('prev')}
			${buttonPhotos('next')}
			
		</section>
		
		<section id="view-big-photos-block-swiper-popup-js" class="swiper-container view-big-photos-block">
			<div id="zoom-photo-js" class="swiper-wrapper">
				${photosBig(dataPhotos)}
			</div>
						
			${buttonPhotos('prev')}
			${buttonPhotos('next')}
		</section>
	</div>
	`
}



function buttonPhotos(type) {
    return `
		<span class="swiper-button-${type}-main button button-${type}">
			<div class="arrow"></div>
		</span>
	`
}


function photos() {
    return `
	<img src="${testBig1}" class="swiper-slide img-slide">
	<img src="${testBig2}" class="swiper-slide img-slide">
	<img src="${testBig3}" class="swiper-slide img-slide">
	<img src="${testBig4}" class="swiper-slide img-slide">
	<img src="${testBig1}" class="swiper-slide img-slide">
	`
}

function photosBig(data) {
  return data.map((photo) => {
    return `
		<div data-test-img-slide  class="swiper-slide img-slide">
		
			<img  src="${photo.original}" class="main-img">
		
			
			<div data-zoom-js class="zoom-img-wrapper">
				<img class="zoom-img-js" src="${photo.original}">
			</div>
		</div>
		`
  }).join('')
}

const dataPhotos = [
  {
    original: testBig1,
    compressedImg: testBig1,
  },
  {
    original: testBig2,
    compressedImg: testBig2,
  },
  {
    original: testBig3,
    compressedImg: testBig3,
  },
  {
    original: testBig4,
    compressedImg: testBig4,
  },
  {
    original: testBig1,
    compressedImg: testBig1,
  }
]
