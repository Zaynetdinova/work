import {tableProductsBasket} from "../components/tableProductsBasket";
import {resultSumBasket} from "../components/resultSumBasket";

export function basketPageTemplate() {
    return `
        ${tableProductsBasket()}
        ${resultSumBasket()}
    `
}