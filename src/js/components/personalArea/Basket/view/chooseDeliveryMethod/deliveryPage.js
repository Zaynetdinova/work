import {Component} from "../../../../../core/Component";
import {deliveryPageTemplate} from "./deliveryPage.template";

export class DeliveryPage extends Component {
    static className = 'Delivery-page'

    constructor($root) {
        super($root, {
            name: 'DeliveryPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return deliveryPageTemplate()
    }

    onClick(e) {}
}