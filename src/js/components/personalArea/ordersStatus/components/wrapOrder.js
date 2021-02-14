import img1 from '../../../../../images/icons/new-order.svg'
import img2 from '../../../../../images/icons/processed-order.svg'
import img3 from '../../../../../images/icons/send-order.svg'
import img4 from '../../../../../images/icons/paid-order.svg'
import img5 from '../../../../../images/icons/canceled-order.svg'
import img6 from '../../../../../images/icons/package-order.svg'
import img7 from '../../../../../images/icons/done-order.svg'
import plus from '../../../../../images/icons/orderStatus/plus.svg'
import invoiceArgument from '../../../../../images/icons/orderStatus/Invoice-agreement.svg'
import invoice from '../../../../../images/icons/orderStatus/Invoice.svg'
import confirm from '../../../../../images/icons/orderStatus/confirm.svg'
import nonConfirm from '../../../../../images/icons/orderStatus/not-c.svg'
import {nameOrder, orderName} from "./nameOrder";
import {iconTitle} from "./iconTitle";
import {headerOrder} from "./headerOrder";

export function wrapOrder() {
    return `
        <div class="wrapper-orders-status">
            <table>
                ${headerOrder()}      
                <tr class="auxiliary-unit-top">
                    <td class="line-top" colspan="7">
                         <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="one-td">
                            ${nameOrder(img1, 'Новый')}
                            ${orderName(order)}
                        </div>
                    </td>
                    <td>
                        <div class="quantity-order">1 шт.</div>
                    </td>
                    ${iconTitle(exampleOne)}
                    <td>
                        <div class="summa">1 234,00 ₽</div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay">Ожидается оплата</div>
                            <a class="pay-online" href="">Оплатить онлайн</a>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img2,'Обрабатывается')}
                        ${orderName(order)}
                    </td>                 
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleTwo)}
                    <td>
                        <div class="summa">1 234,00 ₽</div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay">Ожидается оплата</div>
                            <a class="pay-online" href="">Оплатить онлайн</a>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img3,'Отправлен')}
                        ${orderName(order)}
                    </td>                   
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleThree)}
                    <td>
                        <div class="summa">1 234,00 ₽</div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay-green">Заказ оплачен</div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img4,'Оплачен')}
                        ${orderName(order)}
                    </td>
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleFour)}
                    <td>
                        <div class="summa">1 234,00 ₽</div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay-green">Заказ оплачен</div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img5,'Отменен')}
                        ${orderName(order)}
                    </td>                    
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleOne)}
                    <td>
                        <div class="summa">1 234,00 ₽</div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay-green">Заказ оплачен</div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img3,'Отправлен')}
                        ${orderName(orderTwo)}
                    </td>
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleOne)}
                    <td>
                        <div class="summa">
                            <div class="summa-return-title">К возврату</div>
                            <div class="summa-return">-1 234,00 ₽</div>
                        </div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay-green">Заказ оплачен</div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="additional-order">
                    <td colspan="7">
                        <div class="title-add">
                            <img src="${plus}" alt="">
                            <div><a href="">Дозаказ #12345 от 01.12.2020</a> – <b>186 шт. / 12 345,67 ₽</b></div>
                        </div>
                    </td>
                </tr>
                <tr class="additional-order">
                    <td colspan="7">
                        <div class="title-add">
                            <img src="${plus}" alt="">
                            <div><a href="">Дозаказ #12345 от 01.12.2020</a> – <b>186 шт. / 12 345,67 ₽</b></div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-line">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img6,'На упаковке')}
                        ${orderName(order)}
                    </td>                   
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleOne)}
                    <td>
                        <div class="summa">1 234,00 ₽</div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay-green">Заказ оплачен</div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td class="one-td">
                        ${nameOrder(img7,'Упакован')}
                        ${orderName(orderTwo)}
                    </td>                    
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    ${iconTitle(exampleOne)}
                    <td>
                        <div class="summa">
                            <div class="summa-return-title">К возврату</div>
                            <div class="summa-return">-1 234,00 ₽</div>
                        </div>
                    </td>
                    <td>
                        <div class="pay-order">
                            <div class="way-pay-green">Заказ оплачен</div>
                        </div>
                    </td>
                </tr>
                <tr class="auxiliary-unit-bottom">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td colspan="7">
                        <span></span>
                    </td>
                </tr>
            </table>
        </div>
    `
}


let exampleOne = [
    {
        icon: invoiceArgument,
        title: '<a href="">Счёт-договор</a>'
    },
    {
        icon: invoice,
        title: '<a href="">Накладная Торг12</a>'
    },
    {
        icon: confirm,
        title: 'Товар подтвердил поставщик'
    },
    {
        icon: nonConfirm,
        title: 'Товар собран на складе'
    },
]

let exampleTwo = [
    {
        icon: '',
        title: ''
    },
    {
        icon: '',
        title: ''
    },
    {
        icon: confirm,
        title: 'Товар подтвердил поставщик'
    },
    {
        icon: '',
        title: ''
    },
]

let exampleThree = [
    {
        icon: invoiceArgument,
        title: '<a href="">Счёт-договор</a>'
    },
    {
        icon: '',
        title: ''
    },
    {
        icon: confirm,
        title: 'Товар подтвердил поставщик'
    },
    {
        icon: nonConfirm,
        title: 'Товар собран на складе'
    },
]

let exampleFour = [
    {
        icon: '',
        title: ''
    },
    {
        icon: '',
        title: ''
    },
    {
        icon: confirm,
        title: 'Товар подтвердил поставщик'
    },
    {
        icon: nonConfirm,
        title: 'Товар собран на складе'
    },
]

let order = [
    {
        title: 'Доставка:',
        name: 'Самовывоз'
    },
    {
        title: 'Получатель:',
        name: 'ИП Получатель'
    }
]

let orderTwo = [
    {
        title: 'Транспортная компания:',
        name: 'Желдорэкспедиция'
    },
    {
        title: 'Номер отправления:',
        name: 'БАБШВИМ-2/1310'
    },
    {
        title: 'Получатель: ',
        name: 'ИП Овчинникова Людмила Витальевна'
    }
]