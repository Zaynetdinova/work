import {titleRegistration} from "../common/titleRegistration";
import close from "../../../images/icons/close-regisr.svg";

export function registration() {
    return `
        <div class="Registration">
            <div class="wrapper-Registration">
                <div class="close"><article class="close-icon"  id="closeImg-entry"><img src="${close}" alt=""></article></div>
                ${titleRegistration('Регистрация')}
                <div class="wrapper-btn-enter">
                    <div class="buyForMe">Покупаю для себя</div>
                    <div class="buyForSale">Покупаю для продажи</div>
                </div>
            </div>
        </div> 
    `
}