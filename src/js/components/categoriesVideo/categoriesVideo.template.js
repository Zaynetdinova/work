import video from '../../../video/1.mp4'
import {categoriesMenuSidebar} from "../categoriesMenuSidebar/categoriesMenuSidebar";
import {partnerOffers} from "../partnerOffers/partnerOffers.template";





export function categoriesVideo() {
	return `
		<div class="wrapper-main">
			${categoriesMenuSidebar()}
			<div class="newPage">
				<div class="banner-video">
					<video class="video" autoplay muted loop src=${video} </video>
				</div>
				${partnerOffers()}
			</div>
		</div>
	`
}
