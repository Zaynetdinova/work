import close from '../../../images/icons/close-regisr.svg'
import phone from '../../../images/icons/icon_phone.svg'
import schema from '../../../images/icons/schema.svg'
import time from '../../../images/icons/time.svg'
import {buttonRegistration} from "../common/buttonRegistration";
import {titleRegistration} from "../common/titleRegistration";
export function backCall() {
    return `
        <div class="BackCall" id="#popupBackCall">
            <div class="wrapper-backCall">
                <div class="close"><article class="close-icon"  id="closeImg-backCall"><img src="${close}" alt=""></article></div>
                ${titleRegistration('Обратный звонок')}
                <div class="wrap-input">
                    <input style="margin-bottom: 15px" class="input-name"  placeholder="Имя*" type="text" name="name">
                    <input class="input-name" placeholder="Телефон*" type="text" name="phone">
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
            </div>
        </div>
    `
}