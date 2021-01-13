import close from '../../../images/icons/close-regisr.svg'
import phone from '../../../images/icons/icon_phone.svg'
import schema from '../../../images/icons/schema.svg'
import time from '../../../images/icons/time.svg'
export function backCall() {
    return `
        <div class="BackCall">
            <div class="wrapper-backCall">
                <article  id="closeImg-backCall" class="close"><img src="${close}" alt=""></article>
                <div class="title">Обратный звонок</div>
                <div class="wrap-input">
                    <input style="margin-bottom: 20px" class="input-name" placeholder="Имя" type="text">
                    <input class="input-name" placeholder="Телефон" type="text">
                </div>
                <div class="phone">
                    <img src="${phone}" alt="">
                    <span style="margin-left: 6px">
                        <a class="number" href='tel:+74996088925'>8 (499) 608-89-25,</a>
                        <a class="number" style="margin-left: 7px" href='tel:+78003012575'> (800) 301-25-75</a>
                    </span>
                </div>
                <div class="btnCall">Позвоните мне</div>      
                <div class="bottom-wrapper">
                    <div class="left">
                        <img src="${schema}" alt="">
                        <div class="address">
                            <div>Адрес офиса и пункта выдачи: <br> г. Москва, м. Шоссе Энтузиастов, <br> Окружной проезд, 30А</div>
                            <a href="#">Схема проезда</a>
                        </div>
                    </div>
                    <div class="right">
                        <img src="${time}" alt="">
                        <div class="address">Время работы менеджеров: <br> Пн – Пт: 10:00 – 20:00 <br> Сб – Вс: выходные</div>
                    </div>
                </div>    
            </div>
        </div>
    `
}