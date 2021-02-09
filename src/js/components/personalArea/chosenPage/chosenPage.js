import {Component} from "../../../core/Component";
import {chosenPageTemplate} from "./chosenPage.template";

export class ChosenPage extends Component {
    static className = 'Chosen-page'

    constructor($root) {
        super($root, {
            name: 'ChosenPage',
            listeners: ['click']
        });
    }
    toHTML() {
        return chosenPageTemplate()
    }
}