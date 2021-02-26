import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {PaymentPage} from "../../components/personalArea/Basket/view/payment/paymentPage";

export class PaymentOrderPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                PaymentPage,
                Footer,
            ]
        })
        return this.app.getRoot()
    }

    afterRender() {
        this.app.init()
        super.afterRender()
    }
}