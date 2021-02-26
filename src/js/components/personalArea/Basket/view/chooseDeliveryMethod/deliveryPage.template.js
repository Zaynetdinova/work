import pickup from '../../../../../../images/icons/pickup.svg';
import transport from '../../../../../../images/icons/transportCompany.svg'
import email from '../../../../../../images/icons/mailDelivery.svg'
import money from '../../../../../../images/icons/money.svg'
import {pagination} from '../../../../common/pagination'
import {SumMoneySale} from '../sumMoneySale'
import {leftColumnAddress} from './leftColumnAddress'
import {titleImg} from '../../../../common/titleImg'
import {personalCheckedOptions} from '../../../../common/personalCheckedOptions'
import {basketSteps} from '../../../../common/basketSteps'
import {breadCrumbs} from "../../../../common/breadCrumbs";
import {navigation} from "../../../../common/navigation";
import {navigationMobile} from "../../../../common/navigation-mobile";

export function deliveryPageTemplate() {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${breadCrumbs(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="name-user">Имя пользователя</div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('basket')}
                ${navigationMobile('/#personal-area/favorites','Корзина','/#personal-area/personal-data')}
            </div>
            <div data-parent-basket-component-js 
                 data-delivery-page-event-js id="delivery-page-js" class="Delivery-page">
                ${basketSteps('/#personal-area/delivery-page','cursor: default')}
                
                <div class="basket-delivery">
                    ${personalCheckedOptions(data)}
                </div>
                
                <div class="delivery-address">
                    <div data-parent-delivery-block-js class="address">
                        ${leftColumnAddress()}
                    </div>
                    
                    <div class="right-column">
                        ${titleImg(money,'Стоимость заказа')}
                        <div class="wrap-sum">${SumMoneySale(sumMoney)}</div>
                        <div class="result">Итого:  <b>1 234,00 ₽</b></div>
                    </div>
                </div>
                
                <div class="wrapper-pagination">
                    ${pagination('Назад к корзине','/#personal-area/basket','Далее к оплате','/#personal-area/payment-page' )}
                </div>
            </div>
        </div>
    `
}

let link = [
    {
        title: 'Корзина',
        link: '/#personal-area/basket'
    }
]

let data = [
    {
        id: 'delivery-page-1-js',
        dataAtr: 'data-content-1-js',
        imgIcon: pickup,
        title: 'Самовывоз',
        text: 'Забрать заказ самостоятельно',
        inputs: [
            {
                titleCheckbox: 'г. Москва, Окружной проезд, 30А',
                id: 'pickup-js'
            },
        ]
    },

    {
        id: 'delivery-page-2-js',
        dataAtr: 'data-content-2-js',
        imgIcon: transport,
        title: 'Транспортная компания',
        text: 'Доставка до транспортной компании бесплатно',
        inputs: [
            {
                titleCheckbox: 'Байкал-Сервис',
                id: 'transport-baikal-service-js'
            },
            {
                titleCheckbox: 'Возовоз',
                id: 'transport-vozovoz-js'
            },
            {
                titleCheckbox: 'Деловые линии',
                id: 'transport-business-line-js'
            },
            {
                titleCheckbox: 'Желдорэкспедиция',
                id: 'transport-zheldorexpedition-js'
            },
            {
                titleCheckbox: 'ПЭК',
                id: 'transport-pec-js'
            },
            {
                titleCheckbox: 'Энергия',
                id: 'transport-energy-js'
            },
        ]
    },

    {
        id: 'delivery-page-3-js',
        dataAtr: 'data-content-3-js',
        imgIcon: email,
        title: 'Доставка почтой',
        text: 'Доставка до вашего города оплачивается отдельно. ' +
            'Согласно тарифам почтовой организации. ' +
            'Будет выставлен отдельный счет на доставку.',
        inputs: [
            {
                titleCheckbox: 'EMS',
                id: 'email-ems-js'
            },
            {
                titleCheckbox: 'СДЭК',
                id: 'email-sdek-js'
            },
            {
                titleCheckbox: 'Почта России',
                id: 'email-post-office-js'

            },
            {
                titleCheckbox: 'DPD',
                id: 'email-dpd-js'
            },
        ]
    }
]

let sumMoney = [
    {
        title: 'Общая стоимость товаров',
        sum: '1 234,00 ₽'
    },
    {
        title: 'Скидка',
        sum: '1 234,00 ₽'
    },
    {
        title: 'Скидка по промокоду',
        sum: '0,00 ₽'
    },
    {
        title: 'Накопительная скидка',
        sum: '0,00 ₽'
    },
    {
        title: 'Бонус за выкуп',
        sum: '0,00 ₽'
    },
]
