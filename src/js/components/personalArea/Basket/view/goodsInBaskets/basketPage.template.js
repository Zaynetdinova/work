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
                <article class="continue-button">Продолжить покупки</article>
                <div data-parent-js id="checkout-order-delivery-js" class="arrange-button">Оформить заказ</div>
            </div>
        </section>
    </div>
       
    `
}
