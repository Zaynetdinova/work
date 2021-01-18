import close from "../../../images/icons/close-regisr.svg";
import {titleRegistration} from "../common/titleRegistration";
import {buttonRegistration} from "../common/buttonRegistration";

export function entry() {
    return `
        <div class="Entry">
            <div class="wrapper-Entry">
                <div class="close"><article class="close-icon"  id="closeImg-entry"><img src="${close}" alt=""></article></div>
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
                    <article class="restore" id="restore">Восстановить</article>
                </div>
               
                <div class="wrapper-phoneBackCall-btnCall">
                    ${buttonRegistration('Войти')}
                </div>  
                <div class="wrap-registration">
                    <div>Если Вы не зарегистрированы в нашем магазине, пожалуйста,</div>
                    <article id="sign-up" class="sign-up"> зарегистрируйтесь</article>
                </div>     
            </div>
        </div>
    `
}