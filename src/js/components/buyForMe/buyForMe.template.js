import {titleRegistration} from "../common/titleRegistration";
import {titleBuy} from "../common/titleBuy";
import {checkboxRegistration} from "../common/checkboxRegistration";
import {buttonRegistration} from "../common/buttonRegistration";
import {infoTextRegistration} from "../common/infoTextRegistration";
import close from '../../../images/icons/close-regisr.svg'
import arrow from "../../../images/icons/arrow-back.svg";

export function buyForMe() {
    return `
        <div class="buyForMeReg">
            <div class="wrapper-buyForMe">
            <div class="wrap-back">
                <div class="back"><img class="btn" src="${arrow}" alt="">Назад</div>
                <div class="close"><article class="close-icon"  id="closeImg-entry"><img src="${close}" alt=""></article></div>
            </div>
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
        </div>
    `
}