import {titleRegistration} from "../common/titleRegistration";
import {titleBuy} from "../common/titleBuy";
import {checkboxRegistration} from "../common/checkboxRegistration";
import {infoTextRegistration} from "../common/infoTextRegistration";
import {buttonRegistration} from "../common/buttonRegistration";
import arrow from "../../../images/icons/arrow-back.svg";
import close from '../../../images/icons/close-regisr.svg';
export function buyForSale() {
    return `
        <div class="buyForSaleReg">
            <div class="wrapper-buyForSale">
                <div class="wrap-back">
                    <div class="back"><img class="btn" src="${arrow}" alt="">Назад</div>
                    <div class="close"><article class="close-icon"  id="closeImg-entry"><img src="${close}" alt=""></article></div>
                </div>
                 ${titleRegistration('Регистрация')}
                 ${titleBuy('Покупаю для продажи')}
                 <div class="box-input">
                    <div class="wrap-input">
                        <input class="input-name" placeholder="Фамилия*" type="text">
                        <input class="input-name" placeholder="Имя*" type="text">
                        <input class="input-name" placeholder="Отчество" type="text"> 
                        <input class="input-name" placeholder="Телефон*" type="text">  
                        <input class="input-name" placeholder="Э-почта* (используется как логин)" type="text">           
                    </div>
                    <div class="wrap-input">
                        <input class="input-name" placeholder="ИНН*" type="text"> 
                        <input class="input-name" placeholder="Форма собственности*" type="text">
                        <input class="input-name" placeholder="Наименование организации*" type="text">
                        <div class="wrapper-password">
                            <div class="password">
                                <input class="input-name" type="password" id="password-input" placeholder="Пароль*" name="password">
                                <a href="#" class="password-control"></a>
                            </div>
                            <div class="password">
                                <input class="input-name" type="password" id="password-input" placeholder="Повторите пароль*" name="password">
                                <a href="#" class="password-control"></a>
                            </div>
                        </div>
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