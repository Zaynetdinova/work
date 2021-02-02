import {transitionWrapper} from "../../common/transitionTitle";
import {titleShopping} from "../components/titleShopping";
import {paymentPage} from "./view/PaymentPage";

export function aboutPaymentPageTemplate() {
    return `
        <div>
            ${transitionWrapper(link)}
            ${titleShopping()}
            ${paymentPage()}
        </div>
    `
}

let link = [
    {
        title: 'Хлебные крошки',
        link: '/#about-shopping'
    }
]