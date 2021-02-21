import {commonCard} from '../common/commonCard/commonCards'

import video from '../../../video/1.mp4'
import {partnerOffers} from '../common/partnerOffers'
import {IconImg} from "../common/icon";
import {bannerBlockWomen} from "./view/banner";
import {categoriesMenuSidebar} from './view/categoriesMenuSidebar'
import {titleWrapper} from '../common/titleWrapper'
import {breadCrumbs} from '../common/breadCrumbs'

export function categoriesWomen(testDataWoman, item, pageForWomen) {
	return `
		<div class="wrapper-categories">	
			${breadCrumbs(pageForWomen)}
			${titleWrapper(pageForWomen)}
			<div class="flex-wrap">	
				<div class="sidebar-page-categories-women">				
					${categoriesMenuSidebar()}
				</div>
				<div class="content-page-categories">
					<div class="banner-video">
						<video class="video" autoplay muted loop src=${video} </video>
					</div>
					
					<div class="wrap-IconImg">${IconImg(item)}</div>
					
					<div class="wrap-card Moyomoda-Block BannerBlock">
						${bannerBlockWomen()}
					</div>
					<div class="wrap-partnerOffers">
						${partnerOffers()}
					</div>
					<div class="wrap-card-2">
						${commonCard(testDataWoman, 'price')}
					</div>
    			</div>
  			</div>
  		</div>
	`
}








