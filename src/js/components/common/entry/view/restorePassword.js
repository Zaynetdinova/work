import {titleRegistration} from "../../titleRegistration";
import {buttonRegistration} from "../../buttonRegistration";


export function restorePassword() {
    return `
            <div>
                ${titleRegistration('Вход')}
                <div class="title-restorePassword">Восстановление пароля</div>
                <div class="text-email">Пожалуйста, введите адрес электронной почты, на который мы вышлем Ваш новый пароль.</div>

               
                <div class="wrapper-phoneBackCall-btnCall">
                    ${buttonRegistration('Восстановить')}
                </div>  
            </div>
    `
}