import {titleRegistration} from "../../titleRegistration";
import {titleBuy} from "../../titleBuy";
import {checkboxRegistration} from "../../checkboxRegistration";
import {buttonRegistration} from "../../buttonRegistration";
import {infoTextRegistration} from "../../infoTextRegistration";

export function buyForMeTemplate() {
    return `
        
            <div class="wrapper-buyForMe">
             ${titleRegistration('Регистрация')}
             ${titleBuy('Покупаю для себя')}
             <div class="box-input">
                <div class="wrap-input">
                    <input class="input-name" placeholder="Фамилия*" type="text">
                    <input class="input-name" placeholder="Имя*" type="text">
                    <input class="input-name" placeholder="Отчество" type="text"> 
                    <input class="input-name" placeholder="Телефон*" type="text">              
                </div>
                <div class="wrap-input">
                    <input class="input-name" placeholder="Э-почта* (логин)" type="text">
                    <input class="input-name" placeholder="Пароль*" type="text">
                    <input class="input-name" placeholder="Повторите пароль*" type="text"> 
                    <input class="input-name" placeholder="Город* (город доставки)" type="text">   
                </div>
             </div>
             ${checkboxRegistration()}
             <div class="wrapper-button">${buttonRegistration('Зарегистрироваться')}</div>
             ${infoTextRegistration()}
        </div>
       
    `
}