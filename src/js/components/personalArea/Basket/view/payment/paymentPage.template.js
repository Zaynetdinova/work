import cash from '../../../../../../images/icons/cash.svg'
import nonCash from '../../../../../../images/icons/non-cash.svg'
import card from '../../../../../../images/icons/payment-by-card.svg'
import deposit from '../../../../../../images/icons/payment-from-deposit.svg'
import comment from '../../../../../../images/icons/comment.svg'
import money from '../../../../../../images/icons/money.svg'
import {SumMoneySale} from '../sumMoneySale'
import {pagination} from '../../../../common/pagination'
import {waysOfPayment} from './waysOfPayment'
import {orderCommentPayment} from './orderСommentPayment'
import {titleImg} from '../../../../common/titleImg'
import {personalCheckedOptions} from '../../../../common/personalCheckedOptions'
import {basketSteps} from '../../../../common/basketSteps'

export function paymentPageTemplate() {
    return ` 
        <div data-parent-basket-component-js 
             id="personal-area-basket-payment-js"
             class="Payment-Page">
            ${basketSteps()}
            ${waysOfPayment()}
            ${orderCommentPayment()}
            <div class="wrapper-sum-mobile">
                <div class="title">Стоимость заказа</div>
                <div>${SumMoneySale(sumMoney)}</div>
                 <div class="result">Итого:  <b>1 234,00 ₽</b></div>
            </div>
            <div class="basket-delivery">
                ${personalCheckedOptions(data)}
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
            titleCheckbox: 'Оплата наличными',
            id: 'cash-js'
          },
        ]
    },
    {
        imgIcon: nonCash,
        title: 'Безналичная оплата',
        text: 'Будет выставлен счет (на сайте в личном кабинете и по электронной почте)',
        inputs: [
            {
              titleCheckbox: 'Безналичная оплата',
              id: 'nonCash-js'
            },
        ]
    },
    {
        imgIcon: card,
        title: 'Оплата картой',
        text: 'Оплата картой без процентов на сайте через платёжную систему (после подтверждения заказа поставщиками)',
        inputs: [
        {
          titleCheckbox: 'Оплата картой на сайте',
          id: 'card-js'
        },
        ]
    },
    {
        imgIcon: deposit,
        title: 'Оплата с депозита',
        text: 'Оплата заказа с депозита на сайте',
        inputs: [
            {
              titleCheckbox: 'Оплата с депозита',
              id: 'deposit-js'
            },
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
