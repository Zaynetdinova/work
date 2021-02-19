import {titleRegistration} from '../../../common/popupDefaultTemplate/titleRegistration'
import {buttonRegistration} from '../../../common/popupDefaultTemplate/buttonRegistration'
import {nesessaryFildsTemplate} from '../../../common/entry/view/nesesaryFilds.template'

export function changePasswordTemplate() {
	return `
		${titleRegistration('Изменение пароля')}
		<form class="form-js" id="personal-change-password-form-js">
			<div class="wrap-input">
				<div class="password" data-input-password-js>
					<input name="password" class="input-name password-control-eye-js" type="password" placeholder="Текущий пароль*">
					<div class="password-control"></div>
				</div>
				
				<div class="password" data-input-password-js>
					<input name="newPassword" class="input-name password-control-eye-js" type="password" placeholder="Введите новый пароль*">
					<div class="password-control"></div>
				</div>
				
				<div class="password" data-input-password-js>
					<input name="repeatNewPassword" class="input-name password-control-eye-js" type="password" placeholder="Повторите новый пароль*">
					<div class="password-control"></div>
				</div>
				
				${nesessaryFildsTemplate()}
			</div>
			<div class="wrapper-restore">${buttonRegistration('Изменить')} </div>
		</form>
	`
}