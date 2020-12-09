import {commonCard} from '../common/commonCard/commonCards'
import {categoriesMenuSidebar} from '../common/categoriesMenuSidebar'

import video from '../../../video/1.mp4'
import {partnerOffers} from '../common/partnerOffers'
import {transitionTitle} from '../common/transitionTitle'
import {IconImg} from "../common/commonCard/icon";




export function categoriesWomen(woman) {
	return `
		<div class="wrapper-categoriesWomen">	
			${transitionTitle(pageForWomen)}
			<div class="flex-wrap">	
				<div class="sidebar-page-categoriesWomen">
					${categoriesMenuSidebar()}
				</div>
				<div class="content-page-categoriesWomen">
					<div class="banner-video">
						<video class="video" autoplay muted loop src=${video} </video>
					</div>
					<div class="wrap-IconImg">${IconImg()}</div>
					<div class="wrap-card-women">
						${commonCard(woman, 'price')}
					</div>
					<div class="wrap-partnerOffers">
						${partnerOffers()}
					</div>
					<div class="wrap-card-women-2">
						${commonCard(woman)}
					</div>	
    			</div>
  			</div>
  		</div>
	`
}



let pageForWomen = [
	{
		link: '/#categories',
		title: 'Женщинам',
		value: '1000 товаров'
	}
]