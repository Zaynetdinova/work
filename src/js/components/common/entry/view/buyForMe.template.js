import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";
import {popupPhone} from "./popupPhone";
import Armenia from "../../../../../images/icons/armenia.svg";
import Belarus from "../../../../../images/icons/belarus.svg";
import Georgia from "../../../../../images/icons/georgia.svg";
import Russia from "../../../../../images/icons/russia.svg";
import Kazakhstan from "../../../../../images/icons/kazakhstan.svg";
export function buyForMeTemplate() {
    return `
        ${titleRegistration('Регистрация')}
        ${titleBuy('Покупаю для себя')}
        <div class="box-input">
            <div class="wrap-input">
                <input class="input-name" placeholder="Фамилия*" type="text">
                <input class="input-name" placeholder="Имя*" type="text">
                <input class="input-name" placeholder="Отчество" type="text"> 
                
                <div id="select-phone-registration-js" class="password2 select-organization"></div>
                       
            </div>
            <div class="wrap-input">
                <input class="input-name" placeholder="Э-почта* (логин)" type="text">
<!--                error password2 переименоать-->
                <div data-input-password-js class="password password2">
                    <input class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                    <div class="password-control"></div>
                </div>
                <div data-input-password-js class="password password2">
                    <input class="input-name" type="password" id="password-input" placeholder="Повторите пароль*" name="password">
                    <div class="password-control"></div>
                </div>
                <input class="input-name" placeholder="Город* (город доставки)" type="text">   
            </div>
        </div>
        ${checkboxRegistration('Даю согласие на обработку персональных данных')}
        <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>
        ${infoTextRegistration()} 
    `
}