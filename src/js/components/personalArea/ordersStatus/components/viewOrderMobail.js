import back from '../../../../../images/icons/back-button.svg';
import invoiceArgument from '../../../../../images/icons/orderStatus/Invoice-agreement.svg'
import {infoProduct} from "../../../common/infoProduct";
import {iconTitle} from "./iconTitle";
import orderProcessing from "../../../../../images/icons/order-processing.svg";
import box from "../../../../../images/icons/box.svg";
import noCancel from "../../../../../images/icons/no-cancel.svg";
import women from '../../../../../images/bestsellers/1/img1.png'

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
            <div class="wrapper-order-table">
                <div class="wrapper-product">
                    <img class="img-product" src="${women}" alt="">
                    <div class="wrapper-info">
                        <div class="name-brand">Vittoria Vicci</div>
                        <div class="name-product">Наименование товара</div>
                        ${infoProduct(info)}
                        <table class="example-wrapper">
                            <td>${iconTitle(exampleOne)}</td> 
                        </table>
                    </div>
                </div>
                <div class="more-text">Подробнее</div>
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
    {
        icon: noCancel,
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