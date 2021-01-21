import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {popupPhone} from "./popupPhone";
import Armenia from "../../../../../images/icons/armenia.svg";
import Belarus from "../../../../../images/icons/belarus.svg";
import Georgia from "../../../../../images/icons/georgia.svg";
import Kazakhstan from "../../../../../images/icons/kazakhstan.svg";
import Russia from "../../../../../images/icons/russia.svg";

export function buyForSaleTemplate() {
    return `
        ${titleRegistration('Регистрация')}
        ${titleBuy('Покупаю для продажи')}
        <div class="box-input">
            <div class="wrap-input">
                <input class="input-name" placeholder="Фамилия*" type="text">
                <input class="input-name" placeholder="Имя*" type="text">
                <input class="input-name" placeholder="Отчество" type="text"> 
                
                <div id="select-phone-registration-js" class="password2 select-organization"></div>
                
                <input class="input-name" placeholder="Э-почта* (используется как логин)" type="text">           
            </div>
            <div class="wrap-input">
                <input class="input-name" placeholder="ИНН*" type="text"> 
                
                <div id="select-test" class="password2 select-organization"></div>
                
                <input class="input-name" placeholder="Наименование организации*" type="text">
                <div class="wrapper-password">
                    <div data-input-password-js class="password">
                        <input class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                        <a href="#" class="password-control"></a>
                    </div>
                    <div data-input-password-js class="password">
                        <input class="input-name" type="password" id="password-input" placeholder="Повторите пароль*" name="password">
                        <a href="#" class="password-control"></a>
                    </div>
                </div>
                <input class="input-name" placeholder="Город* (город доставки)" type="text">   
            </div>
        </div>
        ${checkboxRegistration()}
        <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>
        ${infoTextRegistration()}
        
    `
}

let popup = [
    {
        phone: 'ИП',
        img:'',
        country: ''
    },
    {
        phone: 'ООО',
        img:'',
        country: ''
    },
    {
        phone: 'ЗАО',
        img:'',
        country: ''
    },
]

let popup2 = [
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