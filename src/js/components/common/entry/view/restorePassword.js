import {titleRegistration} from "../../popupDefaultTemplate/titleRegistration";
import {buttonRegistration} from "../../popupDefaultTemplate/buttonRegistration";
import {nesessaryFildsTemplate} from './nesesaryFilds.template'


export function restorePassword() {
    return `
        ${titleRegistration('Вход')}
        <form class="form-js">
            <div class="title-restorePassword">Восстановление пароля</div>
            <div class="text-email">Пожалуйста, введите адрес электронной почты, на который мы вышлем Ваш новый пароль.</div>
            <div class="restore-input">
                <div class="wrap-input">
                <input class="input-name" placeholder="Эл. Почта" type="email" name="email">
            </div>
            ${nesessaryFildsTemplate()}
            </div>
            <div class="wrapper-restore">
                ${buttonRegistration('Восстановить')}
            </div>  
        </form>
    `
}