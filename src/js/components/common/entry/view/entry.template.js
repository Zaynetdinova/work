import {titleRegistration} from "../../titleRegistration";
import {buttonRegistration} from "../../buttonRegistration";

export function entryTemplate() {
    return `  
        ${titleRegistration('Вход')}
        
        <form class="form-js">
            <div class="wrap-input">
            <input required class="input-name"  placeholder="Логин (Э-почта)*" id="login-name" type="text" name="name">
            <div class="password" data-input-password-js>
                <input required class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                <div class="password-control"></div>
            </div>
            </div>
            <div class="wrap-agree">
                <div>Забыли пароль?</div>
                <article class="restore" id="restore-password-button-js">Восстановить</article>
            </div>
       
            <div class="wrapper-phoneBackCall-btnCall">
                ${buttonRegistration('Войти')}
            </div>
        </form>
          
        <div class="wrap-registration">
            <div>Если Вы не зарегистрированы в нашем магазине, пожалуйста,</div>
            <article id="sign-up-js" class="sign-up"> 
               зарегистрируйтесь 
            </article>
        </div>     
    `
}