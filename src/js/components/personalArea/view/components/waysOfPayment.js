import cash from "../../../../../images/icons/cash.svg";
import {inputChoice} from "./inputChoice";
export function waysOfPayment() {
    return `
        <div class="ways-of-payment">
            <div class="title">
                <img src="${cash}" alt="">
                Способы оплаты
            </div>
            <div class="wrapper-choice-input">${inputChoice()}</div>
        </div>
    `
}