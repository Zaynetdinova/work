import {commonCardHeader} from './view/commonCardHeader'
import {card} from './card'

export function commonCard(elem, infoType) {
	const {data, title, _id, link} = elem
	return `
	<div class="Common-card">
			<figure data-parent-common-cards-js 
			        data-common-card-slider-${_id}
						class="swiper-container ${_id}" >
					<div class="bestsellers-header-wrapper">
						${commonCardHeader(title, link)}
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
