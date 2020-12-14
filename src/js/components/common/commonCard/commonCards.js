import {commonCardHeader} from './commonCardHeader'
import {card} from './card'

export function commonCard(elem, infoType) {
	const {data, title, _id, link} = elem

	return `
	<div class="Common-card">
			<figure class="swiper-container bestseller-${_id}" id="bestseller-${_id}">
					<div class="bestsellers-header-wrapper">
						${commonCardHeader(title, link)}
						<div class="test-dots"></div>
					</div>
					<div class="swiper-wrapper">
							${data.map(i => {
								return `
								<div class="swiper-slide">
									${card(i, infoType)}
								</div>
						`}).join('')}
					</div>
			</figure>
	</div>
 `
}