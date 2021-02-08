import {transitionWrapper} from "../../common/transitionTitle";
import img1 from '../../../../images/icons/contactPage/1.svg';
import img2 from '../../../../images/icons/contactPage/2.svg';
import img3 from '../../../../images/icons/contactPage/3.svg';
import img4 from '../../../../images/icons/contactPage/4.svg';
import img5 from '../../../../images/icons/contactPage/5.svg';
import img6 from '../../../../images/icons/contactPage/6.svg';

export function aboutContactsPageTemplate() {
    return `
        <div class="wrapper-contact">
            ${transitionWrapper(link)}
           	<div class="title-shopping">О магазине</div>
            <div class="title-contacts">Контактная информация</div>
            <div class="grid">
           	    <div class="item-grid">
           	        <img src="${img1}" alt="">
           	        <div>Адрес офиса и пункта выдачи: <span>г. Москва, Окружной</span> проезд, 30А</div>
                </div>
                <div class="item-grid">
           	        <img src="${img3}" alt="">
           	        <div>Оптовый отдел: <a href="mailto:info@optmoyo.ru">info@optmoyo.ru</a> <a href="">8 (499) 608-89-25,</a> <a href="">8 (800) 301-25-75</a></div>
                </div>
                <div class="item-grid">
           	        <img src="${img5}" alt="">
           	        <div>По вопросам сотрудничества: <a href="mailto:allyleon@optmoyo.ru">allyleon@optmoyo.ru</a></div>
                </div>
                <div class="item-grid">
           	        <img src="${img2}" alt="">
           	        <div>Время работы менеджеров по продажам: Пн-Пт: 10.00 - 20.00, Сб-Вс: выходные</div>
                </div>
                <div class="item-grid">
           	        <img src="${img4}" alt="">
           	        <div>Социальные сети:<br> <a href="">Instagram</a> <a href="">Vkontakte</a> <a href="">Facebook</a></div>
                </div>
                <div class="item-grid">
           	        <img src="${img6}" alt="">
           	        <div>Возвраты по браку отправляйте <span>Почтой России</span> на адрес: 105077, Москва, до востребования, <span>ИП Потапов Л.В.</span></div>
                </div>
            </div>
            <div class="cards-yandex">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A09b2d380371657f940bc3ede14d34d5fff94f9aaf4a80a95630ee5ee28a50817&amp;source=constructor" width="1240" height="400" frameborder="0"></iframe>
            </div>
            <div class="title-requisites">Реквизиты</div>
            <div class="text-requisites">ИП Потапов Леонид Викторович, <span>ОГРНИП 317774600234987, ИНН 771550104400,</span> <span>Фактический адрес: г. Москва,</span> Окружной проезд, 30А</div>
        </div>
    `
}
let link = [
    {
        title: 'Контакты',
        link: '/#information/contacts'
    }
]