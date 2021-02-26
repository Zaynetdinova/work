import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {OrderDone} from "../../components/personalArea/Basket/view/payment/orderDone/orderDone";

export class OrderDonePage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                OrderDone,
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