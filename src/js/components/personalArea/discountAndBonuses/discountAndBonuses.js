import {Component} from "../../../core/Component";
import {discountAndBonusesTemplate} from "./discountAndBonuses.template";


export class DiscountAndBonuses extends Component {
    static className = 'Discount-and-bonuses'

    constructor($root) {
        super($root, {
            name: 'DiscountAndBonuses',
            listeners: ['click']
        });
    }
    toHTML() {
        return discountAndBonusesTemplate()
    }
}