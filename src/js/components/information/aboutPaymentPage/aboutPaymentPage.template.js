import {transitionWrapper} from "../../common/transitionTitle";
import {paymentPage} from "./view/PaymentPage";
import {navigationInformationAboutShopping} from "../../common/navigationInformationAboutShopping";

export function aboutPaymentPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            <div class="title-shopping">О покупках</div>
            <div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('about-payment')}
            </div>
            ${paymentPage()}
        </div>
    `
}

let link = [
    {
        title: 'Оплата',
        link: '/#information/about-payment'
    }
]