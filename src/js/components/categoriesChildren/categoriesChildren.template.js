import {transitionTitle} from "../common/transitionTitle";
import video from '../../../video/2.mp4'
import img1 from '../../../images/icons/baby.svg'
import img2 from '../../../images/icons/girl.svg'
import {childrenSidebar} from "../common/ChildrenSidebar";
import {partnerOffers} from "../common/partnerOffers";
import {commonCard} from '../common/commonCard/commonCards'
import {IconChildren} from "../common/iconChildren";

export function categoriesChildren(woman) {
    return `
		<div class="wrapper-categories">	
				${transitionTitle(pageForChildren)}
				<div class="flex-wrap">	
					<section class="sidebar-page-categories sidebar-page-categoriesChildren">
						${childrenSidebar(dataSidebarGirl)}
					</section>
					<section class="content-page-categories">
						<div class="banner-video">
							<video class="video" autoplay muted loop src=${video} </video>
						</div>
						<div class="wrap-ImgChildren">${IconChildren()}</div>
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
    		id: 'children',
        img: img1,
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
    		id: 'children2',
        img: img2,
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]
