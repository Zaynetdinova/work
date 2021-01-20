import {Page} from "../core/Page";
import {OptMoyo} from "../components/OptMoyo/OptMoyo";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {PersonalArea} from "../components/personalArea/personalArea";

export class PersonalAreaPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                PersonalArea,
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