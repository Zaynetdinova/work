import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {AboutPaymentPage} from "../../components/information/aboutPaymentPage/aboutPaymentPage";
import {Footer} from "../../components/footer/Footer";

export class AboutPayment extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                AboutPaymentPage,
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