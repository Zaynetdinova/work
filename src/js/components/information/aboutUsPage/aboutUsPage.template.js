import img1 from '../../../../images/icons/aboutUs/1.svg'
import img2 from '../../../../images/icons/aboutUs/2.svg'
import img3 from '../../../../images/icons/aboutUs/3.svg'
import img4 from '../../../../images/icons/aboutUs/4.svg'
import img5 from '../../../../images/icons/aboutUs/5.svg'
import img6 from '../../../../images/icons/aboutUs/6.svg'
import img7 from '../../../../images/icons/aboutUs/7.svg'
import {navigationInformationAboutStore} from "../../common/navigationInformationAboutStore";
import {navigationMobile} from "../../common/navigation-mobile";
import {breadCrumbs} from '../../common/breadCrumbs'

export function aboutUsPageTemplate() {
    return `
         <div class="wrapper-aboutUs">
            ${breadCrumbs(link)}
           	<div class="title-shopping">О магазине</div>
           	<div class="wrapper-navigation-info">
           	    ${navigationInformationAboutStore('about-us')}
           	    ${navigationMobile('/#information/contacts','о нас','#information/working-condition')}
            </div>
            <div class="title-aboutUs">OptMoyo.Ru – это удобная платформа оптовой 
            интернет торговли, соединяющая производителей с потребителями.</div>
            <p>Вы “Совместная покупка”, владелец бутика или интернет-магазина? 
            Тогда Вам к нам! Здесь вы найдёте огромный выбор одежды и аксессуаров 
            для взрослых и детей, у нас есть всё, чтобы одеться с ног до головы, 
            а так же товары для дома и животных.</p>
            <div class="wrapper-flex">
                <div class="flex-one">
                    <div class="flex-item">
                        <img src="${img1}" alt="">
                        <div>
                            <div class="item-title">Постоянное пополнение ассортимента</div>
                            <div>Наша команда неустанно работает над расширением 
                            ассортимента и увеличением количества категорий товара 
                            на сайте. Новинки на сайте появляются почти каждый день! 
                            Вам не придется находиться в постоянном поиске нового 
                            качественного товара, новых интересных дизайнеров, 
                            новых трендовых брендов. Всё уже есть у нас!</div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <img src="${img2}" alt="">
                        <div>
                            <div class="item-title">Отзывчивые менеджеры</div>
                            <div>Любые вопросы, которые возникнут при работе 
                            с сайтом, Вы можете задать менеджерам, которые с 
                            радостью ответят на них. У нас так же работает форма 
                            быстрой связи через сообщения и есть возможность заказать 
                            обратный звонок.</div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <img src="${img3}" alt="">
                        <div>
                            <div class="item-title">Качественный товар</div>
                            <div>Мы серьезно относимся к формированию портфеля 
                            брендов на сайте и сотрудничаем только с теми производителями, 
                            которые заработали положительную репутацию и доверие клиентов. 
                            Но если что, любые претензии по качеству товара принимаем и 
                            решаем в Вашу пользу.</div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <img src="${img4}" alt="">
                        <div>
                            <div class="item-title">Цены от производителя</div>
                            <div>Цены на сайте те же, что предоставляют фабрики 
                            своим оптовым клиентам. Мы не заинтересованы «слить» 
                            остатки старых нераспроданных коллекций, а готовы 
                            предложить настоящие хиты и бестселлеры. Так сказать, 
                            «снимаем сливки» от лучших производителей.</div>
                        </div>
                    </div>
                </div>
                <div class="flex-two">
                    <div class="flex-item">
                        <img src="${img5}" alt="">
                        <div>
                            <div class="item-title">Высококачественные фото</div>
                            <div>Мы используем как фотографии предоставленные 
                            поставщикам продукции, так и отснятые в нашей фотостудии. 
                            В любом случае качество фотоматериала строго отслеживается и 
                            соответствует высоким требованиям.</div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <img src="${img6}" alt="">
                        <div>
                            <div class="item-title">Подробное описание</div>
                            <div>Каждой единице товара дано максимально подробное описание: 
                            страна производства, состав ткани, длина изделия, особенности 
                            кроя, качество наполнителя и прочее.</div>
                        </div>
                    </div>
                    <div class="flex-item">
                        <img src="${img7}" alt="">
                        <div>
                            <div class="item-title">Удобный сайт</div>
                            <div>Нами создан максимально удобный, информативный и 
                            интуитивно понятный оптовый интернет-магазин. Сайт ОптМоё воплотил все 
                            лучшее из on-line торговли, но мы не стоим на месте и 
                            постоянно дорабатываем и улучшаем данную площадку. Поэтому
                            с предложениями и пожеланиями по повышению качества работы сайта, 
                            обращайтесь на <a href="mailto:info@optmoyo.ru">info@optmoyo.ru</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-about-us">Все, что нужно для успешного бизнеса - это сотрудничество с сайтом 
            OptMoyo.Ru. Мы избавляем вас от лишней траты времени и денег, связанных 
            с поездками по компаниям, даем возможность сравнивать коллекции разных 
            производителей, не выходя из дома, и предлагаем огромный ассортимент и 
            постоянное обновление продукции. Мы открыты для всех, уделяем внимание 
            каждому.</div>
            <div class="business-text">Стройте бизнес с лучшими!</div>
        </div>
    `
}

let link = [
    {
        title: 'О нас',
        link: '/#information/about-us'
    }
]