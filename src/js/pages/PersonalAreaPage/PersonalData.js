import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {PersonalData} from '../../components/personalArea/personalData/personalData'

export class PersonalDataPage extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                Header,
                PersonalData,
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
