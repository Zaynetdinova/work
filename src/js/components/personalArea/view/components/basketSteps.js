import basket from '../../../../../images/icons/basket.svg'
import delivery from '../../../../../images/icons/delivery.svg'
import payment from '../../../../../images/icons/pay.svg'
import pointer from '../../../../../images/icons/pointer.svg'
import pointerGrey from '../../../../../images/icons/pointer-grey.svg'
export function basketSteps() {
    return `
        <div class="Steps">
            <div class="basket-steps">
                <div class="icon-text">
                    <img src="${basket}" alt="">
                    <div class="active">Корзина</div>
                </div>
                <img src="${pointer}" alt="">
                <div class="icon-text">
                    <img src="${delivery}" alt="">
                    <div class="active">Доставка</div>
                </div>
                <img src="${pointerGrey}" alt="">
                <div class="icon-text">
                    <img src="${payment}" alt="">
                    <div class="active">Оплата</div>
                </div>
            </div>
            <hr class="line-delivery">
        </div>
    `
}