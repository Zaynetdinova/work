import {titleRegistration} from "../../../common/popupDefaultTemplate/titleRegistration";
import {nesessaryFildsTemplate} from "../../../common/entry/view/nesesaryFilds.template";
import {buttonRegistration} from "../../../common/popupDefaultTemplate/buttonRegistration";

export function changeAddressTemplate() {
    return `
		${titleRegistration('Новый адрес доставки')}
		<form class="form-js" id="personal-change-address-form-js">
			<div class="wrap-input">
				<input  class="input-name"  placeholder="Почтовый индекс*" type="text">
				<input  class="input-name"  placeholder="Регион, область, район" type="text">
				<input  class="input-name"  placeholder="Населенный пункт*" type="text">
				<input  class="input-name"  placeholder="Улица*" type="text">
				<input  class="input-name"  placeholder="Дом, строение, корпус, квартира, офис*" type="text">
				${nesessaryFildsTemplate()}
			</div>
			<div class="wrapper-restore">
				${buttonRegistration('Сохранить')}
			</div>
		</form>
	
	`
}