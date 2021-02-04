import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {AboutContactsPage} from "../../components/information/aboutContactsPage/aboutContactsPage";
import {Footer} from "../../components/footer/Footer";

export class AboutContacts extends Page {
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                AboutContactsPage,
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