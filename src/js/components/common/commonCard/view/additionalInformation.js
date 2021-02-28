import {size} from '../../size'

export function additionalInformation(title, description, img, index, sizeElements, secondaryImg) {
	return `
		<div class="additional-information">
			<div class="content">
				<div class="text-size-wrapper">
				${index == 0
					? ''
					: `	<div class="text" style="padding-bottom: 10px">
							<div class="title">${title}</div> 
							<div class="description">${description}</div>
						</div>`}
				
				<div class="size-wrapper">
				    ${size(sizeElements)}
        		</div>
					<div data-block-under-image-js class="block-under-image"></div>
				</div>
			
				<div data-images-js class='images'>
					<div data-photos-block-js class="swiper-container photos-block-common-block photos-block-common-block-js">
						<div class="swiper-wrapper">
							${secondaryImg.map((img) => {
								return `
									<div 
										data-common-card-main-secondImg-js 
										style="background-image: url(${img});" 
										class="swiper-slide image">
									</div>
								`
							}).join('')}
						</div>
						
						${secondaryImg.length <= 4 
							? ''
							: `
								${buttonPhotos('prev')}
								${buttonPhotos('next')}
							`}
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
