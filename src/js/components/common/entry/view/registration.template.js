import {titleRegistration} from '../../titleRegistration'
import close from '../../../../../images/icons/close-regisr.svg'

export function registrationTemplate() {
    return `
            ${titleRegistration('Регистрация')}
            <div class="wrapper-btn-enter">
                <div class="buyForMe" id="buy-for-me-js">Покупаю для себя</div>
                <div class="buyForSale" id="buy-for-sale-js">Покупаю для продажи</div>
            </div>
           `
}