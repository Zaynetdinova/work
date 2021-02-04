import {Component} from "../../../core/Component";
import {cooperationPageTemplate} from "./cooperationPage.template";


export class CooperationPage extends Component {
    static className = 'Cooperation-page'

    constructor($root) {
        super($root, {
            name: 'CooperationPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return cooperationPageTemplate()
    }

    onClick() {}
}