import cash from '../../../../../../images/icons/cash.svg'
import {inputChoice} from "../../../../common/personalCheckedOptions";

export function waysOfPayment() {
    return `
        <div class="ways-of-payment">
            <div class="title">
                <img src="${cash}" alt="">
                Способы оплаты
            </div>
            <div class="wrapper-choice-input">
                ${ChoiceInput(item)}
            </div>
        </div>
    `
}


function ChoiceInput(item) {
    const items = item.map((item) => {
        return `
            <div class="choice">
                <label class="radio" id="${item.id}">
                    <input data-checkbox-input-js type="radio" name="g">
                    <span></span>
                    <div>${item.titleCheckbox}</div>
                </label>
            </div>
        `
    })
    return `${items.join('')}`
}

let item = [
    {
        titleCheckbox: 'Оплата наличными',
        id: 'cash-js'
    },
    {
        titleCheckbox: 'Безналичная оплата',
        id: 'nonCash-js'
    },
    {
        titleCheckbox: 'Оплата картой на сайте',
        id: 'card-js'
    },
    {
        titleCheckbox: 'Оплата с депозита',
        id: 'deposit-js'
    },
]