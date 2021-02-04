import {Component} from "../../../core/Component";
import {aboutReturnsPageTemplate} from "./aboutReturnsPage.template";

export class AboutReturnsPage extends Component {
    static className = 'About-returns-page'

    constructor($root) {
        super($root, {
            name: 'AboutReturnsPage',
            listeners: ['click']
        });
    }

    toHTML() {
        return aboutReturnsPageTemplate()
    }

    onClick() {}
}