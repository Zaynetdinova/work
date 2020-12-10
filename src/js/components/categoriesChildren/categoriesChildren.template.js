import {titleWrapper, transitionTitle, transitionWrapper} from "../common/transitionTitle";
import video from '../../../video/2.mp4'
import {childrenSidebar} from "../common/ChildrenSidebar";
import {partnerOffers} from "../common/partnerOffers";
import {commonCard} from '../common/commonCard/commonCards'
import {IconChildren} from './iconChildren'


export function categoriesChildren(woman) {
    return `
		<div class="wrapper-categories">	
				${transitionWrapper(pageForChildren)}
				<div class="titleWoman">
				    ${titleWrapper(pageForChildren)}
			    </div>
				<div class="flex-wrap">	
				
					<section class="sidebar-page-categories sidebar-page-categoriesChildren">
						${titleWrapper(pageForChildren)}
                        ${childrenSidebar(dataSidebarGirl)}
					</section>
					
					<section class="content-page-categories">
						<div class="banner-video">
							<video class="video" autoplay muted loop src=${video} </video>
						</div>
						
						<div class="wrap-ImgChildren">
							${IconChildren()}
						</div>
						
						<div class="wrap-card">
							${commonCard(woman, 'price')}
						</div>
						<div class="wrap-partnerOffers">
							${partnerOffers()}
						</div>
						<div class="wrap-card-2">
							${commonCard(woman)}
						</div>	
					</section>
					
				</div>
		</div>
	`
}

let pageForChildren = [
    {
        link: '/#categories-children',
        title: 'Девочкам',
        value: '1000 товаров'
    }
]

let dataSidebarGirl = [
    {
    		id: 'children-baby',
        img: 'baby',
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
    		id: 'children-girl',
        img: 'girl',
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]
