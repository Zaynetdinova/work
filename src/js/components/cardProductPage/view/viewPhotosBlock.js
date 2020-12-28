import testBig1 from '../../../../images/cardProduct/test-big1.png'
import testBig2 from '../../../../images/cardProduct/test-big2.png'
import testBig3 from '../../../../images/cardProduct/test-big3.png'
import testBig4 from '../../../../images/cardProduct/test-big4.png'
import {r} from "../../common/commonCard/commonCardHeader";
import {buttonProduct} from "./buttonProduct";

export function viewPhotosBlock() {
	return `
	<div class="View-photos-block">
		<section id="view-photos-block-swiper-js" class="swiper-container view-photos-block">
			<div class="swiper-wrapper">
				${photos()}
			</div>
			
			${buttonPhotos('prev')}
			${buttonPhotos('next')}
			
		</section>
		
		<section id="view-big-photos-block-swiper-js" class="swiper-container view-big-photos-block">
			<div class="swiper-wrapper">
				${photos()}
			</div>
						
			${buttonPhotos('prev')}
			${buttonPhotos('next')}
		</section>
	</div>
	`
}

export function viewPhotosBlockMobile() {
	return `
		<div class="View-photos-block-mobile swiper-container test-mobile">
			<div class="swiper-wrapper">
				${photosMobile()}
			</div>
			<div class="slider-pointer">${r()}</div>
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
	<img src="${testBig1}" class="swiper-slide">
	<img src="${testBig2}" class="swiper-slide">
	<img src="${testBig3}" class="swiper-slide">
	<img src="${testBig4}" class="swiper-slide">
	<img src="${testBig1}" class="swiper-slide">
	`
}

function photosMobile() {
	return `
	<img src="${testBig1}" class="swiper-slide"> <div class="photosMobile-mobile">${buttonProduct('Новинка')}</div>
	<img src="${testBig2}" class="swiper-slide">
	<img src="${testBig3}" class="swiper-slide">
	<img src="${testBig4}" class="swiper-slide">
	<img src="${testBig1}" class="swiper-slide">
	`
}
