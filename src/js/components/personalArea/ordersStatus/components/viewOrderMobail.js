import back from '../../../../../images/icons/back-button.svg';
import invoiceArgument from '../../../../../images/icons/orderStatus/Invoice-agreement.svg'
import {infoProduct} from "../../../common/infoProduct";
import {status} from "./iconTitle";
import orderProcessing from "../../../../../images/icons/order-processing.svg";
import box from "../../../../../images/icons/box.svg";
import noCancel from "../../../../../images/icons/no-cancel.svg";
import women from '../../../../../images/bestsellers/1/img1.png'
import {Sale} from "../../../common/sale";
import {SumMoneySale} from "../../Basket/view/sumMoneySale";

export function viewOrderMobile() {
    return `
        <div class="view-order-mobile">
            <div class="wrapper-order-number">
                <div class="wrapper-text">
                    <div class="one-string">
                        <div class="order">Заказ № 12345</div>
                        <div class="assembled">Полностью собран на складе</div>
                        <div class="invoice-contract">
                            <img src="${invoiceArgument}" alt="">
                            Счет договор
                        </div>
                    </div>
                    <div class="two-string">
                        <div><b>Статус:</b> <span>Новый</span></div>
                        <div><b>Доставка:</b> <span>Самовывоз</span></div>
                        <div><b>Получатель:</b> <span>Получатель</span></div>
                    </div>
                    <div class="wrapper-refund-amount">
                        <div class="refund-amount-text">Сумма к возврату:</div>
                        <div class="refund-amount-sum">1 234,00 ₽</div>
                    </div>
                </div>
                <img src="${back}" alt="">
            </div>
            <div data-view-oder-page class="wrap-js">
                <div class="wrapper-order-table">
                    <div class="wrapper-product">
                        <img class="img-product" src="${women}" alt="">
                        <div class="wrapper-info">
                            <div class="name-brand">Vittoria Vicci</div>
                            <div class="name-product">Наименование товара</div>
                            ${infoProduct(info)}
                            <div class="bottom-line-order">
                                <div class="example-wrapper">                              
                                    <div class="icon-title-status">
                                        <div class="wrapper-icon-title">
                                            ${status(exampleOne)}
                                        </div>
                                    </div>
                                </div>
                                <div data-parent-order-js class="more-details" id="more-details-view-order-page">
                                    <span class="more">Подробнее</span>
                                    <span class="hide">Скрыть</span>
                                    <div class="arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper-characteristics-good">
                    <div class="post1">
                        <div class="col">Размер</div>
                        <div class="size-col">42</div>
                        <div class="size-col">42</div>
                    </div>
                    <div class="post2">
                        <div class="col">Количество</div>
                        <div class="size-col">
                            <div class="wrap-size">
                                <div>88</div>      
                                <div class="crest"></div>
                            </div>
                        </div>
                        <div class="size-col">
                            <div class="wrap-size">
                                <div>88</div>      
                                <div class="crest"></div>
                            </div>
                        </div>
                    </div>
                    <div class="post3">
                        <div class="col">Цена/Сумма</div>
                        <div class="size-col">
                            <div class="wrap-sum-pay">
                                <div class="wrapper-sale">
                                    ${Sale()}
                                     <div class="sale-sum">- 234,00 ₽</div>
                                </div>
                                <span class="sum">1 234,00 ₽</span>
                                <span class="number-sum">2 468,00 ₽</span>
                            </div>
                        </div>
                        <div class="size-col">
                            <div class="wrap-sum-pay">
                                <span class="sum">1 234,00 ₽</span>
                                <span class="number-sum">2 468,00 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		    <div class="wrapper-column">
                <div class="column">
                    <div class="wrap-sum">${SumMoneySale(sumMoney)}</div>
                    <div class="result">Итого:  <b>1 234,00 ₽</b></div>
                </div>
            </div>
            <div data-not-included-page class="not-included-table-mobile">
                <div class="title">ТОВАРЫ НЕ ВОШЕДШИЕ В ЗАКАЗ</div>
                <div class="wrapper-order-table">
                    <div class="wrapper-product">
                        <img class="img-product" src="${women}" alt="">
                        <div class="wrapper-info">
                            <div class="name-brand">Vittoria Vicci</div>
                            <div class="name-product">Наименование товара</div>
                            ${infoProduct(info)}
                            <div class="product-out">Нет в наличии</div>
                            <div data-parent-order-js class="more-details" id="more-details-not-included-table">
                                <span class="more">Подробнее</span>
                                <span class="hide">Скрыть</span>
                                <div class="arrow"></div>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="wrap-sum-col">
                    <div class="post">
                        <div class="col">Размер</div>
                        <div class="sum">42</div>
                    </div>
                    <div class="post">
                        <div class="col">Количество</div>
                        <div class="sum">2</div>
                    </div>
				</div>
            </div>
        </div>
    `
}

let exampleOne = [
    {
        icon: orderProcessing,
        title: ''
    },
    {
        icon: box,
        title: ''
    },
]

let info = [
    {
        infoType: 'Артикул:',
        infoResult: '01.2345/678'
    },
    {
        infoType: 'ID:',
        infoResult: '247355'
    },
    {
        infoType: 'Цвет:',
        infoResult: 'Коричневый'
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