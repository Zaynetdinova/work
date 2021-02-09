import {Component} from "../../../core/Component";
import {ordersStatusTemplate} from "./ordersStatus.template";

export class OrdersStatus extends Component {
    static className = 'Orders-status'

    constructor($root) {
        super($root, {
            name: 'OrdersStatus',
            listeners: ['click']
        });
    }
    toHTML() {
        return ordersStatusTemplate()
    }
}