import {tableProductsBasket} from "./tableProductsBasket";
import {resultSumBasket} from "./resultSumBasket";

export function basketPageTemplate() {
    return `
    <div id="basket-page-js">
     ${tableProductsBasket()}
        ${resultSumBasket()}
    
    </div>
       
    `
}
