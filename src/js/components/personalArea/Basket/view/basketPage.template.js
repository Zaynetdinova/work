import {tableProductsBasket} from "./tableProductsBasket";
import {resultSumBasket} from "./resultSumBasket";
import {mobileTableProductsBasket} from './mobileTableProductsBasket'

export function basketPageTemplate() {
    return `
    <div class="root" id="basket-page-js">
        <section class="desktop">
            ${tableProductsBasket()}
        </section>
        <section class="mobile">
            ${mobileTableProductsBasket()}
        </section>
        <section>
            ${resultSumBasket()}
        </section>
    </div>
       
    `
}
