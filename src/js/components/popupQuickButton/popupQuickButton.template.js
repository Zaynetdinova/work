import {goodStock, transitionBrand} from "../cardProductPage/view/transitionBrand";
import {star} from "../cardProductPage/view/star";

export function popupQuickButtonTemplate() {
    return `
    <div class="root">
        <div class="header-popup">
            ${transitionBrand(brand)}
            <div class="wrapper-star-goodStock">
                ${star()}
                ${goodStock()}
            </div>
        </div>           
    </div>  
    `
}

let brand = [
    {
        brand: 'Vittoria Vicci',
        category: 'Платье'
    }
]