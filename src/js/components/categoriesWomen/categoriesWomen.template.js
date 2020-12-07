import {commonCard} from '../common/commonCard/commonCards'
import {categoriesMenuSidebar} from '../common/categoriesMenuSidebar'

import video from '../../../video/1.mp4'
import {partnerOffers} from '../common/partnerOffers'
import {transitionTitle} from '../common/transitionTitle'

export function categoriesWomen(woman) {
	return `
		<div class="wrapper-categoriesWomen">	
			${transitionTitle()}	
			${categoriesMenuSidebar()}
			<div class="content-page-categoriesWomen">
				<div class="banner-video">
					<video class="video" autoplay muted loop src=${video} </video>
				</div>
    		${commonCard(woman, 'price')}
    		${partnerOffers()}
    		${commonCard(woman, 'price')}
  		</div>
  	</div>
	`
}