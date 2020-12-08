export function additionalInformation(title, description, img, index) {
	const sizes = [
		'40', '42', '46', '48', '50', '52', '23/22', '23/32', '164 - 106 '
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
							<div class="test-block"></div>
				</div>
        
          
				<div class='images'>
						<img src="${img}">
						<img src="${img}">
						<img src="${img}">
						<img src="${img}">
				</div>
      </div>
  </div>
  `
}