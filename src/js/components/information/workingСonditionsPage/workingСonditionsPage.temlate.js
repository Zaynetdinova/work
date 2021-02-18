import {transitionWrapper} from "../../common/transitionTitle";
import {navigationMobile} from "../../common/navigation-mobile";
import {navigationInformationCooperation} from "../../common/navigationInformationCooperation";

export function  workingConditionsPageTemplate() {
    return `
        <div class="wrapper-working-condition">
            ${transitionWrapper(link)}
           	<div class="title-shopping">Сотрудничество</div>
           	<div class="wrapper-navigation-info">
           	    ${navigationInformationCooperation('about-working-condition')}
           	    ${navigationMobile('/#information/about-us','условия работы','/#information/contacts')}
            </div>
            <div class="title-working-condition">Как стать нашим клиентом</div>
            <p>Сотрудничаем с организациями любых форм собственности, 
            а так же с “Совместными закупками”.</p>
            <div class="wrapper-flex">
                <div class="flex-one">
                    <div class="flex-item-one">
                        <div class="number-working">1</div>
                        <div>
                            <div class="title-one">РЕГИСТРАЦИЯ</div>
                            <div><a href="#">Пройдите несложный процесс регистрации</a>, 
                            заполнив несколько обязательных полей. Заявки принимаются на сайте круглосуточно.</div>
                        </div>
                    </div>
                    <div class="flex-item-one">
                        <div class="number-working">2</div>
                        <div>
                            <div class="title-one">Доступ к оптовым ценам</div>
                            <div>Получите письмо и подтвердите свою почту, пройдя по ссылке. 
                            Оптовые цены откроются, можно совершать заказы.</div>
                        </div>
                    </div>
                    <div class="flex-item-one">
                        <div class="number-working">3</div>
                        <div>
                            <div class="title-one">Размещение заказа</div>
                            <div>Заказы принимаются на нашем сайте через <span class="no-wrap">интернет-корзину 24/7.</span>
                            Необходимо авторизоваться на сайте, добавить интересующий вас товар 
                            в корзину, выбрать способ доставки и оплаты (в случае необходимости, 
                            оставить комментарий) и нажать кнопку «Оформить заказ».</div>
                        </div>
                    </div>
                </div>
                <div class="flex-two">
                    <div class="flex-item-two">
                        <div class="title-flex">
                            <b>Минимальный заказ</b> 
                            <span>Необходимо набрать товара на 15 000 ₽. 
                            Минимальный объём покупки должен быть набран на сайте <b>optmoyo.ru </b>
                            или в совокупности с сайтом - партнером <a href="https://moyo.moda">https://moyo.moda</a>
                            Отправка заказов с двух сайтов будет осуществлена одним общим 
                            отправлением.</span>
                        </div>
                    </div>
                    <div class="flex-item-two">
                        <div class="text title-flex">
                            <b>Размерные ряды</b> 
                            <span>Выкупать товар размерными 
                               рядами не обязательно. У вас есть возможность 
                               формировать ассортимент под специфику своего клиента.</span>
                       </div>
                       <div>Мы не бронируем разные артикулы комплектами, 
                       при выпаде одного, второй артикул обязателен к выкупу.</div>
                    </div>
                    <div class="flex-item-two margin">
                        <div class="text title-flex">
                            <b>Выставление счета</b> 
                            <span>Сроки выставления 
                            счета по заказам 2-4 дня, зависит от 
                            заказанных брендов. Внимание: <span class="font-style">корректировка 
                            заказа возможна только по согласованию с менеджером.</span></span>
                        </div>
                       <div><span class="font-style">Оформленные заказы обязательны к выкупу.</span></div>
                    </div>
                    <div class="flex-item-two">
                        <div class="title-flex">
                            <b>Дозаказ</b> 
                            <span>Наш сайт позволяет в любой момент 
                            оформить дозаказ. Он объединится с основным заказом.</span>
                        </div>
                    </div>
                    <div class="flex-item-two">
                        <div class="title-flex">
                            <b>Сроки резерва</b>
                            <span>В течение недели заказ может находиться 
                            в статусе резерва. При внесении предоплаты сроки резерва 
                            обсуждаются с менеджером.</span>
                        </div>
                    </div>
                    <div class="flex-item-two">
                        <div class="title-flex">
                            <b>Сроки отгрузки</b> 
                            <span>Отгрузка осуществляется в течение 
                            3-5 рабочих дней с момента полной оплаты всех выставленных счетов.</span>
                        </div>
                    </div>
                    <div class="flex-item-two">
                        <div class="title-flex">
                            <b>Способы оплаты</b> 
                            <span>Оплатить размещенный заказ вы 
                            можете любым удобным наличным или безналичным способом.</span>
                        </div>   
                    </div>
                    <div class="flex-item-two">
                        <div class="text title-flex">
                           <b>Способы доставки</b> 
                           <span>Вы можете забрать свой 
                           заказ в пункте самовывоза по адресу <span class="no-wrap">г. Москва, </span> 
                           Окружной проезд, 30А. Если вы находитесь в другом городе, 
                           мы осуществляем бесплатную доставку до любой транспортной 
                           компании в Москве. Условия по доставке можно узнать <a href="#">здесь.</a></span>
                       </div>
                       <div>После оформления заказа смена транспортной 
                       компании возможна по согласованию с менеджером.</div>
                    </div>
                    <div class="flex-item-two">
                        <div class="title-flex">
                            <b>Возврат/обмен</b> 
                            <span>Возможен только в случае обнаружения брака 
                            или пересортицы по согласованию с менеджером, не позднее 
                            чем 14 дней после получения товара Вами в транспортной компании. 
                            Осуществляется обычным отправлением без наложенного платежа. 
                            Возвраты отправляйте на следующий адрес: 105077, Москва, до 
                            востребования, ИП Потапов Л.В.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-working-condition">Если у вас остались вопросы по поводу условий 
            сотрудничества и работы с нами, свяжитесь по телефону 
            <a href='tel:+74996088925'>8 (499) 608-89-25</a> или напишите на почту <a href="mailto:info@optmoyo.ru">info@optmoyo.ru. </a>
            Наши менеджеры ответят на все интересующие вопросы, 
            помогут сориентироваться в широком ассортименте нашего 
            сайта и окажут помощь в размещении заказа. Мы на связи 
            с понедельника по пятницу с 10.00 до 20.00. Удачных 
            закупок и хороших продаж!</div>
        </div>
    `
}

let link = [
    {
        title: 'Условия работы',
        link: '/#information/working-condition'
    }
]