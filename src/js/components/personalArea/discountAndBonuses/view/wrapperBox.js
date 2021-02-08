import {tableDiscount} from "./tableDiscount";
import {textBonuses} from "./textBonuses";

export function wrapperBox() {
    return `
        <div class="wrapper-box">
            <div class="box-first">
                <div class="wrapper-title-and-img">
                    <div class="title-and-text">
                        <div class="title">Скидка за суммарный объём</div>
                        <p>Во внимание принимаются все отправленные заказы <b> только за три предыдущих месяца. </b>
                         Скидка рассчитывается от общей суммы этих заказов и может изменяться при формировании 
                         возвратов. Суммы (оплаченные заказы) начнут отображаться на странице после перевода 
                         заказа в статус «отправлен». Данный статус присваивается заказу после получения 
                         документов из транспортной компании. Как правило, на следующий рабочий день. 
                         Сумма заказов начнет влиять на скидку с первого числа следующего месяца.</p>     
                    </div>
                    <div class="wrapper-money">
                        <div class="img1"></div>
                        <div class="img2"></div>
                        <div class="img3"></div>
                        <div class="img4"></div>
                        <div class="img5"></div>
                    </div>
                </div>
                <div class="wrapper-text-bonuses-desktop">${textBonuses()}</div>
            </div>
            <div class="box-second">
                <div class="title-volume">Объем за 3 месяца</div>
                <div class="wrapper-box-second">
                    ${tableDiscount(table)}
                    <div class="wrapper-bonus-account">
                        <div class="img-result"></div>
                        <div class="title-result">На вашем бонусном счёте:</div>
                        <div class="sum-result">1 234,00 ₽</div>
                    </div>
                </div>
            </div>
            <div class="wrapper-text-bonuses-mobile">${textBonuses()}</div>
        </div>
    `
}

let table = [
    {
        name: 'Сентябрь 2020',
        money: '39 138,00 ₽',
        color: '#3D3D3C;',
    },
    {
        name: 'Октябрь 2020',
        money: '39 138,00 ₽',
        color: '#3D3D3C;',
    },
    {
        name: 'Ноябрь 2020',
        money: '0,00 ₽',
        color: '#3D3D3C;',
    },
    {
        name: '<b>Итого за 3 мес.</b>',
        money: '95 938,00 ₽',
        color: '#3D3D3C;',
    }
]