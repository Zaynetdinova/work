import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {OrdersStatus} from "../../components/personalArea/ordersStatus/ordersStatus";

export class OrderStatusPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                OrdersStatus,
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