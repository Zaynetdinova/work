import {titleRegistration} from "../../../common/popupDefaultTemplate/titleRegistration";
import {nesessaryFildsTemplate} from "../../../common/entry/view/nesesaryFilds.template";
import {buttonRegistration} from "../../../common/popupDefaultTemplate/buttonRegistration";
import {checkboxRegistration} from "../../../common/popupDefaultTemplate/checkboxRegistration";

export function changeGuestLoginTemplate() {
    return `
		${titleRegistration('Новый гостевой логин')}
		<form class="form-js" id="personal-change-login-form-js">
			<div class="wrap-input">
                <input name="email" class="input-name"  placeholder="Гостевая Эл. почта (письма на неё не отправляются)*" type="email">  
                <div class="password" data-input-password-js>
                    <input name="password" class="input-name password-control-eye-js" type="password" placeholder="Пароль*">
                    <div class="password-control"></div>
                </div>
                <input class="input-name"  placeholder="Наценка в процентах*" type="text">
                <input class="input-name"  placeholder="Фиксированная наценка в рублях*" type="text">	
                ${nesessaryFildsTemplate()}		
			</div>
			${checkboxRegistration('Округлять цены до целых рублей вверх?')}
			<div class="wrapper-button">
				${buttonRegistration('Сохранить')}
			</div>
		</form>
	`
}