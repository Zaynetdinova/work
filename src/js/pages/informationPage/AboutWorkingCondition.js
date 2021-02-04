import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {WorkingConditionsPage} from "../../components/information/workingСonditionsPage/workingСonditionsPage";
import {Footer} from "../../components/footer/Footer";

export class AboutWorkingCondition extends Page {
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                WorkingConditionsPage,
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