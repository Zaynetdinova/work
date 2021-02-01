import {wrapperBox} from "./wrapperBox";
import {bottomBox} from "./bottomBox";

export function discountAndBonusesPageTemplate() {
    return `
        <div class="discount-and-bonuses">
            ${wrapperBox()}
            ${bottomBox()}
        </div>
    `
}