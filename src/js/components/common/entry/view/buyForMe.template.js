import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";

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
        ${checkboxRegistration()}
        <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>
        ${infoTextRegistration()} 
    `
}