import {commonCardHeader} from './commonCardHeader'
import {cardBanner} from '../cardBanner'
import {quickViewButton} from '../quickViewButton'
import {priceContent} from './priceContent'
import {infoCard} from './infoCard'
import {additionalInformation} from './additionalInformation'

export function commonCard(elem, infoType) {
	const {data, title, _id} = elem

	return `
	<div class="Common-card">
			<figure class="swiper-container bestseller-${_id}" id="bestseller-${_id}">
					<div class="bestsellers-header-wrapper">
						${commonCardHeader(title)}
						<div class="test-dots"></div>
					</div>
					<div class="swiper-wrapper">
							${data.map(i => {

								const {sale = false, id, img, banner, title, description, oldPrice = '', newPrice = '', price = '', bannerPosition = 'bottom'} = i
								return `
								<div class="swiper-slide">
								
									 <article class="card card-bestsellers-js" id="${id}" data-id="${id}">
											<div class="img-wrapper">
												<div class="img" style="background-image: url(${img});">
													${banner ? cardBanner('новинка', bannerPosition) : ''}
												</div>
												<div class="quick-view"> 
														${quickViewButton(id)}
												</div>
											</div>
									

											${infoType == 'price'
											? priceContent(oldPrice, newPrice, price, sale)
											: infoCard(title, description)}
								
									
											${additionalInformation(title, description, img)}
											
									</article>
								 
								</div>
						`}).join('')}
					</div>
			</figure>
	</div>
 `
}