import {transitionWrapper} from "../../common/transitionTitle";
import {paymentPage} from "./view/PaymentPage";
import {navigationInformationAboutShopping} from "../../common/navigationInformationAboutShopping";
import {navigationMobile} from "../../common/navigation-mobile";

export function aboutPaymentPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            <div class="title-shopping">О покупках</div>
            <div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('about-payment')}
           	    ${navigationMobile('/#information/size','оплата','/#information/about-shopping')}
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