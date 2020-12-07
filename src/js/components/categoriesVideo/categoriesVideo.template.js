import video from '../../../video/1.mp4'
import {categoriesMenuSidebar} from "../categoriesMenuSidebar/categoriesMenuSidebar";


export function categoriesVideo() {
	return `
		<div class="wrapper-main">
			${categoriesMenuSidebar()}
			<div class="banner-video">
				<video class="video" autoplay muted loop src=${video} </video>
			</div>
		</div>
	`
}
