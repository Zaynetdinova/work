import close from "../../../images/icons/close-regisr.svg";
import {titleRegistration} from "../common/titleRegistration";
import {buttonRegistration} from "../common/buttonRegistration";
import {restorePassword} from "../restorePassword/restorePassword";

export function entry() {
    return `
        <div class="Entry">
            <div class="wrapper-Entry">
                <article  id="closeImg-entry" class="close"><img style="cursor: pointer" id="close-BackCall" src="${close}" alt=""></article>
                ${titleRegistration('Вход')}
                <div class="wrap-input">
                    <input style="margin-bottom: 15px" class="input-name"  placeholder="Логин (Э-почта)*" type="text" name="name">
                    <div class="password">
                        <input class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                        <a href="#" class="password-control"></a>
                    </div>
                </div>
                <div class="wrap-agree">
                    <div>Забыли пароль?</div>
                    <article class="restore" id="restore">Восстановить
                        ${restorePassword()}
                    </article>
                </div>
               
                <div class="wrapper-phoneBackCall-btnCall">
                    ${buttonRegistration('Войти')}
                </div>  
                <div class="wrap-registration">Если Вы не зарегистрированы в нашем магазине,<br> пожалуйста, <span class="sign-up">зарегистрируйтесь</span></div>     
            </div>
        </div>
    `
}