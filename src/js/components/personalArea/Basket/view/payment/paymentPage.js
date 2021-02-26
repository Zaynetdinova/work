import {Component} from "../../../../../core/Component";
import {paymentPageTemplate} from "./paymentPage.template";

export class PaymentPage extends Component {
    static className = 'Payment-page'

    constructor($root) {
        super($root, {
            name: 'PaymentPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return paymentPageTemplate()
    }

    onClick(e) {}
}