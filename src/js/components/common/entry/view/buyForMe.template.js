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
                <div class="password2">
                    <input class="input-name" placeholder="Телефон*" type="tel">
                    <div>
                        <a href="#" class="phone-arrow"></a>
                        <a href="#" class="phone-control"></a>
                    </div>
                </div>
                <div class="wrap-popup-phone"> ${popupPhone(popup)}</div>        
            </div>
            <div class="wrap-input">
                <input class="input-name" placeholder="Э-почта* (логин)" type="text">
                <div class="password2">
                    <input class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                    <a href="#" class="password-control"></a>
                </div>
                <div class="password2">
                    <input class="input-name" type="password" id="password-input" placeholder="Повторите пароль*" name="password">
                    <a href="#" class="password-control"></a>
                </div>
                <input class="input-name" placeholder="Город* (город доставки)" type="text">   
            </div>
        </div>
        ${checkboxRegistration('Даю согласие на обработку персональных данных')}
        <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>
        ${infoTextRegistration()} 
    `
}

let popup = [
    {
        phone: '+374',
        country: 'Армения',
        img: Armenia
    },
    {
        phone: '+375',
        country: 'Белоруссия',
        img: Belarus
    },
    {
        phone: '+995',
        country: 'Грузия',
        img: Georgia
    },
    {
        phone: '+7',
        country: 'Казахстан',
        img: Kazakhstan
    },
    {
        phone: '+7',
        country: 'Россия',
        img: Russia
    },
]