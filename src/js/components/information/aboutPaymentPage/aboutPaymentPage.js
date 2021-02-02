import {Component} from "../../../core/Component";
import {aboutPaymentPageTemplate} from "./aboutPaymentPage.template";
import {UtilsCardProductPage} from "../../cardProductPage/js/utilsCardProductPage";

export class AboutPaymentPage extends Component {
    static className = 'About-payment'

    constructor($root) {
        super($root, {
            name: 'AboutPaymentPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return aboutPaymentPageTemplate()
    }
    afterInitComponent() {
        this.utils = new UtilsCardProductPage()
    }

    onClick(e) {
        if(e.target.closest('article')) {
            const element = e.target.closest('article');

            switch (element.id) {
                case 'top-box-js':
                    this.utils.infoProductShow('.top-box')
                    break;
                case 'bottom-box-js':
                    this.utils.infoProductShow('.bottom-box')
                    break;
            }
        }
    }
}