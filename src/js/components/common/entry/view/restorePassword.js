import {titleRegistration} from "../../titleRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import close from "../../../../../images/icons/close-regisr.svg";
import arrow from "../../../../../images/icons/arrow-back.svg";

export function restorePassword() {
    return `
        <div id="restore-password-js" class="restorePassword">
            <div class="wrapper-restorePassword">
                <div class="wrap-back">
                    <div class="back"><img class="btn" src="${arrow}" alt="">Назад</div>
                    <div class="close"><article class="close-icon"  id="closeImg-entry"><img src="${close}" alt=""></article></div>
                </div>
                ${titleRegistration('Вход')}
                <div class="title-restorePassword">Восстановление пароля</div>
                <div class="text-email">Пожалуйста, введите адрес электронной почты, на который мы вышлем Ваш новый пароль.</div>

               
                <div class="wrapper-phoneBackCall-btnCall">
                    ${buttonRegistration('Восстановить')}
                </div>  
            </div>
        </div>
    `
}