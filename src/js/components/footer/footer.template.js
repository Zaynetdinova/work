import vk from '../../../images/footer/1.svg'
import fb from '../../../images/footer/2.svg'
import tw from '../../../images/footer/3.svg'
import pen from '../../../images/footer/4.svg'
import mail from '../../../images/footer/5.svg'
import od from '../../../images/footer/6.svg'
import instagram from '../../../images/footer/Instagram.svg'
import partner from '../../../images/footer/partner.svg'
import schema  from '../../../images/footer/shema.svg'
import card from '../../../images/footer/card_bank.svg'
import {footer_adaptive} from "./components/footer-adaptiv";
import {sale} from "../common/sale";

export function footerTemplate() {
  return `
    <footer>
        <div class='bg-footer'>
            <div class='footer-mobail'>${footer_adaptive(point)}</div>
            <div class='wrapper'>
                <div class='content'>
                
                    <div class='box'>
                            <h4>ИНФОРМАЦИЯ</h4>
                            <nav>
                                <ul>
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Условия работы</a></li>
                                    <li><a href="#">Доставка</a></li>
                                    <li><a href="">Оплата</a></li>
                                    <li><a href="#">Ответы на вопросы</a></li>
                                    <li><a href="#">Контакты</a></li>
                                </ul>
                            </nav>
                    </div>
                    <div class='box'>
                            <h4>для клиентов</h4>
                            <nav>
                                <ul>
                                    <li><a href="#">Личный кабинет</a></li>
                                    <li><a href="#">Корзина</a></li>
                                    <li><a href="#">Избранное</a></li>
                                    <li><a href="#">Заказы и их статус</a></li>
                                    <li><a href="">Возврат</a></li>
                                </ul>
                            </nav>
                        </div>
                    <div class='box'>
                            <h4>сервис</h4>
                            <nav>
                                <ul>
                                    <li><a href="#">Таблица размеров</a></li>
                                    <li><a href="#">Заказать звонок</a></li>
                                </ul>
                            </nav>
                        </div>
                    <div class='box'>
                            <h4>СОТРУДНИЧЕСТВО</h4>
                            <nav>
                                <ul>
                                    <li><a href="#">Поставщикам</a></li>
                                </ul>
                            </nav>
                    </div>
                
                    <div class='contact'>
                        <div class='left'>
                            <div class='social'>
                                <span class='s-title'>СОЦСЕТИ</span>
                                <div class='s-img'>
                                    <a class="instagram" href="#"><img src=${instagram} alt='tw' width="30px" height="30px"></a>
                                    <a href="https://vk.com/optmoyo" target="_blank"><img src=${vk} alt='vk'></a>                                  
                                    <a href="https://www.facebook.com/OptMoyo.Ru/" target="_blank"><img src=${fb} alt='fb'></a>
                                    
                                
                                </div>
                            </div>
                            <div class='partners'>
                                <div class='s-title'>ПАРТНЕРЫ</div>
                                <div class='s-img'><a href="https://moyo.moda/" target="_blank"><img src=${partner} alt='partner'></a></div>
                            </div>
                        </div>
                        <div class='right'>
                            <div class='phone'>
                                <a class="footer-phone" href='tel:+74996088925'>8 (499) 608-89-25</a>
                                <a href='tel:+78003012575'>8 (800) 301-25-75</a>
                            </div>
                            <div class='mode'>
                                ПОНЕДЕЛЬНИК – ПЯТНИЦА: <span class='redact'> С 10:00 ДО 20:00 </span> <br> СУББОТА, ВОСКРЕСЕНЬЕ – <span class='redact'>ВЫХОДНЫЕ ДНИ </span> <br> МОСКВА <span class='line-footer'></span> ОКРУЖНОЙ ПРОЕЗД <span class='line-footer'></span> 30А
                            </div>
                            <div class='schema'>
                                <a href="https://yandex.ru/maps/?from=api-maps&ll=37.968130%2C55.503040&mode=usermaps&origin=jsapi_2_1_77&um=constructor%3AWBTjAg5GRe0kP9x5FU3LeB13aYBomqUm&z=10" target="_blank">СХЕМА ПРОЕЗДА</a>
                                <img class="schema-img" src=${schema} alt='schema'>
                            </div>
                            <div class='bank_card'>
                                <img src=${card} alt='card'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='bg-down'>
            <div class='wrapper'>
                <div class='text'>2020 © OPTMOYO.RU</div>
            </div>
        </div>
    </footer>
  `
}

let point = [
    {
        title: 'ИНФОРМАЦИЯ',
        id: 'info'

    },
    {
        title: 'ДЛЯ КЛИЕНТОВ',
        id: 'client'
    },
    {
        title: 'СЕРВИС',
        id: 'service'
    },
    {
        title: 'СОТРУДНИЧЕСТВО',
        id: 'cooperation'
    }
]
//     <a href="#"><img src=${tw} alt='tw'></a>
// <a href="#"><img src=${pen} alt='pen'></a>
// <a href="#"><img src=${mail} alt='mail'></a>
// <a href="#"><img src=${od} alt='od'> </a>