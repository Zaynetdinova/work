import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {AboutUsPage} from "../../components/information/aboutUsPage/aboutUsPage";
import {Footer} from "../../components/footer/Footer";

export class AboutUs extends Page {
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                AboutUsPage,
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