import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";
import {buttonRegistration} from "../../buttonRegistration";

export function buyForSaleTemplate() {
    return `
        ${titleRegistration('Регистрация')}
        ${titleBuy('Покупаю для продажи')}
        <form class="form-js">
            <div class="box-input">
                <div class="wrap-input">
                    <input required class="input-name" placeholder="Фамилия*" type="text">
                    <input required class="input-name" placeholder="Имя*" type="text">
                    <input  class="input-name" placeholder="Отчество" type="text"> 
                    
                    <div id="select-phone-registration-js" class="password2 select-organization"></div>
                    
                    <input required class="input-name" placeholder="Э-почта* (используется как логин)" type="text">           
                </div>
                <div class="wrap-input">
                    <input required class="input-name" placeholder="ИНН*" type="text"> 
                    
                    <div id="select-test" class="password2 select-organization"></div>
                    
                    <input required class="input-name" placeholder="Наименование организации*" type="text">
                    <div class="wrapper-password">
                        <div data-input-password-js class="password">
                            <input required class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                            <a href="#" class="password-control"></a>
                        </div>
                        <div data-input-password-js class="password">
                            <input required class="input-name" type="password" id="password-input" placeholder="Повторите пароль*" name="password">
                            <a href="#" class="password-control"></a>
                        </div>
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

