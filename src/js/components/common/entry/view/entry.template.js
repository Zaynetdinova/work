import {titleRegistration} from "../../titleRegistration";
import {buttonRegistration} from "../../buttonRegistration";

export function entryTemplate() {
    return `  
        ${titleRegistration('Вход')}
        <div class="wrap-input">
            <input class="input-name"  placeholder="Логин (Э-почта)*" type="text" name="name">
            <div class="password">
                <input class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                <a href="#" class="password-control"></a>
            </div>
        </div>
        <div class="wrap-agree">
            <div>Забыли пароль?</div>
            <article class="restore" id="restore-password-button-js">Восстановить</article>
        </div>
       
        <div class="wrapper-phoneBackCall-btnCall">
            ${buttonRegistration('Войти')}
        </div>  
        <div class="wrap-registration">
            <div>Если Вы не зарегистрированы в нашем магазине, пожалуйста,</div>
            <article id="sign-up-js" class="sign-up"> 
               зарегистрируйтесь 
            </article>
        </div>     
    `
}