import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {AboutReturnsPage} from "../../components/information/aboutReturnsPage/aboutReturnsPage";
import {Footer} from "../../components/footer/Footer";

export class AboutReturn extends Page {
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                AboutReturnsPage,
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