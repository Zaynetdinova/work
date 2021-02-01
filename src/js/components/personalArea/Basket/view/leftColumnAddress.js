import place from '../../../../../images/icons/place.svg'
import {imgCloseIcon} from "./imgCloseIcon";
import {titleImg} from '../../../common/titleImg'

export function leftColumnAddress() {
    return `
    <div data-parent-delivery-block-js class="left-column-address">
        <section data-open-section-js>
            ${titleImg(place,'Выберите адрес доставки')}
        </section>                 
        
        <section data-content-js class="content">
            <div class="wrap-close-text">
                ${imgCloseIcon()}
                <span>105187, г. Москва, ул. Окружной проезд, 30А</span>
            </div>
            <div class="button-add">Добавить новый адрес</div>
        </section>
    </div>
    `
}