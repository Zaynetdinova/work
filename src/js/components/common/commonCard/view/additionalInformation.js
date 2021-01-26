import {size} from '../../size'

export function additionalInformation(title, description, img, index, sizeElements) {
	return `
  <div class="additional-information">
     <div class="content">
				 <div class="text-size-wrapper">
						${index == 0
							? ''
							: `<div class="text" style="padding-bottom: 10px">
														<div class="title">${title}</div> 
														<div class="description">${description}</div>
												</div>`}
					 
					 
							${size(sizeElements)}
							<div class="block-under-image"></div>
				</div>
        
          
				<div class='images'>
						<div class="swiper-container photos-block-common-block photos-block-common-block-js">
							<div class="swiper-wrapper">
								<img src="${img}" class="swiper-slide">
								<img src="${img}" class="swiper-slide">
								<img src="${img}" class="swiper-slide">
								<img src="${img}" class="swiper-slide">
								<img src="${img}" class="swiper-slide">
								<img src="${img}" class="swiper-slide">
							</div>
							
								${buttonPhotos('prev')}
								${buttonPhotos('next')}
						</div>
				</div>
      </div>
  </div>
  `
}

function buttonPhotos(type) {
	return `
		<span class="swiper-button-${type}-main-au button button-${type}">
				<div class="arrow"></div>
		</span>
	`
}