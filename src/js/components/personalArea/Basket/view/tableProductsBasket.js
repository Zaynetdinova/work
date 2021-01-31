import women from '../../../../../images/bestsellers/1/img1.png'
import close from '../../../../../images/icons/close_popup_black.svg'
import {sizeInfo} from "../../../common/sizeInfo";
import {infoProduct} from "../../../common/infoProduct";
import {Sale} from "../../../common/sale";
import {quantity} from "../../../common/quantity";
import {favorites} from "../../../common/favorites";

export function tableProductsBasket() {
    return `
        <table class="wrapper-basket">
            <tr class="title-main-string">
                <td class="first-string name-percent">Наименование</td>
                <td class="first-string size-percent">Размер</td>
                <td class="first-string quantity-percent">Количество</td>
                <td class="first-string price-percent">Цена</td>
                <td class="first-string sale-percent">Скидка</td>
                <td class="first-string sum-percent">Сумма</td>
                <td class="first-string" style="width: 12%"></td>
            </tr>
            <tr class="good">
                <td class="name-product">
                    <div class="wrapper-product">
                        <img class="img-product" src="${women}" alt="">
                        <div class="wrapper-info">
                            <div class="wrapper-favorites">${favorites()}</div>
                            <div class="name-brand">Vittoria Vicci</div>
                            <div class="name-product">Наименование товара</div>
                            ${infoProduct(info)}
                        </div>
                    </div>
                </td>
                <td class="size-product">
                    ${sizeInfo(ArrSizes)}
                </td>
                <td class="quantity-product">
                    ${quantity()}
                    ${quantity()}
                    ${quantity()}
                </td>
                <td class="price-product">
                    <div class="number-sum">1 234,00 ₽</div>
                    <div class="number-sum">1 234,00 ₽</div>
                    <div class="number-sum">1 234,00 ₽</div>
                </td>
                <td class="sale-product">
                    <div class="wrapper-sale-product">
                        ${Sale()}
                        <div class="sale-sum">234,00 ₽</div>
                    </div>
                </td>
                <td class="sum-product">
                    <div class="number-sum" style="font-weight: bold">1 234,00 ₽</div>
                    <div class="number-sum" style="font-weight: bold">1 234,00 ₽</div>
                    <div class="number-sum" style="font-weight: bold">1 234,00 ₽</div>
                </td>
                <td class="selected-dimensions-product">
                    <div class="change-selected-dimensions">Изменить выбранные размеры</div>
                </td>
            </tr>
			</table>
    `
}

let info = [
    {
        infoType: 'ID:',
        infoResult: '247355'
    },
    {
        infoType: 'Цвет:',
        infoResult: 'Коричневый'
    },
]
const ArrSizes = [
    {size: '40'},
    {size: '42'},
    {size: '44'},
]