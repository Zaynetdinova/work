import {Component} from "../../../core/Component";
import {discountAndBonusesTemplate} from "./discountAndBonuses.template";


export class DiscountAndBonuses extends Component {
    static className = 'Discount-and-bonuses'

    constructor($root) {
        super($root, {
            name: 'DiscountAndBonuses',
            listeners: ['click']
        });
        this.link = [
            {
                title: 'Скидки и бонусы',
                link: '/#personal-area/discount-and-bonuses'
            }
        ]
    }
    toHTML() {
        return discountAndBonusesTemplate(this.link)
    }
}