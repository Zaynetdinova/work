import {transitionTitle} from "../common/transitionTitle";
import video from '../../../video/2.mp4'
import img1 from '../../../images/icons/baby.svg'
import img2 from '../../../images/icons/girl.svg'
import {childrenSidebar} from "../common/ChildrenSidebar";

export function categoriesChildren() {
    return `
		<div class="wrapper-categoriesChildren">	
            ${transitionTitle(pageForChildren)}
            <div class="flex-wrap">	
				<div class="sidebar-page-categoriesChildren">
					${childrenSidebar(dataSidebarGirl)}
				</div>
				<div class="content-page-categoriesChildren">
					<div class="banner-video">
						<video class="video" autoplay muted loop src=${video} </video>
					</div>	
    			</div>
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
        img: img1,
        name: 'Новорожденным',
        month: '(12 мес. - 17 лет)'
    },
    {
        img: img2,
        name: 'Девочкам',
        month: '(12 мес. - 17 лет)'
    },
]
