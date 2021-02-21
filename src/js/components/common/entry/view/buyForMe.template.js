import {titleRegistration} from '../../popupDefaultTemplate/titleRegistration';
import {buttonRegistration} from '../../popupDefaultTemplate/buttonRegistration';
import {infoTextRegistration} from '../../infoTextRegistration';
import {nesessaryFildsTemplate} from './nesesaryFilds.template';

export function buyForMeTemplate() {
    return `
        ${titleRegistration('Регистрация')}
        <div class="wrap-title-buy">Покупаю для себя</div>
        <form class="form-js">
            <div class="box-input">
                <div class="wrap-input">
                    <input name="surname"  class="input-name" placeholder="Фамилия*" type="text">
                    <input name="name" class="input-name" placeholder="Имя*" type="text">
                    <input name="patronymic" class="input-name" placeholder="Отчество" type="text"> 
                    <div id="select-phone-registration-js" class="password2 select-organization"></div>
                </div>
                <div class="wrap-input">
                    <input name="email"  class="input-name" placeholder="Эл. Почта* (используется как логин)" type="text">
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
            <div class="wrap-checkbox">
                <input  checked class="checkbox checkbox-filter-js" type="checkbox" id="forMe"> 
                <label for="forMe"></label>
                <div class="text-checkbox">
                       Даю согласие на обработку персональных данных
                </div>
            </div> 
            <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>

        </form>
        ${infoTextRegistration()} 
    `
}