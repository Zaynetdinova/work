import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";
import {nesessaryFildsTemplate} from './nesesaryFilds.template'

export function buyForMeTemplate() {
    return `
        ${titleRegistration('Регистрация')}
        ${titleBuy('Покупаю для себя')}
        <form class="form-js">
            <div class="box-input">
                <div class="wrap-input">
                    <input name="surname"  class="input-name" placeholder="Фамилия*" type="text">
                    <input name="name" class="input-name" placeholder="Имя*" type="text">
                    <input name="patronymic" class="input-name" placeholder="Отчество" type="text"> 
                    <div id="select-phone-registration-js" class="password2 select-organization"></div>
                </div>
                <div class="wrap-input">
                    <input name="email"  class="input-name" placeholder="Э-почта* (логин)" type="text">
    <!--                error password2 переименоать password???-->
                    <div data-input-password-js class="password2 password">
                        <input class="input-name password-control-eye-js" type="password" placeholder="Пароль*" name="password">
                        <div class="password-control"></div>
                    </div>
                    <div data-input-password-js class="password2 password">
                        <input class="input-name password-control-eye-js" type="password" placeholder="Повторите пароль*" name="passwordRepeat">
                        <div class="password-control"></div>
                    </div>
                    <input name="city" class="input-name" placeholder="Город* (город доставки)" type="text">   
                </div>
            </div>

            ${nesessaryFildsTemplate()}
            ${checkboxRegistration('Даю согласие на обработку персональных данных')}
            <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>

        </form>
        ${infoTextRegistration()} 
    `
}