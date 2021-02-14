import done from '../../../../../images/icons/done.svg'
import call from '../../../../../images/icons/call.png'
export function orderDone() {
    return `
        <div class="order-done">
            <div>
                <div class="wrapper-title">
                    <img src="${done}" alt="">
                    <div class="title">
                        <div class="order-done-title">Заказ отправлен</div>
                        <div>Номер заказа <b>12345</b></div>
                    </div>
                </div>
                <p>Счёт будет выставлен в течение 1-2х дней с оповещением на электронную почту и телефон. 
                Этапы сборки заказа Вы можете отслеживать в личном кабинете в разделе <a href="">История заказов.</a></p>
                <p>Если у Вас остались вопросы, свяжитесь с нами по телефонам <a href="">8 (800) 301-25-75 </a>
                <br>или <a href="">8 (499) 608-89-25</a>  в рабочее время.</p>
                <div class="wrapper-button">
                    <a href="/" class="main-button">На главную</a>
                    <a href="/#personal-area/order-status" class="history-order-button">История заказов</a>
                </div>
            </div>
            <img src="${call}" alt="">
        </div>
    `
}