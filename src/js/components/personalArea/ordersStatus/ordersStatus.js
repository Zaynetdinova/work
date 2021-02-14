import {Component} from "../../../core/Component";
import {ordersStatusTemplate} from "./ordersStatus.template";
import {toggleShowInformation} from '../../../core/utils/utils'

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
    onClick(e) {
        if(e.target.closest('[data-parent-order-js]')) {
            const element = e.target.closest('[data-parent-order-js]');

            switch (element.id) {
                case 'more-details':
                    toggleShowInformation('[data-oder-name-page]')
                    break;
            }
        }
    }
}