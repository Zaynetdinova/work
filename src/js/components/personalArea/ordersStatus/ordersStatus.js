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
        this.link = [
            {
                title: 'История заказов',
                link: '/#personal-area/order-status'
            }
        ]
    }
    toHTML() {
        return ordersStatusTemplate(this.link)
    }
    onClick(e) {
        if(e.target.closest('[data-parent-order-js]')) {
            const element = e.target.closest('[data-parent-order-js]');

            switch (element.id) {
                case 'more-details':
                    toggleShowInformation('[data-oder-name-page]')
                    break;
                case 'more-details-view-order-page':
                    toggleShowInformation('[data-view-oder-page]')
                    break;
                case 'more-details-not-included-table':
                    toggleShowInformation('[data-not-included-page]')
                    break;
            }
        }
    }
}