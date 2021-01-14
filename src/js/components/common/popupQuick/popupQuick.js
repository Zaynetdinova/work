import {popupQuickTemplate} from './popupQuick.template'


export function popupQuick() {
	return `
	<div id="Popup-quick-js" class="Popup-quick">
		<div id="paranja-click-js" class="paranja"></div>
		${popupQuickTemplate()}
	</div>
	`
}