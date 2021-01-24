import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";

export function buyForMeTemplate() {
    return `
        ${titleRegistration('Регистрация')}
        ${titleBuy('Покупаю для себя')}
        <form class="form-js">
            <div class="box-input">
                <div class="wrap-input">
                    <input required class="input-name" placeholder="Фамилия*" type="text">
                    <input required class="input-name" placeholder="Имя*" type="text">
                    <input class="input-name" placeholder="Отчество" type="text"> 
                    
                    <div id="select-phone-registration-js" class="password2 select-organization"></div>
                           
                </div>
                <div class="wrap-input">
                    <input required class="input-name" placeholder="Э-почта* (логин)" type="text">
    <!--                error password2 переименоать-->
                    <div data-input-password-js class="password password2">
                        <input required class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                        <div class="password-control"></div>
                    </div>
                    <div data-input-password-js class="password password2">
                        <input required class="input-name" type="password" id="password-input" placeholder="Повторите пароль*" name="password">
                        <div class="password-control"></div>
                    </div>
                    <input required class="input-name" placeholder="Город* (город доставки)" type="text">   
                </div>
            </div>
            ${checkboxRegistration('Даю согласие на обработку персональных данных')}
            <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>
        </form>
        ${infoTextRegistration()} 
    `
}