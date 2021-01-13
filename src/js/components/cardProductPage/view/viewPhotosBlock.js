import testBig1 from '../../../../images/cardProduct/test-big1.png'
import testBig2 from '../../../../images/cardProduct/test-big2.png'
import testBig3 from '../../../../images/cardProduct/test-big3.png'
import testBig4 from '../../../../images/cardProduct/test-big4.png'
import {r} from "../../common/commonCard/commonCardHeader";
import {buttonProduct} from "../../common/buttonProduct";

export function viewPhotosBlock() {
	return `
	<div class="View-photos-block">
		<section id="view-photos-block-swiper-js" class="swiper-container view-photos-block">
			<div class="swiper-wrapper">
				${photos(dataPhotos)}
			</div>
			
			${buttonPhotos('prev')}
			${buttonPhotos('next')}
			
		</section>
		
		<section id="view-big-photos-block-swiper-js" class="swiper-container view-big-photos-block">
			<article id="zoom-photo-js" class="swiper-wrapper">
				${photosBig(dataPhotos)}
			</article>
						
			${buttonPhotos('prev')}
			${buttonPhotos('next')}

		</section>
		
		<section class="view-big-photos-popup-block">
		
			<div class="paranja"></div>
			
			<div  class='content'>
				<div id="view-big-photos-popup-swiper-js" class="swiper-container wrapper-slider">
					<div class="swiper-wrapper">
					${popupPhoto(dataPhotos)}
					</div>
					<div class="swiper-button-next-main swiper-button button-next"></div>
					<div class="swiper-button-prev-main swiper-button button-prev"></div>
				</div>
				<article id="close-popup-js" class="close-popup"></article>
			</div>
			
			
			
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


function photos(data) {
	return data.map((photo) => {
		return `
			<img src="${photo.original}" class="swiper-slide img-slide">
		`
	}).join('')
}

function photosBig(data) {
	return data.map((photo) => {
		return `
		<div  class="swiper-slide img-slide">
		
			<img src="${photo.original}" class="main-img">
		
			
			<div data-zoom-js class="zoom-img-wrapper">
				<img class="zoom-img-js" src="${photo.original}">
			</div>
		</div>
		`
	}).join('')
}

function popupPhoto(data) {
	return data.map((photo) => {
		return `
				<div class="test swiper-slide">
				 <img src="${photo.original}" class="popup-photo">
				</div>
		`
	}).join('')
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
