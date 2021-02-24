import {Component} from "../../../core/Component";
import {aboutPaymentPageTemplate} from "./aboutPaymentPage.template";
import {toggleShowInformation} from '../../../core/utils/utils'

export class AboutPaymentPage extends Component {
    static className = 'About-payment'

    constructor($root) {
        super($root, {
            name: 'AboutPaymentPage',
            listeners: ['click']
        });
        this.link = [
            {
                title: 'Оплата',
                link: '/#information/about-payment'
            }
        ]
    }

    toHTML() {
        return aboutPaymentPageTemplate(this.link)
    }

    onClick(e) {
        if(e.target.closest('[data-parent-button-js]')) {
            const element = e.target.closest('[data-parent-button-js]');

            switch (element.id) {
                case 'top-box-js':
                    toggleShowInformation('[data-payment-page-top-box-js]')
                    break;
                case 'bottom-box-js':
                    toggleShowInformation('[data-payment-page-bottom-box-js]')
                    break;
            }
        }
    }
}