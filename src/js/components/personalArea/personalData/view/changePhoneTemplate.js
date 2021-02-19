import {titleRegistration} from '../../../common/popupDefaultTemplate/titleRegistration'
import {nesessaryFildsTemplate} from '../../../common/entry/view/nesesaryFilds.template'
import {buttonRegistration} from '../../../common/popupDefaultTemplate/buttonRegistration'

export function changePhoneTemplate() {
	return `
		${titleRegistration('Изменение <br> контактной информации')}
		<form class="form-js" id="personal-change-phone-form-js">
			<div class="wrap-input">
                <div id="select-phone-registration-js" class="password2 select-organization"></div>
                <input class="input-name"  placeholder="Город доставки*" type="text" name="name">
				${nesessaryFildsTemplate()}			
			</div>
			<div class="wrapper-restore">
				${buttonRegistration('Изменить')}
			</div>
		</form>
	`
}