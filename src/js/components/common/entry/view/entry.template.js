import {titleRegistration} from "../../titleRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {nesessaryFildsTemplate} from './nesesaryFilds.template'

export function entryTemplate() {
    return `  
        ${titleRegistration('Вход')}
        
        <form class="form-js">
            <div class="wrap-input">
              <input name="email" class="input-name"  placeholder="Логин (Эл. Почта)*" type="email">
              
              <div class="password" data-input-password-js>
                  <input name="password" class="input-name password-control-eye-js" type="password" placeholder="Пароль*">
                  <div class="password-control"></div>
              </div>
            </div>
            
            ${nesessaryFildsTemplate()}
            
            <div class="wrap-agree">
                <div>Забыли пароль?</div>
                <article class="restore" id="restore-password-button-js">Восстановить</article>
            </div>
       
            <div class="wrapper-entry-button">
                ${buttonRegistration('Войти')}
            </div>
        </form>
          
        <div class="wrap-registration">
            <div>Если Вы не зарегистрированы в нашем магазине, пожалуйста, зарегистрируйтесь!</div>
        </div>  
        <article id="sign-up-js" class="sign-up"> 
             ${buttonRegistration('Зарегистрироваться')}  
        </article>   
    `
}