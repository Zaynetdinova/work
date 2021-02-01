import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {DiscountAndBonuses} from "../../components/personalArea/discountAndBonuses/discountAndBonuses";
import {Footer} from "../../components/footer/Footer";

export class BonusesPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                DiscountAndBonuses,
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