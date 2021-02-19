import {titleRegistration} from '../../../common/popupDefaultTemplate/titleRegistration'
import {nesessaryFildsTemplate} from '../../../common/entry/view/nesesaryFilds.template'
import {buttonRegistration} from '../../../common/popupDefaultTemplate/buttonRegistration'

export function changeTransportTemplate() {
	return `
		${titleRegistration('Изменение <br> транспортной компании')}
		<form class="form-js" id="personal-change-transport-form-js">
			<div class="wrap-input">
			
				
				${nesessaryFildsTemplate()}
			</div>
			<div class="wrapper-restore">
				${buttonRegistration('Сохранить')}
			</div>
		</form>
	
	`
}