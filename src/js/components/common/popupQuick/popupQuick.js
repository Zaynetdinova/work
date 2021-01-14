import {popupQuickTemplate} from './popupQuick.template'
import Swiper from 'swiper'


export function popupQuick() {
	return `
	<div id="Popup-quick-js" class="Popup-quick">
		<div id="paranja-click-js" class="paranja"></div>
		${popupQuickTemplate()}
	</div>
	`


}