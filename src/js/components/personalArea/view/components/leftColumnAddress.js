import {titleImg} from "./titleImg";
import place from '../../../../../images/icons/place.svg'
import {imgCloseIcon} from "./imgCloseIcon";

export function leftColumnAddress() {
    return `
    <div class="left-column-address">                 
        ${titleImg(place,'Выберите адрес доставки')}
        <div class="wrap-close-text">
            ${imgCloseIcon()}
            105187, г. Москва, ул. Окружной проезд, 30А
        </div>
        <div class="button-add">Добавить новый адрес</div>
    </div>
    `
}