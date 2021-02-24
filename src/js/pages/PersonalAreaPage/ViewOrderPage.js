import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {ViewOrder} from "../../components/personalArea/ordersStatus/viewOder";

export class ViewOrderPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                ViewOrder,
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