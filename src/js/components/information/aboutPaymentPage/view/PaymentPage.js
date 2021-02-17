import cash from '../../../../../images/icons/cash-color.svg'
import noncash from '../../../../../images/icons/noncash-color.svg'

export function paymentPage() {
    return `
        <div class="wrapper-payment-page">
            <div class="title">Оплата</div>
            <div class="wrapper-columns">
                <div class="column-one">
                    <div class="wrap-column-one">
                        <div class="wrapper-text">
                            <p class="text"><span>Важно!</span> В связи с маркировкой 
                            товара и передачей данных в “Честный знак”, хотим обратить внимание тех клиентов, 
                            которые покупают товар для перепродажи в свои розничные магазины и сети и имеют юридическую форму “ИП” или “ООО”, 
                            производят оплату картой привязанной к расчетному счету “ИП” или “ООО”. <b> При оплате такими картами, синхронно 
                            пробивается кассовый чек и маркировка в “Честный знак”, то есть считается, что товар продан конечному потребителю. 
                            Продать его ещё кому-либо официально уже нельзя.</b></p>
                            <p class="text-two">Просим в таком случае быть внимательными и оплачивать заказы на расчётный счёт. 
                            Если изначально была выбрана “Он-лайн оплата” на сайте, попросите менеджеров, поменять Вам выбор оплаты “На расчётный счёт”.</p>
                            <p class="text"> В “Честный знак” о данный проблеме написали, о ней они знают, как исправят, сообщим.</p>
                        </div>                   
                    </div>
                </div>
                <div class="column-two">
                    <section data-payment-page-top-box-js class="top-box">
                        <div data-parent-button-js class="box-title" id="top-box-js">
                            <div class="img-title">
                                <img src="${cash}" alt="">
                                <div>Способы оплаты</div>
                            </div>
                            <div class="arrow"></div>
                        </div>
                        <div class="wrapper-text-column">
                            <p class="text">После получения вами счета, его необходимо оплатить в течение 3-х рабочих дней. 
                            Если заказ не будет оплачен в данный срок, он будет аннулирован и расформирован.</p>
                            <p class="text-two">Оплатить заказ можно одним из трех способов:</p>
                            <p class="text">- банковский перевод на расчетный счёт<br>
                            - банковской картой без процентов на сайте<br>
                            - наличными или банковской картой в офисе</p>
                        </div>                      
                    </section>
                    <section data-payment-page-bottom-box-js class="bottom-box">                   
                        <div data-parent-button-js class="box-title" id="bottom-box-js">
                            <div class="img-title">
                                <img src="${noncash}" alt="">
                                <div>Оплата банковской картой</div>
                            </div>
                            <div class="arrow"></div>
                        </div>
                        <div class="wrapper-text-column">
                            <p class="text">Для оплаты товара с помощью банковской карты необходимо 
                            при оформлении заказа выбрать “Оплата картой”.</p>
                            <p class="text-two">Для оплаты (ввода реквизитов вашей карты) вы будете перенаправлены 
                            на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации 
                            осуществляется в защищённом режиме с использованием протокола шифрования SSL. 
                            В случае если ваш банк поддерживает технологию безопасного проведения интернет-платежей 
                            Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа 
                            также может потребоваться ввод специального пароля.</p>
                            <p class="text">Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой 
                            персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена 
                            третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по 
                            банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., 
                            MasterCard Europe Sprl, JCB.</p>
                        </div> 
                    </section>
                </div>
            </div>
        </div>
    `
}