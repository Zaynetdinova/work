import {tableDiscount} from "./tableDiscount";

export function bottomBox() {
    return `
        <div class="bottom-box">
            <div class="bottom-box-first">
                <div class="title">Последние начисления</div>
                <div class="wrapper-order">
                    ${tableDiscount(table)}
                </div>
            </div>
            <div class="bottom-box-second">
                <div class="title">Потраченные бонусы</div>
                <div class="wrapper-order">
                    ${tableDiscount(table2)}
                </div>
            </div>
        </div>
    `
}

let table = [
    {
        name: '<b>Заказ №3893</b> &ensp; отправлен 30.10.20 11:20',
        money: '+ 234,00 ₽',
        color: '#009295;',
    },
    {
        name: '<b>Заказ №3894</b> &ensp; отправлен 31.10.20 12:20',
        money: '+ 234,00 ₽',
        color: '#009295;',
    },
    {
        name: '<b>Заказ №3895</b> &ensp; отправлен 01.11.20 13:20',
        money: '+ 234,00 ₽',
        color: '#009295;',
    },
    {
        name: '<b>Заказ №3896</b> &ensp; отправлен 02.11.20 15:20',
        money: '+ 234,00 ₽',
        color: '#009295;',
    },
    {
        name: '<b>Заказ №3897</b> &ensp; отправлен 03.11.20 16:20',
        money: '+ 234,00 ₽',
        color: '#009295;',
    },
]
let table2 = [
    {
        name: '<b>Заказ №3893</b> &ensp; заказан 30.10.20 14:20',
        money: '1 234,00 ₽',
        color: '#AB064E;',
    }
]