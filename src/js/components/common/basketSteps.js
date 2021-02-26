import basket from '../../../images/icons/basket.svg'
import delivery from '../../../images/icons/delivery.svg'

export function basketSteps(link,cursor) {
    return `
        <div class="Steps">
            <div class="basket-steps">
                <a href="/#personal-area/basket" class="icon-text" style="cursor: pointer">
                    <img src="${basket}" alt="">
                    <div class="active">Корзина</div>
                </a>
                <div class="pointer-arrow"></div>
                <a href="${link}" class="icon-text" style="${cursor}">
                    <img src="${delivery}" alt="">
                    <div class="active">Доставка</div>
                </a>
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
