export function popupDefaultTemplate(component) {
	return `
		<div id="Entry-js" class="Popup-default-template">
			<div class="paranja"></div>
			<div id="entry-wrapper-js" class="wrapper-Popup">
				<div class="wrap-back">
					<div id="back-js" class="back">
						<div class="btn"></div>
						<span>Назад</span>
					</div>
					<span></span>
					<div class="close"><article class="close-icon"  id="close-entry-registration-js"><div class="btn-close"></div></article></div>
				</div>
				<div class="Wrap-component">${component}</div>
			</div>
		</div>
	`
}
