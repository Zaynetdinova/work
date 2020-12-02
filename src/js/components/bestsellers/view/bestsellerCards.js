import {bestsellersHeader} from '../../common/bestsellersHeader'
import {cardBanner} from '../../common/cardBanner'
import {quickViewButton} from '../../common/quickViewButton'
import {priceContent} from './priceContent'
import {infoCard} from './infoCard'
import {additionalInformation} from './additionalInformation'

export function bestsellersCards(elem, infoType) {
	const {data, title, _id} = elem
	return `
         <div class="card-wrapper">
        
            
            
                  <div class="swiper-container bestseller-${_id}">
                  <div class="bestsellers-header-wrapper">
                 ${bestsellersHeader(title)}
            </div>
                    <div class="swiper-wrapper">
                        ${data.map(i => {

		const {sale = false, id, img, banner, title, description, oldPrice = '', newPrice = '', price = '', bannerPosition = ''} = i
		return `
                          <div class="swiper-slide">
                            <article class="card card-bestsellers-js" id="${id}" data-id="${id}">
                                <div class="img" style="background-image: url(${img});">
                                     ${banner ? cardBanner('новинка', bannerPosition) : ''}
                                <div>
                                </div>
                                  <div class="quick-view"> 
                                      ${quickViewButton(id)}
                                  </div>
                                </div>
                            
     
                                  ${infoType === 'price'
                                    ? priceContent(oldPrice, newPrice, price, sale)
                                    : infoCard(title, description)}
                          
                            
                                ${additionalInformation(title, description, img)}
                            </article>
                          </div>
                      `}).join('')}
                    </div>
                  </div>
                </div>
    `
}
