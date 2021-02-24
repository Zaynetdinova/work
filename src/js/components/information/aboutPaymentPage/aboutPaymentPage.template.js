import {paymentPage} from "./view/PaymentPage";
import {navigationInformationAboutShopping} from "../../common/navigationInformationAboutShopping";
import {navigationMobile} from "../../common/navigation-mobile";
import {breadCrumbs} from '../../common/breadCrumbs'

export function aboutPaymentPageTemplate(link) {
    return `
        <div>
            ${breadCrumbs(link)}
            <div class="title-shopping">О покупках</div>
            <div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('about-payment')}
           	    ${navigationMobile('/#information/size','оплата','/#information/about-shopping')}
            </div>
            ${paymentPage()}
        </div>
    `
}