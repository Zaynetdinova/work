import {titleRegistration} from "../../titleRegistration";
import {buttonRegistration} from "../../buttonRegistration";


export function restorePassword() {
    return `
        ${titleRegistration('Вход')}
        <div class="title-restorePassword">Восстановление пароля</div>
        <div class="text-email">Пожалуйста, введите адрес электронной почты, на который мы вышлем Ваш новый пароль.</div>
        <div class="restore-input">
            <div class="wrap-input">
            <input class="input-name" placeholder="Э-почта" type="text" name="name">
        </div>
        </div>
        <div class="wrapper-phoneBackCall-btnCall">
            ${buttonRegistration('Восстановить')}
        </div>  
    `
}