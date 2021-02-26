import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {DeliveryPage} from "../../components/personalArea/Basket/view/chooseDeliveryMethod/deliveryPage";

export class DeliveryOrderPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                DeliveryPage,
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