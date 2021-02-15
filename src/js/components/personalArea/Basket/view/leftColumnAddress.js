import place from '../../../../../images/icons/place.svg'
import {imgCloseIcon} from "./imgCloseIcon";
import {titleImg} from '../../../common/titleImg'

export function leftColumnAddress() {
    return `
    <div data-parent-delivery-block-js class="left-column-address">
        <section data-open-section-js>
            <div class="title-img">
                <div class="img-wrapper">
                    <img src="${place}" alt="">
                    <div>Выберите адрес доставки</div>
                </div>
                <div class="arrow"></div>
            </div>
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