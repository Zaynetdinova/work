export function additionalInformation(title, description, img, index) {
	const sizes = [
		'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106'
	]
	const block = sizes.map(item => {
		return `
      <div class="size">
        ${item}
      </div>
    `
	})

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
					 
					 
							<div class="Size">
									${block.join('')}
							</div>
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


// '40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '