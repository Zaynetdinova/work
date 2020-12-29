import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {PopupQuickButton} from "../components/popupQuickButton/popupQuickButton";



export class Popup extends Page{
    getRoot() {
        this.app = new OptMoyo( {
            components: [
                PopupQuickButton
            ]
        })
        return this.app.getRoot()
    }

    afterRender() {
        this.app.init()
        super.afterRender()
    }
}