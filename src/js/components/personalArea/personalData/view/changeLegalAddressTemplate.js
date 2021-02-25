import {titleRegistration} from "../../../common/popupDefaultTemplate/titleRegistration";
import {buttonRegistration} from "../../../common/popupDefaultTemplate/buttonRegistration";
import {nesessaryFildsTemplate} from "../../../common/entry/view/nesesaryFilds.template";
import {checkboxRegistration} from "../../../common/popupDefaultTemplate/checkboxRegistration";

export function changeLegalAddressTemplate() {
    return `
    ${titleRegistration('Адрес')}
        <form class="form-js">
            <div class="box-input wrap-title-address">
                <div class="wrap-input">
                    <div class="wrap-title-buy">Юр. адрес</div>
                    <div class="wrap-address">
                        <input class="input-name" placeholder="Почтовый индекс*" type="text">
                        <input class="input-name" placeholder="Страна*" type="text">
                        <input class="input-name" placeholder="Город*" type="text"> 
                        <input class="input-name" placeholder="Улица*" type="text">
                        <div class="wrapper-address-home">
                            <input class="input-name" placeholder="Дом*" type="text">
                            <input class="input-name" placeholder="Корп. / Стр.*" type="text"> 
                            <input class="input-name" placeholder="Кв. / Оф.*" type="text">
                        </div>
                    </div>
                </div>
                <div class="wrap-input">
                    <div class="wrap-title-buy">Факт. адрес</div>
                    <div class="wrap-address">
                        <input class="input-name" placeholder="Почтовый индекс*" type="text">
                        <input class="input-name" placeholder="Страна*" type="text">
                        <input class="input-name" placeholder="Город*" type="text"> 
                        <input class="input-name" placeholder="Улица*" type="text">
                        <div class="wrapper-address-home">
                            <input class="input-name" placeholder="Дом*" type="text">
                            <input class="input-name" placeholder="Корп. / Стр.*" type="text"> 
                            <input class="input-name" placeholder="Кв. / Оф.*" type="text">
                        </div>
                    </div>
                </div>
            </div>
            ${nesessaryFildsTemplate()}
            <div class="wrap-legal-address-link">
                ${checkboxRegistration('Юр. адрес совпадает с фактическим')}
            </div>
            <div class="wrapper-button">${buttonRegistration('Сохранить')}</div>
        </form>
    `
}