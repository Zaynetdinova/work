import {tableProductsBasket} from "./tableProductsBasket";
import {resultSumBasket} from "./resultSumBasket";
import {mobileTableProductsBasket} from './mobileTableProductsBasket'

export function basketPageTemplate() {
    return `
    <div data-parent-basket-component-js 
         class="basket-page" 
         id="basket-page-js">
        <section class="desktop">
            ${tableProductsBasket()}
        </section>
        <section class="mobile">
            ${mobileTableProductsBasket()}
        </section>
        <section>
            ${resultSumBasket()}
        </section>
        <section>
              <div class="button-buy-arrange">
                <a href="/#catalog" class="continue-button">Продолжить покупки</a>
                <a href="/#personal-area/delivery-page" data-parent-js id="checkout-order-delivery-js" class="arrange-button">Оформить заказ</a>
            </div>
        </section>
    </div>
       
    `
}
