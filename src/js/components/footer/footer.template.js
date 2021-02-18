import partner from '../../../images/footer/partner.svg'
import schema  from '../../../images/footer/shema.svg'
import card from '../../../images/footer/card_bank.svg'
import phone from '../../../images/icons/icon_phone_black.svg'
import {sidebarPoint} from "../common/sidebarPoint";

export function footerTemplate() {
  return `
     <footer>
        <div class='bg-footer'>
            <div class="footer-mobile-points-wrapper">
              <div class='points'>
                <div class="points-footer">
                    ${sidebarPoint(point, 'notArrow')}
                </div>
              </div>
            </div>
            <div class='wrapper'>
                <div class='content'>                
                    <div class='box'>
                        <div class="title-footer">ИНФОРМАЦИЯ</div>
                        <nav>
                            <ul>
                                <li><a href="/#information/about-us">О нас</a></li>
                                <li><a href="/#information/working-condition">Условия работы</a></li>
                                <li><a href="/#information/about-shopping">Доставка</a></li>
                                <li><a href="/#information/about-payment">Оплата</a></li>
                                <li><a href="/#information/question-answers">Ответы на вопросы</a></li>
                                <li><a href="/#information/contacts">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class='box'>
                        <div class="title-footer">для клиентов</div>
                        <nav>
                            <ul>
                                <li><a href="/#personal-area/personal-data">Личный кабинет</a></li>
                                <li><a href="/#personal-area/basket">Корзина</a></li>
                                <li><a href="/#personal-area/favorites">Избранное</a></li>
                                <li><a href="/#personal-area/order-status">Заказы и их статус</a></li>
                                <li><a href="/#information/return">Возврат</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class='box'>
                        <div class="title-footer">сервис</div>
                        <nav>
                            <ul>
                                <li><a href="/#information/size">Таблица размеров</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class='box'>
                        <div class="title-footer">СОТРУДНИЧЕСТВО</div>
                        <nav>
                            <ul>
                                <li><a href="/#information/cooperation">Поставщикам</a></li>
                            </ul>
                        </nav>
                    </div>     
                    <section class="contact">
                        <div class='left'>
                            <div class='social'>
                                <span class='s-title'>СОЦСЕТИ</span>
                                <div class='s-img'>
                                    <div class="wrapper-social">
                                        <a href="https://vk.com/optmoyo" target="_blank"><div class="vk"></div></a>              
                                    </div>   
                                    <div class="wrapper-social">
                                        <a href="https://www.facebook.com/OptMoyo.Ru/" target="_blank"><div class="fb"></div></a>
                                    </div>                
                                    <div class="wrapper-social">
                                        <a class="instagram" href="#"><div class="tw"></div></a>
                                    </div>
                                </div>
                            </div>
                            <div class='partners'>
                                <div class='s-title'>ПАРТНЕРЫ</div>
                                <div class='s-partners'><a href="https://moyo.moda/" target="_blank"><img src=${partner} alt='partner'></a></div>
                            </div>
                        </div>
                        <div class='right'>
                            <div class='phone'>
                                <a class="footer-phone" href='tel:+74996088925'>8 (499) 608-89-25</a>
                                <a href='tel:+78003012575'>8 (800) 301-25-75</a>
                                <article class="btnRequestCall backCall-js">
                                    <div class="textCall">ЗАКАЗАТЬ ЗВОНОК</div>
                                    <img class="imgPhone" src="${phone}" alt="">
                                </article>
                            </div>
                            <div class='mode'>
                                ПОНЕДЕЛЬНИК – ПЯТНИЦА: <span class='redact'> С 10:00 ДО 20:00 </span> <br> СУББОТА, ВОСКРЕСЕНЬЕ – <span class='redact'>ВЫХОДНЫЕ ДНИ </span> <br> МОСКВА <span class='line-footer'></span> ОКРУЖНОЙ ПРОЕЗД <span class='line-footer'></span> 30А
                            </div>
                            <div class='schema'>
                                <a class="a-schema" href="http://localhost:3000/#information/contacts" target="_blank">СХЕМА ПРОЕЗДА</a>
                                <img class="schema-img" src=${schema} alt='schema'>
                            </div>
                            <div class='bank_card'>
                                <img src=${card} alt='card'>
                            </div>
                    </div> 
                    </section>                                                   
                </div>
            </div>
        </div>
        <div class='bg-down'>
            <div class='wrapper'>
                <div class='text'>2021 © OPTMOYO.RU</div>
            </div>
        </div>
    </footer>
  `
}

let point = [
  {
    title: 'ИНФОРМАЦИЯ',
    id: 'info',
    img: false,
    category: [{
      category: 'О нас',
      link: '/#information/about-us'
    },
      {
        category: 'Условия работы',
        link: '/#information/working-condition'
      },
      {
        category: 'Доставка',
        link: '/#information/about-shopping'
      },
      {
        category: 'Оплата',
        link: '/#information/about-payment'
      },
      {
        category: 'Ответы на вопросы',
        link: '/#information/question-answers'
      },
      {
        category: 'Контакты',
        link: '/#information/contacts'
      }
      ]
  },

  {
    title: 'ДЛЯ КЛИЕНТОВ',
    id: 'client',
    img: false,
    category: [
      {
        category: 'Личный кабинет',
        link: '/#personal-area/personal-data'
      },
      {
        category: 'Корзина',
        link:'/#personal-area/basket'
      },
      {
        category: 'Избранное',
        link: '/#personal-area/favorites'
      },
      {
        category: 'Заказы и их статус',
        link: '/#personal-area/order-status'
      },
      {
        category: ' Возврат',
        link: '/#information/return'
      },
    ]
  },

  {
    title: 'СЕРВИС',
    id: 'service',
    img: false,
    category: [
      {
        category: 'Таблица размеров',
        link: '/#information/size'
      },
    ]
  },

  {
    title: 'СОТРУДНИЧЕСТВО',
    id: 'cooperation',
    img: false,
    category: [
      {
        category: 'Поставщикам',
        link: '/#information/cooperation'
      },
    ]
  },
]


