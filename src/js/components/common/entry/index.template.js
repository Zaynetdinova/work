import close from '../../../../images/icons/close-regisr.svg'
import arrow from '../../../../images/icons/arrow-back.svg'

export function indexTemplate(component) {
	return `
		<div id="Entry-js" class="Entry">
			<div class="paranja"></div>
			<div id="entry-wrapper-js" class="wrapper-Entry">
			<div class="wrap-back">
				<div id="back-js" class="back">
					<img class="btn" src="${arrow}" alt="">
					<span>Назад</span>
				</div>
				<span></span>
				<div class="close"><article class="close-icon"  id="close-entry-registration-js"><img src="${close}" alt=""></article></div>
			</div>
						
			${component}
			</div>
		</div>
	`
}