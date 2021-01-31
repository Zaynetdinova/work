import {basketSteps} from "./basketSteps";
import {basketDeliveryBlock} from "./basketDeliveryBlock";
import cash from "../../../../../images/icons/cash.svg";
import nonCash from "../../../../../images/icons/non-cash.svg";
import card from "../../../../../images/icons/payment-by-card.svg";
import deposit from '../../../../../images/icons/payment-from-deposit.svg'
import comment from '../../../../../images/icons/comment.svg'
import money from '../../../../../images/icons/money.svg'
import {SumMoneySale} from "./sumMoneySale";
import {pagination} from "../../../common/pagination";
import {waysOfPayment} from "./waysOfPayment";
import {orderCommentPayment} from "./orderСommentPayment";
import {titleImg} from '../../../common/titleImg';

export function paymentPageTemplate() {
    return ` 
        <div class="Payment-Page">
            ${basketSteps()}
            ${waysOfPayment()}
            ${orderCommentPayment()}
            <div class="wrapper-sum-mobile">
                <div class="title">Стоимость заказа</div>
                <div>${SumMoneySale(sumMoney)}</div>
                 <div class="result">Итого:  <b>1 234,00 ₽</b></div>
            </div>
            <div class="basket-delivery">
                ${basketDeliveryBlock(data)}
            </div>
            <div class="delivery-address">
                <div class="left-column">
                    ${titleImg(comment,'Комментарий к заказу')}
                    <textarea class="comment" placeholder="Ваш комментарий к заказу (не обязательно)"></textarea>
                </div>
                <div class="right-column">
                    ${titleImg(money,'Стоимость заказа')}
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
        inputs: [
          {
            titleCheckbox: 'test',
          },{
            titleCheckbox: 'test',
          },{
            titleCheckbox: 'test',
          },{
            titleCheckbox: 'test',
          }
        ]
    },
    {
        imgIcon: nonCash,
        title: 'Безналичная оплата',
        text: 'Будет выставлен счет (на сайте в личном кабинете и по электронной почте)',
      inputs: [
        {
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'test',
        }
      ]
    },
    {
        imgIcon: card,
        title: 'Оплата картой',
        text: 'Оплата картой без процентов на сайте через платёжную систему (после подтверждения заказа поставщиками)',
      inputs: [
        {
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'test',
        }
      ]
    },
    {
        imgIcon: deposit,
        title: 'Оплата с депозита',
        text: 'Оплата заказа с депозита на сайте',
      inputs: [
        {
          titleCheckbox: 'test',
        },{
          titleCheckbox: 'super',
        }
      ]
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
