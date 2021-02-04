import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {CooperationPage} from "../../components/information/cooperationPage/cooperationPage";
import {Footer} from "../../components/footer/Footer";

export class AboutCooperation extends Page {
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                CooperationPage,
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