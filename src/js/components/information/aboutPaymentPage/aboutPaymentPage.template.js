import {transitionWrapper} from "../../common/transitionTitle";
import {paymentPage} from "./view/PaymentPage";

export function aboutPaymentPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            <div class="title-shopping">О покупках</div>
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