import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {ChosenPage} from "../../components/personalArea/chosenPage/chosenPage";

export class Chosen extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                ChosenPage,
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
