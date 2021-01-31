import basket from '../../../../../images/icons/basket.svg'
import delivery from '../../../../../images/icons/delivery.svg'

export function basketSteps() {
    return `
        <div class="Steps">
            <div class="basket-steps">
                <div class="icon-text" style="cursor: pointer">
                    <img src="${basket}" alt="">
                    <div class="active">Корзина</div>
                </div>
                <div class="pointer-arrow"></div>
                <div class="icon-text">
                    <img src="${delivery}" alt="">
                    <div class="active">Доставка</div>
                </div>
                <div class="pointer-grey"></div>
                <div class="icon-text">
                    <div class="pay-icon"></div>
                    <div class="active">Оплата</div>
                </div>
            </div>
            <hr class="line-delivery">
        </div>
    `
}