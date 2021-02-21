import video from '../../../video/2.mp4'
import {childrenSidebar} from "../common/ChildrenSidebar";
import {partnerOffers} from "../common/partnerOffers";
import {commonCard} from '../common/commonCard/commonCards'
import {IconChildren} from './view/iconChildren'
import {bannerBlockChildren} from "./view/banner";
import {titleWrapper} from '../common/titleWrapper'
import {breadCrumbs} from '../common/breadCrumbs'


export function categoriesChildren(testData, pageForChildren, dataSidebarGirl) {
    return `
		<div class="wrapper-categories">	
				${breadCrumbs(pageForChildren)}
                ${titleWrapper(pageForChildren)}
				<div class="flex-wrap">	
				
					<section class="sidebar-page-categories sidebar-page-categoriesChildren">
             ${childrenSidebar(dataSidebarGirl)}
					</section>
					
					<section class="content-page-categories">
						<div class="banner-video">
							<video class="video" autoplay muted loop src=${video} </video>
						</div>
						
						<div class="wrap-ImgChildren">
							${IconChildren()}
						</div>
						
						
						
						<div class="wrap-card Moyomoda-Block BannerBlockChildren">
						    ${bannerBlockChildren()}
					    </div>
					
						<div class="wrap-partnerOffers">
							${partnerOffers()}
						</div>
						<div class="wrap-card-2">
							${commonCard(testData, 'price')}
						</div>	
					</section>
					
				</div>
		</div>
	`
}



