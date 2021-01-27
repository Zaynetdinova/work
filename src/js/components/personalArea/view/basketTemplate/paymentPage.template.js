import {basketSteps} from "../components/basketSteps";
import {basketDeliveryBlock} from "../components/basketDeliveryBlock";
import cash from "../../../../../images/icons/cash.svg";
import nonCash from "../../../../../images/icons/non-cash.svg";
import card from "../../../../../images/icons/payment-by-card.svg";
import deposit from '../../../../../images/icons/payment-from-deposit.svg'
import comment from '../../../../../images/icons/comment.svg'
import money from '../../../../../images/icons/money.svg'
import {SumMoneySale} from "../components/sumMoneySale";
import {pagination} from "../../../common/pagination";

export function paymentPageTemplate() {
    return ` 
        <div class="Payment-Page">
            ${basketSteps()}
            <div class="basket-delivery">
                ${basketDeliveryBlock(data)}
            </div>
            <div class="delivery-address">
                <div class="left-column">
                    <div class="title">
                        <img src="${comment}" alt="">
                        Комментарий к заказу
                    </div>
                    <input class="comment" type="text" placeholder="Ваш комментарий к заказу (не обязательно)">
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
            <div class="wrapper-pagination">${pagination('Назад к доставке','Отправить заказ')}</div>
        </div>
    `
}

let data = [
    {
        imgIcon: cash,
        title: 'Оплата наличными',
        text: 'Оплата наличными или картой при получении заказа в офисе',
    },
    {
        imgIcon: nonCash,
        title: 'Безналичная оплата',
        text: 'Будет выставлен счет (на сайте в личном кабинете и по электронной почте)',
    },
    {
        imgIcon: card,
        title: 'Оплата картой',
        text: 'Оплата картой без процентов на сайте через платёжную систему (после подтверждения заказа поставщиками)',
    },
    {
        imgIcon: deposit,
        title: 'Оплатить с депозита',
        text: 'Оплата заказа с депозита на сайте',
    },
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