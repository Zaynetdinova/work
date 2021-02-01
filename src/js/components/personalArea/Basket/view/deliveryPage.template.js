import {basketSteps} from "./basketSteps";
import pickup from '../../../../../images/icons/pickup.svg';
import transport from '../../../../../images/icons/transportCompany.svg'
import email from '../../../../../images/icons/mailDelivery.svg'
import money from '../../../../../images/icons/money.svg'
import {basketDeliveryBlock} from "./basketDeliveryBlock";
import {pagination} from "../../../common/pagination";
import {SumMoneySale} from "./sumMoneySale";
import {leftColumnAddress} from "./leftColumnAddress";
import {titleImg} from '../../../common/titleImg'
export function deliveryPageTemplate() {
    return `
        <div data-delivery-page-event-js id="delivery-page-js" class="Delivery-page">
            ${basketSteps()}
            <div class="basket-delivery">
                ${basketDeliveryBlock(data)}
            </div>
            <div class="wrapper-left-column">${leftColumnAddress()}</div>
           
            <div class="delivery-address">
                <div class="address">
                    ${leftColumnAddress()}
                </div>
                
                <div class="right-column">
                    ${titleImg(money,'Стоимость заказа')}
                    <div class="wrap-sum">${SumMoneySale(sumMoney)}</div>
                    <div class="result">Итого:  <b>1 234,00 ₽</b></div>
                </div>
            </div>
            <div class="wrapper-pagination">
                ${pagination('Назад к корзине','Далее к оплате')}</div>
        </div>
    `
}

let data = [
    {
        imgIcon: pickup,
        title: 'Самовывоз',
        text: 'Забрать заказ самостоятельно',
        inputs: [
            {
                titleCheckbox: 'г. Москва, Окружной проезд, 30А',
            },
        ]

    },
    {
        imgIcon: transport,
        title: 'Транспортная компания',
        text: 'Доставка до транспортной компании бесплатно',
        inputs: [
            {
                titleCheckbox: 'Байкал-Сервис',
            },
            {
                titleCheckbox: 'Возовоз',
            },
            {
                titleCheckbox: 'Деловые линии',
            },
            {
                titleCheckbox: 'Желдорэкспедиция',
            },
            {
                titleCheckbox: 'ПЭК',
            },
            {
                titleCheckbox: 'Энергия',
            },
        ]
    },
    {
        imgIcon: email,
        title: 'Доставка почтой',
        text: 'Доставка до вашего города оплачивается отдельно. ' +
            'Согласно тарифам почтовой организации. ' +
            'Будет выставлен отдельный счет на доставку.',
        inputs: [
            {
                titleCheckbox: 'EMS'
            },
            {
                titleCheckbox: 'СДЭК'
            },
            {
                titleCheckbox: 'Почта России'
            },
            {
                titleCheckbox: 'DPD'
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
