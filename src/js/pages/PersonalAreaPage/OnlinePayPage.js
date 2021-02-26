import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {OnlinePayOrder} from "../../components/personalArea/Basket/view/payment/onlinePay/onlinePayOrder";

export class OnlinePayPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                OnlinePayOrder,
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