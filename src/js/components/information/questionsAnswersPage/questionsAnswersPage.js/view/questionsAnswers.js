import sberbank from '../../../../../../images/information/sber.png'
import status from '../../../../../../images/icons/status.svg'
import statusGreen from '../../../../../../images/icons/status-green.svg'
import statusRed from '../../../../../../images/icons/status-red.svg'
import box from '../../../../../../images/icons/box.svg'
import boxGreen from '../../../../../../images/icons/box-green.svg'
import boxRed from '../../../../../../images/icons/box-red.svg'


export function questionsAnswers() {
    return `
        <div class="questions-answers">
            <div class="title">Ответы на часто возникающие вопросы</div>
            <div class="wrapper-questions">
                <section data-questions-answers-page-first-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="first-question-title-js">
                        <div class="question">Кто может сделать заказ на нашем сайте?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">Сотрудничаем с организациями всех форм собственности 
                    <span class="no-wrap">в т. ч.</span> “Совместными закупками”</div>
                </section>
                <section data-questions-answers-page-second-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="second-question-title-js">
                        <div class="question">Какая минимальная сумма заказа?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <p>Минимальный заказ <span class="no-wrap">15 000 ₽.</span> Без рядов, поштучно. С возможностью брони товара 
                        на <span class="no-wrap">10 дней.</span> Заказы сделанные на партнерском сайте 
                        <a href="https://moyo.moda" target="_blank">https://moyo.moda</a> суммируются 
                        с заказами на этом сайте. Напрмер, Вы можете сделать 
                        заказ на сайте optmoyo.ru на <span class="no-wrap">10 000 ₽</span> и оформить заказ на сайте 
                        <a href="https://moyo.moda" target="_blank">https://moyo.moda</a> на <span class="no-wrap">5 000 ₽.</span>
                        в сумме получается <span class="no-wrap">15 000 ₽</span> мы вас отгрузим. Отгрузка будет произведена одним 
                        отправлением, никаких дополнительных транспортных расходов это не повлечёт.</p>
                        <p>После размещения первого заказа в течение <span class="no-wrap">10 дней</span> вы можете отправлять дозаказы 
                        через корзину в любом объёме и количестве. 
                        Все дозаказы автоматически подцепятся к основному и будут объединены в один счёт, 
                        сумма которого должна быть не менее <span class="no-wrap">15 000 ₽.</span></p>
                        <p>Если сумма заказа меньше (такое возможно, если Вы делаете первый, пробный заказ), 
                        то стоимость доставки до Транспортной Компании - <span class="no-wrap">500 ₽.</span></p>
                    </div>
                </section>
                <section data-questions-answers-page-third-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="third-question-title-js">
                        <div class="question">Актуально ли наличие товара, приведённого на сайте?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <p>Работаем напрямую со складами фабрик, с актуальным наличием и фабричными ценами.</p>
                        <p>Представленное наличие на сайте в точности отражает остатки товара на складе фабрик, 
                        но незначительный процент может быть не подтверждён в виду подвижности склада.</p>
                        <p>Если вы НЕ хотите, чтобы в вашем личном кабинете отражались названия брендов, 
                        пожалуйста, сообщите об этом менеджеру <a  href="mailto:info@optmoyo.ru">info@optmoyo.ru,</a> 
                        <a class="no-wrap" href='tel:+74996088925'>8(499)608-89-25,</a> <a class="no-wrap" href='tel:+78003012575'>8(800)301-25-75.</a></p>
                    </div>
                </section>
                <section data-questions-answers-page-fourth-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="fourth-question-title-js">
                        <div class="question">После оформления заказа смогу ли видеть как формируется мой заказ?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <p>После оформления заказа вы можете отслеживать статус каждой заказанной единицы 
                        в личном кабинете. В личном кабинете, в <a href="">истории заказов</a> напротив каждой позиции 
                        расположены информационные иконки.</p>
                        <div class="wrapper-img-fourth">
                            <div class="img-fourth"></div>
                        </div>
                        <div class="wrapper-status">
                            <table class="line-one">
                                <tr>
                                    <td><div class="bold">Наличие на складе поставщика</div></td>
                                    <td><div class="line-status"><img src="${status}" alt="">товар в обработке</div></td>
                                    <td> <div class="line-status"><img src="${statusGreen}" alt="">товар подтвержден поставщиком</div></td>
                                    <td><div class="line-status"><img src="${statusRed}" alt="">товар закончился на складе поставщика</div></td>
                                </tr>
                                <tr>
                                    <td><div class="bold">Наличие на складе поставщика</div></td>
                                    <td><div class="line-status"><img src="${box}" alt="">ожидаем поступление к нам на склад</div></td>
                                    <td><div class="line-status"><img src="${boxGreen}" alt="">товар собран в вашу коробку</div></td>
                                    <td><div class="line-status"><img src="${boxRed}" alt="">товара нет в наличии</div></td>
                                </tr>
                            </table>
                            <div class="text-italic">В случае отсутствия каких-либо позиций, вы можете оперативно оформить новый заказ, который "прицепится" 
                            к текущему, пока по нему не выставлен счёт.</div>
                        </div>
                    </div>
                </section>
                <section data-questions-answers-page-fifth-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="fifth-question-title-js">
                        <div class="question">Какими способами я могу оплатить заказ?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <p>Оплатить заказ можно: наличными при получении, безналично (будет выставлен счет), 
                        картой на сайте без комиссии за перевод и с депозита на сайте. При оформлении заказа 
                        нажмите на выбранный вами способ:</p>
                        <div class="wrapper-img-fifth">
                            <div class="img-fifth"></div>
                        </div>
                        <div class="answer-box">
                            <div class="bold">Оплата картой</div>
                            <div class="text">Если выбран способ оплата картой, то после выставления счета в личном кабинете,
                            в истории заказов появится кнопка "Оплатить онлайн":</div>
                        </div>
                        <div class="wrapper-img-fifth-2">
                            <div class="img-fifth-2"></div>
                        </div>
                        <div class="columns">
                            <img class="img-sberbank" src="${sberbank}" alt="">
                            <div class="wrapper-box-text">
                                <div class="wrapper-box-one">
                                    <div>Если выбран способ оплата картой, то после выставления счета 
                                    в личном кабинете, в истории заказов появится кнопка "Оплатить онлайн".</div>
                                    <div class="box-text">После ввода данных автоматически спишется сумма заказа БЕЗ взимания комиссии за перевод.</div>
                                </div>
                                <div class="wrapper-box-two">
                                    <div class="attention">ВАЖНО!</div>
                                    <div>В связи с маркировкой товара и передачей данных в “Честный знак”, хотим 
                                    обратить внимание тех клиентов, которые покупают товар для перепродажи в свои 
                                    розничные магазины и сети и имеют юридическую форму “ИП” или “ООО”, производят оплату 
                                    картой привязанной к расчетному счету <span class="no-wrap">“ИП”</span> или <span class="no-wrap">“ООО”.</span> <b> При оплате такими картами, синхронно 
                                    пробивается кассовый чек и маркировка в “Честный знак”, то есть считается, что товар продан 
                                    конечному потребителю. Продать его ещё кому-либо официально уже нельзя.</b></div>
                                    <div class="box-text">Просим в таком случае быть внимательными и оплачивать заказы на расчётный счёт. 
                                    Если изначально была выбрана “Он-лайн оплата” на сайте, попросите менеджеров, поменять 
                                    Вам выбор оплаты “На расчётный счёт”.</div>
                                    <div>В “Честный знак” о данный проблеме написали, о ней они знают, как исправят, сообщим.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section data-questions-answers-page-sixth-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="sixth-question-title-js">
                        <div class="question">Как долго формируется заказ?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <div class="answer-text">Обычно заказ собирается за 2-4 дня, если склад поставщика находится в Москве, и 8-14 дней, 
                        если склад в другом городе (информация размещена внутри каждой карточки товара).</div>
                        <div class="wrapper-img-sixth">
                            <div class="img-sixth"></div>
                        </div>
                    </div>
                </section>
                <section data-questions-answers-page-seventh-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="seventh-question-title-js">
                        <div class="question">Могу ли я корректировать заказ?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <div class="text">Корректировка заказа возможна в личном кабинете до 5:00 МСК, нажав 
                        на крестик напротив позиции которую хотите удалить. После 5:00 МСК корректировка 
                        заказа возможна через звонок менеджеру в случаях если поставщик ещё не начал 
                        обработку заказа. Как правило поставщики начинают обработку заказов после 10:00 МСК, 
                        но есть поставщики, которые начинают обрабатку заказов раньше.</div>
                    </div>
                </section>
                <section data-questions-answers-page-eighth-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="eighth-question-title-js">
                        <div class="question">Почему важно правильно пройти регистрацию?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <div class="text">1 июня 2020 года вступила в силу маркировка товаров. Движение 
                        товара отслеживает организация “Честный знак” и вся попадаемая под маркировку 
                        продукция является продукцией строгой отчётности. Поэтому, важно изначально правильно 
                        заполнить все поля при регистрации. От юридических лиц, мы просим больше информации, 
                        чем от физических лиц. Маркировка физическим лицам не транслируется.</div>
                    </div>
                </section>
                <section data-questions-answers-page-ninth-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="ninth-question-title-js">
                        <div class="question">Могу ли я изменить свой логин?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <div class="text">Логин, это адрес Вашей электронной почты. Он заводится при регистрации 
                        и к нему привязываются все данные о клиенте и его история заказов. Вы в исключительных 
                        случаях можете изменить логин, обратившись напрямую к менеджерам. Процедура замены не 
                        простая и требует времени.</div>
                    </div>
                </section>
                <section data-questions-answers-page-tenth-title-js class="number-question">
                    <div data-parent-question-js class="question-title" id="tenth-question-title-js">
                        <div class="question">Бесплатна ли доставка?</div>
                        <div class="arrow"></div>
                    </div>
                    <div class="wrapper-answers">
                        <p>Доставка до ТК осуществляется бесплатно при соблюдении условия минимального заказа 
                        15000 ₽. Возможна, в некоторых случаях, отправка груза и на меньшую сумму, но тогда 
                        доставка до ТК будет стоить 500 ₽.</p>
                        <p>Мы работаем со следующими ТК: 
                        <a href="https://www.baikalsr.ru/" target="_blank">Байкал Сервис,</a> 
                        <a href="https://vozovoz.ru/" target="_blank">Возовоз,</a>  
                        <a href="https://www.dellin.ru/" target="_blank">Деловые линии,</a> 
                        <a href="https://www.jde.ru/" target="_blank">ЖелДорЭкспедиция,</a> 
                        <a href="https://pecom.ru/" target="_blank">ПЭК,</a> 
                        <a href="https://nrg-tk.ru/" target="_blank">Энергия.</a></p>
                    </div>
                </section>
            </div>
        </div>
    `
}