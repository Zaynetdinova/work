import {Component} from "../../../core/Component";
import {toggleShowInformation} from "../../../core/utils/utils";
import {viewOrderTemplate} from "./viewOrder.template";

export class ViewOrder extends Component {
    static className = 'Orders-status'

    constructor($root) {
        super($root, {
            name: 'ViewOrder',
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
        return viewOrderTemplate(this.link)
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