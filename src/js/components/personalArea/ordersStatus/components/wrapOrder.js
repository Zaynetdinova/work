import img1 from '../../../../../images/icons/new-order.svg'
import img2 from '../../../../../images/icons/processed-order.svg'
import img3 from '../../../../../images/icons/send-order.svg'
import invoiceArgument from '../../../../../images/icons/orderStatus/Invoice-agreement.svg'
import invoice from '../../../../../images/icons/orderStatus/Invoice.svg'
import confirm from '../../../../../images/icons/orderStatus/confirm.svg'
import nonConfirm from '../../../../../images/icons/orderStatus/not-c.svg'

export function wrapOrder() {
    return `
        <div class="wrapper-orders-status">
            <table>
                <tr>
                    <td class="first-string status-1">Заказ</td>
                    <td class="first-string status-2"></td>
                    <td class="first-string status-3">Количество</td>
                    <td class="first-string status-4">Статус</td>
                    <td class="first-string status-5">Сумма</td>
                    <td class="first-string status-6">Оплата</td>
                </tr>
                <tr class="auxiliary-unit-top">
                    <td class="line-top" colspan="7">
                         <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="img-order">
                            <img src="${img1}" alt="">
                            <div class="title">Новый</div>
                        </div>
                    </td>
                    <td>
                        <div class="wrapper-order-name">
                            <div class="order-name">
                                <span class="order-title">Заказ № 12345 <span class="data">от 01.12.2020</span></span>
                                <span class="order-title-delivery">Доставка: <span class="order-delivery">Самовывоз</span></span>
                                <span class="order-title-delivery">Получатель: <span class="order-delivery">ИП Получатель</span></span>
                            </div>
                            <div>
                                <a href="" class="link-see-order">
                                    Посмотреть заказ
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-order">1 шт.</div>
                    </td>
                    <td class="wrapper-icon-title">
                        <div class="icon-title">
                            <img src="${invoiceArgument}" alt="">
                            <div><a href="">Счёт-договор</a></div>
                        </div>
                        <div class="icon-title">
                            <img src="${invoice}" alt="">
                            <div><a href="">Накладная Торг12</a></div>
                        </div>
                        <div class="icon-title">
                            <img src="${confirm}" alt="">
                            <div>Товар подтвердил поставщик</div>
                        </div>
                        <div class="icon-title">
                            <img src="${nonConfirm}" alt="">
                            <div>Товар собран на складе</div>
                        </div>
                    </td>
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
                    <td>
                        <div class="img-order">
                            <img src="${img2}" alt="">
                            <div class="title">Обрабатывается</div>
                        </div>
                    </td>
                    <td>
                        <div class="wrapper-order-name">
                            <div class="order-name">
                                <span class="order-title">Заказ № 12345 <span class="data">от 01.12.2020</span></span>
                                <span class="order-title-delivery">Доставка: <span class="order-delivery">Самовывоз</span></span>
                                <span class="order-title-delivery">Получатель: <span class="order-delivery">ИП Получатель</span></span>
                            </div>
                            <div>
                                <a href="" class="link-see-order">
                                    Посмотреть заказ
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    <td class="wrapper-icon-title">
                        <div class="icon-title"></div>
                        <div class="icon-title"></div>
                        <div class="icon-title">
                            <img src="${confirm}" alt="">
                            <div>Товар подтвердил поставщик</div>
                        </div>
                        <div class="icon-title"></div>
                    </td>
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
                    <td>
                        <div class="img-order">
                            <img src="${img3}" alt="">
                            <div class="title">Отправлен</div>
                        </div>
                    </td>
                    <td>
                        <div class="wrapper-order-name">
                            <div class="order-name">
                                <span class="order-title">Заказ № 12345 <span class="data">от 01.12.2020</span></span>
                                <span class="order-title-delivery">Доставка: <span class="order-delivery">Самовывоз</span></span>
                                <span class="order-title-delivery">Получатель: <span class="order-delivery">ИП Получатель</span></span>
                            </div>
                            <div>
                                <a href="" class="link-see-order">
                                    Посмотреть заказ
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="quantity-order">2 шт.</div>
                    </td>
                    <td class="wrapper-icon-title">
                        <div class="icon-title">
                            <img src="${invoiceArgument}" alt="">
                            <div><a href="">Счёт-договор</a></div>
                        </div>
                        <div class="icon-title">
                            
                        </div>
                        <div class="icon-title">
                            <img src="${confirm}" alt="">
                            <div>Товар подтвердил поставщик</div>
                        </div>
                        <div class="icon-title">
                            <img src="${nonConfirm}" alt="">
                            <div>Товар собран на складе</div>
                        </div>
                    </td>
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
            </table>
        </div>
    `
}