import {cardBanner} from '../cardBanner'
import {quickViewButton} from '../quickViewButton'
import {priceContent} from '../priceContent'
import {infoCard} from './view/infoCard'
import {additionalInformation} from './view/additionalInformation'

export function card(i, infoType = 'price') {
	const {
		sale = false,
		id, img,
		banner,
		title,
		description,
		oldPrice = '',
		newPrice = '',
		price = '',
		bannerPosition = 'bottom',
		link='/#card-product',
		size = []} = i
	return `
		<a href="${link}" style="text-decoration: none">
			<article class="Card card-bestsellers-js" id="${id}" data-id="${id}">
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
				${additionalInformation(title, description, img, id, size)}
			</article>
		</a>
	`
}