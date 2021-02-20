import {popupQuickTemplate} from './popupQuick.template'
import {testDataCardProductPage} from '../../../../testData/testDataCardProductPage'


export function popupQuick() {
	return `
	<div id="Popup-quick-js" class="Popup-quick">
		<div id="paranja-click-js" class="paranja"></div>
		${popupQuickTemplate(
		testDataCardProductPage.color,
		testDataCardProductPage.info,
		testDataCardProductPage.brand
			)}
	</div>
	`
}