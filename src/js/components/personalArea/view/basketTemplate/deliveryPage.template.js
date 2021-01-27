import {basketSteps} from "../components/basketSteps";
import pickup from '../../../../../images/icons/pickup.svg';
import transport from '../../../../../images/icons/transportCompany.svg'
import email from '../../../../../images/icons/mailDelivery.svg'
import place from '../../../../../images/icons/place.svg'
import close from '../../../../../images/icons/exit.svg'
import money from '../../../../../images/icons/money.svg'
import {basketDeliveryBlock} from "../components/basketDeliveryBlock";
import {pagination} from "../../../common/pagination";
import {SumMoneySale} from "../components/sumMoneySale";

export function deliveryPageTemplate() {
    return `
        <div class="Delivery-page">
            ${basketSteps()}
            <div class="basket-delivery">
                ${basketDeliveryBlock(data)}
            </div>
            <div class="delivery-address">
                <div class="left-column">
                    <div class="title">
                        <img src="${place}" alt="">
                        Выберите адрес доставки
                    </div>
                    <div class="wrap-close-text">
                        <img src="${close}" alt="">
                        105187, г. Москва, ул. Окружной проезд, 30А
					</div>
					<div class="button-add">Добавить новый адрес</div>
                </div>
                <div class="right-column">
                    <div class="title">
                        <img src="${money}" alt="">
                        Стоимость заказа
                    </div>
                    <div class="wrap-sum">${SumMoneySale(sumMoney)}</div>
                    <div class="result">Итого:  <b>1 234,00 ₽</b></div>
                </div>
            </div>
            <div class="wrapper-pagination">${pagination('Назад к корзине','Далее к оплате')}</div>
        </div>
    `
}

let data = [
    {
        imgIcon: pickup,
        title: 'Самовывоз',
        text: 'Забрать заказ самостоятельно',
    },
    {
        imgIcon: transport,
        title: 'Транспортная компания',
        text: 'Доставка до транспортной компании бесплатно',
    },
    {
        imgIcon: email,
        title: 'Доставка почтой',
        text: 'Доставка до вашего города оплачивается отдельно. ' +
            'Согласно тарифам почтовой организации. ' +
            'Будет выставлен отдельный счет на доставку.',
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