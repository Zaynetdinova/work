import {titleRegistration} from "../../../common/popupDefaultTemplate/titleRegistration";
import {nesessaryFildsTemplate} from "../../../common/entry/view/nesesaryFilds.template";
import {buttonRegistration} from "../../../common/popupDefaultTemplate/buttonRegistration";

export function changeBankDetailsTemplate() {
    return `
		${titleRegistration('Реквизиты')}
		<form class="form-js" id="personal-change-bank-details-form-js">
			<div class="wrap-input">
				<input  class="input-name"  placeholder="БИК*" type="text">
				<input  class="input-name"  placeholder="Банк*" type="text">
				<input  class="input-name"  placeholder="К/C*" type="text">
				<input  class="input-name"  placeholder="Р/C*" type="text">
				${nesessaryFildsTemplate()}
			</div>
			<div class="wrapper-restore">
				${buttonRegistration('Сохранить')}
			</div>
		</form>
	
	`
}