import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {AboutSizePage} from "../../components/information/aboutSizePage/aboutSizePage";
import {Footer} from "../../components/footer/Footer";

export class AboutSize extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                AboutSizePage,
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