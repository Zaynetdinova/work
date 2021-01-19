import {titleRegistration} from '../../titleRegistration'
import close from '../../../../../images/icons/close-regisr.svg'

export function registrationTemplate() {
    return `
        <div id="registration-js" class="wrapper-Registration">
            <div class="close"><article class="close-icon"  id="closeImg-entry"><img src="${close}" alt=""></article></div>
            ${titleRegistration('Регистрация')}
            <div class="wrapper-btn-enter">
                <div class="buyForMe">Покупаю для себя</div>
                <div class="buyForSale">Покупаю для продажи</div>
            </div>
        </div>
      
    `
}