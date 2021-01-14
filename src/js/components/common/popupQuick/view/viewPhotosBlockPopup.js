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
			<div class="swiper-wrapper">
				${photos()}
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
