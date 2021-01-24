import phone from '../../../../../images/icons/icon_phone.svg'
import schema from '../../../../../images/icons/schema.svg'
import time from '../../../../../images/icons/time.svg'
import {buttonRegistration} from "../../buttonRegistration";
import {titleRegistration} from "../../titleRegistration";
export function backCall() {
    return `
        ${titleRegistration('Обратный звонок')}
        
        <form class="form-js">
            <div class="wrap-input">
                <input required class="input-name"  placeholder="Имя*" type="text" name="name">
                <div id="back-call-js" class="password2 select-organization"></div>
            </div>
            <div class="wrapper-phoneBackCall-btnCall">
                <div class="phoneBackCall">
                    <img src="${phone}" alt="">
                    <span class="wrapper-number-BackCall">
                        <a class="number" href='tel:+78003012575'>8 (800) 301-25-75,</a>
                        <a class="number" href='tel:+74996088925'>8 (499) 608-89-25 </a>
                    </span>
                </div>
                ${buttonRegistration('Позвоните мне')}
            </div>
        </form>
        <div class="bottom-wrapperBackCall">
            <div class="leftBackCall">
                <img src="${schema}" alt="">
                <div class="address">
                    <div>Адрес офиса и пункта выдачи: <br> г. Москва, м. Шоссе Энтузиастов, <br> Окружной проезд, 30А</div>
                    <a href="https://yandex.ru/maps/?from=api-maps&ll=37.968130%2C55.503040&mode=usermaps&origin=jsapi_2_1_77&um=constructor%3AWBTjAg5GRe0kP9x5FU3LeB13aYBomqUm&z=10" target="_blank">Схема проезда</a>
                </div>
            </div>
            <div class="rightBackCall">
                <img src="${time}" alt="">
                <div class="address">Время работы менеджеров: <br> Пн – Пт: 10:00 – 20:00 <br> Сб – Вс: выходные</div>
            </div>
        </div>
    `
}