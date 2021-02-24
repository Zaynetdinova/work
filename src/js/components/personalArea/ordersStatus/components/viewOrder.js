import {viewOrderTable} from "./viewOrderTable";
import {SumMoneySale} from "../../Basket/view/sumMoneySale";
import {notIncludedTable} from "./notIncludedTable";

export function viewOrder() {
    return `
        <div class="view-order">
            <div class="wrapper-order-number">
                <div class="wrap-header-order">
                    <div class="wrapper-characteristic-order">
                        <a href="/#personal-area/order-status" class="button-back">
                            <div class="back-arrow"></div>
                        </a>
                        <div class="wrapper-text">
                            <div class="one-string">
                                <span class="order">Заказ № 12345</span>
                                <span class="assembled">Полностью собран на складе</span>
                                <span class="invoice-contract">Счет договор</span>
                            </div>
                            <div class="two-string">
                                <span><b>Статус:</b> <span>Новый</span></span>
                                <span class="line"></span>
                                <span><b>Доставка:</b> <span>Самовывоз</span></span>
                                <span class="line"></span>
                                <span><b>Получатель:</b> <span>Получатель</span></span>
                            </div>
                        </div>            
                    </div>
                    <div class="wrapper-refund-amount">
                        <div class="refund-amount-text">Сумма к возврату:</div>
                        <div class="refund-amount-sum">1 234,00 ₽</div>
                    </div>
                </div>
                ${viewOrderTable()}
                <div class="wrapper-column">
                    <div class="column">
                        <div class="wrap-sum">${SumMoneySale(sumMoney)}</div>
                        <div class="result">Итого:  <b>1 234,00 ₽</b></div>
                    </div>
                </div>
                
            </div>
            <div class="wrapper-not-included">
                <div class="title">ТОВАРЫ НЕ ВОШЕДШИЕ В ЗАКАЗ</div>
                ${notIncludedTable()}
            </div>
        </div>
    `
}

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
